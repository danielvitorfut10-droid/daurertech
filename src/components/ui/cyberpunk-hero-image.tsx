import React from 'react';

const CyberpunkHeroImage = () => {
    return (
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-3xl">
            <style>
                {`
                @keyframes float-cyberpunk {
                    0% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                    100% { transform: translateY(0px); }
                }

                @keyframes glitch-cyberpunk {
                    0% { transform: translate(0); }
                    20% { transform: translate(-2px, 2px); }
                    40% { transform: translate(-2px, -2px); }
                    60% { transform: translate(2px, 2px); }
                    80% { transform: translate(2px, -2px); }
                    100% { transform: translate(0); }
                }

                @keyframes move-cyberpunk {
                    from { transform: translateY(100vh); }
                    to { transform: translateY(-10vh); }
                }

                .image-container-cyberpunk {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    background-image: url('/34131209423563.png');
                    background-size: cover;
                    background-position: center;
                    border-radius: 16px;
                    box-shadow: 0 0 40px rgba(0,255,255,0.4),
                                0 0 80px rgba(255,0,150,0.3);
                    transition: transform 0.3s ease, filter 0.3s ease;
                    animation: float-cyberpunk 5s ease-in-out infinite;
                }

                /* Neon border */
                .image-container-cyberpunk::before {
                    content: "";
                    position: absolute;
                    inset: -2px;
                    border-radius: 18px;
                    background: linear-gradient(45deg, #0ff, #f0f, #0ff);
                    z-index: -1;
                    filter: blur(8px);
                    opacity: 0.7;
                }

                /* Scanline overlay */
                .image-container-cyberpunk::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: repeating-linear-gradient(
                        to bottom,
                        rgba(0,255,255,0.05),
                        rgba(0,255,255,0.05) 2px,
                        transparent 2px,
                        transparent 4px
                    );
                    pointer-events: none;
                    mix-blend-mode: overlay;
                }

                /* Hover effects */
                .image-container-cyberpunk:hover {
                    transform: scale(1.05) rotateX(4deg) rotateY(-4deg);
                    filter: brightness(1.2) contrast(1.1) saturate(1.2);
                }

                /* Glitch effect */
                .glitch-cyberpunk {
                    position: absolute;
                    inset: 0;
                    background-image: url('/34131209423563.png');
                    background-size: cover;
                    background-position: center;
                    opacity: 0.15;
                    mix-blend-mode: screen;
                    animation: glitch-cyberpunk 2s infinite;
                }

                /* Background particles */
                .particles-cyberpunk {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    z-index: 0;
                }

                .particles-cyberpunk span {
                    position: absolute;
                    display: block;
                    width: 2px;
                    height: 2px;
                    background: #0ff;
                    animation: move-cyberpunk 10s linear infinite;
                }

                @media (max-width: 768px) {
                    .image-container-cyberpunk {
                        width: 100%;
                        height: 100%;
                    }
                }
                `}
            </style>
            
            <div className="particles-cyberpunk">
                <span style={{ left: '10%', animationDuration: '8s' }}></span>
                <span style={{ left: '30%', animationDuration: '12s' }}></span>
                <span style={{ left: '50%', animationDuration: '10s' }}></span>
                <span style={{ left: '70%', animationDuration: '14s' }}></span>
                <span style={{ left: '90%', animationDuration: '9s' }}></span>
            </div>

            <div className="image-container-cyberpunk">
                <div className="glitch-cyberpunk"></div>
            </div>
        </div>
    );
};

export default CyberpunkHeroImage;
