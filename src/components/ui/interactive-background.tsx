'use client'
import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

export const InteractiveBackground = () => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Using state to ensure window is defined before rendering framer logic that depends on window
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        // Set initial mouse position to center
        mouseX.set(window.innerWidth / 2)
        mouseY.set(window.innerHeight / 2)

        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
        }
        window.addEventListener('mousemove', handleMouseMove)
        return () => window.removeEventListener('mousemove', handleMouseMove)
    }, [mouseX, mouseY])

    // Smooth spring physics for a magnet-like floating feeling
    const springConfig = { damping: 25, stiffness: 35, mass: 1.5 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    // Map mouse position to constrained movement ranges
    // The image will move slightly towards the cursor to create a parallax/magnetic illusion
    const translateX = useTransform(x, [0, mounted ? window.innerWidth : 1000], [-40, 40])
    const translateY = useTransform(y, [0, mounted ? window.innerHeight : 800], [-40, 40])
    
    // Apply a slight 3D rotation based on mouse position
    const rotateX = useTransform(y, [0, mounted ? window.innerHeight : 800], [5, -5])
    const rotateY = useTransform(x, [0, mounted ? window.innerWidth : 1000], [-5, 5])

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden bg-transparent pointer-events-none">
            {/* Pontos de luz nos quatro cantos (Cyan e Magenta/Roxo para combinar com cyberpunk) */}
            <div className="absolute top-[-30%] left-[-15%] w-[60%] h-[60%] bg-purple-600/30 blur-[130px] rounded-full mix-blend-screen" />
            <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/20 blur-[120px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-[-15%] left-[-15%] w-[55%] h-[55%] bg-cyan-600/20 blur-[140px] rounded-full mix-blend-screen" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-fuchsia-600/30 blur-[120px] rounded-full mix-blend-screen" />

            {/* Fundo 3D Interativo */}
            <motion.div
                className="absolute inset-[-10%]"
                style={{
                    x: translateX,
                    y: translateY,
                    rotateX,
                    rotateY,
                    scale: 1.15, // Scale upped to avoid edge clipping during rotation
                    backgroundImage: "url('/34131209423563.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    perspective: 1000,
                }}
            >
                {/* Overlay sutil na própria imagem simulando sombreamento direcional */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
            </motion.div>
        </div>
    )
}
