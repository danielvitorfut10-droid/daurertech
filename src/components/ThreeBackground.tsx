import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- Digital Network ---
    const nodeCount = 120; // Increased count
    const nodesGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(nodeCount * 3);
    const nodeVelocities: THREE.Vector3[] = [];

    for (let i = 0; i < nodeCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      nodeVelocities.push(new THREE.Vector3(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01
      ));
    }
    nodesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const nodesMaterial = new THREE.PointsMaterial({
      color: 0x0ea5e9, 
      size: 0.15, // Slightly larger
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });
    const networkNodes = new THREE.Points(nodesGeometry, nodesMaterial);
    scene.add(networkNodes);

    // Starfield (secondary layer of smaller points)
    const starCount = 300;
    const starGeometry = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
        starPositions[i * 3] = (Math.random() - 0.5) * 20;
        starPositions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        starPositions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 0.04,
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Connections (Lines)
    const linesMaterial = new THREE.LineBasicMaterial({
      color: 0x0ea5e9,
      transparent: true,
      opacity: 0.3, // Increased visibility
      blending: THREE.AdditiveBlending,
    });
    let linesMesh = new THREE.LineSegments(new THREE.BufferGeometry(), linesMaterial);
    scene.add(linesMesh);

    // --- Floating Geometric Shapes ---
    const shapeCount = 12;
    const shapes: THREE.Mesh[] = [];
    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.DodecahedronGeometry(0.8, 0),
      new THREE.OctahedronGeometry(0.7, 0),
    ];

    for (let i = 0; i < shapeCount; i++) {
      const geometry = geometries[Math.floor(Math.random() * geometries.length)];
      const material = new THREE.MeshPhongMaterial({
        color: 0x0ea5e9,
        wireframe: true,
        transparent: true,
        opacity: 0.4, // Increased from 0.15
        side: THREE.DoubleSide,
        emissive: 0x0ea5e9,
        emissiveIntensity: 0.2,
      });
      const shape = new THREE.Mesh(geometry, material);
      
      shape.position.set(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10 - 5
      );
      shape.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      
      const scale = 0.5 + Math.random();
      shape.scale.set(scale, scale, scale);
      
      scene.add(shape);
      shapes.push(shape);
    }

    // --- Lights ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0x0ea5e9, 2, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // --- Mouse Interactivity ---
    const mouse = { x: 0, y: 0 };
    const targetMouse = { x: 0, y: 0 };

    const onMouseMove = (event: MouseEvent) => {
      targetMouse.x = (event.clientX / window.innerWidth - 0.5) * 2;
      targetMouse.y = -(event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMouseMove);

    // --- Animation Loop ---
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth mouse movement with GSAP-like inertia
      mouse.x += (targetMouse.x - mouse.x) * 0.05;
      mouse.y += (targetMouse.y - mouse.y) * 0.05;

      // Rotate scene based on mouse
      scene.rotation.y = mouse.x * 0.2;
      scene.rotation.x = -mouse.y * 0.2;

      // Animate Nodes
      const positions = nodesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < nodeCount; i++) {
        positions[i * 3] += nodeVelocities[i].x;
        positions[i * 3 + 1] += nodeVelocities[i].y;
        positions[i * 3 + 2] += nodeVelocities[i].z;

        // Bounce inside bounds
        if (Math.abs(positions[i * 3]) > 7) nodeVelocities[i].x *= -1;
        if (Math.abs(positions[i * 3 + 1]) > 7) nodeVelocities[i].y *= -1;
        if (Math.abs(positions[i * 3 + 2]) > 7) nodeVelocities[i].z *= -1;
      }
      nodesGeometry.attributes.position.needsUpdate = true;

      // Update Connections (Lines)
      const linePositions: number[] = [];
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < 6) {
            linePositions.push(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
            linePositions.push(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
          }
        }
      }
      linesMesh.geometry.dispose();
      linesMesh.geometry = new THREE.BufferGeometry();
      linesMesh.geometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

      // Animate Floating Shapes
      shapes.forEach((shape, idx) => {
        shape.rotation.x += 0.005;
        shape.rotation.y += 0.005;
        
        // Floating movement
        shape.position.y += Math.sin(elapsed + idx) * 0.002;

        // Dodge effect (parallax dynamic)
        const dodgeX = mouse.x * (idx % 3 + 1) * 0.5;
        const dodgeY = mouse.y * (idx % 3 + 1) * 0.5;
        
        // Use GSAP to animate individual shapes if complex dodging is needed, 
        // but for performance here we just apply a simple offset
        shape.position.x += (dodgeX - (shape.position.x - shape.userData.initialX || 0)) * 0.02;
      });

      renderer.render(scene, camera);
    };

    // Store initial positions for dodging
    shapes.forEach(s => {
        s.userData.initialX = s.position.x;
        s.userData.initialY = s.position.y;
    });

    animate();

    // --- Resize Handler ---
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none" />;
};

export default ThreeBackground;
