import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FloatingPetals = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Increase petal count and size for mobile
    const petalCount = isMobile ? 25 : 20;

    // Generate array of petals with random properties
    const petals = Array.from({ length: petalCount }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDelay: i < 8 ? '0s' : `${Math.random() * 10}s`, // More petals start immediately on mobile
        animationDuration: `${8 + Math.random() * 12}s`, // Varied speeds
        size: isMobile ? 16 + Math.random() * 16 : 12 + Math.random() * 12, // Larger on mobile: 16-32px vs 12-24px
        opacity: isMobile ? 0.6 + Math.random() * 0.4 : 0.5 + Math.random() * 0.4, // More visible on mobile: 0.6-1.0
        color: Math.random() > 0.5 ? '#e89ba3' : '#f4c2c2', // Varied petal colors
        innerColor: Math.random() > 0.5 ? '#d97583' : '#e89ba3',
    }));

    return (
        <div
            className="fixed inset-0 pointer-events-none overflow-hidden"
            style={{ zIndex: 5 }}
        >
            {petals.map((petal) => (
                <motion.div
                    key={petal.id}
                    initial={{ y: -20, opacity: 0, scale: 0 }}
                    animate={{
                        y: ['0vh', '110vh'],
                        x: [
                            0,
                            (Math.random() * 100 - 50) * (isMobile ? 0.8 : 1), // Less horizontal drift on mobile
                            (Math.random() * 100 - 50) * (isMobile ? 0.8 : 1)
                        ],
                        rotate: [0, 360, 720],
                        scale: [0, 1, 1, 0.8],
                        opacity: [0, petal.opacity, petal.opacity, petal.opacity * 0.5, 0],
                    }}
                    transition={{
                        duration: parseFloat(petal.animationDuration),
                        delay: parseFloat(petal.animationDelay),
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    style={{
                        position: 'absolute',
                        left: petal.left,
                        top: '-20px',
                        filter: isMobile ? 'drop-shadow(0 2px 4px rgba(212, 175, 55, 0.3))' : 'none', // Add glow on mobile
                    }}
                >
                    {/* Rose petal SVG with enhanced colors */}
                    <svg
                        width={petal.size}
                        height={petal.size}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        {/* Main petal shape with gradient effect */}
                        <defs>
                            <linearGradient id={`gradient-${petal.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: petal.color, stopOpacity: 0.95 }} />
                                <stop offset="100%" style={{ stopColor: petal.innerColor, stopOpacity: 0.85 }} />
                            </linearGradient>
                        </defs>
                        <path
                            d="M10 2C7 2 5 4 5 7C5 9 6 10 7 11C5 11 3 12 3 14C3 16 5 18 8 18C8 18 9 16 10 16C11 16 12 18 12 18C15 18 17 16 17 14C17 12 15 11 13 11C14 10 15 9 15 7C15 4 13 2 10 2Z"
                            fill={`url(#gradient-${petal.id})`}
                            opacity="0.95"
                        />
                        <path
                            d="M10 5C9 5 8 6 8 7C8 8 9 9 10 9C11 9 12 8 12 7C12 6 11 5 10 5Z"
                            fill={petal.innerColor}
                            opacity="0.9"
                        />
                        {/* Add subtle highlights for depth */}
                        <path
                            d="M10 3C9.5 3 9 3.5 9 4C9 4.5 9.5 5 10 5C10.5 5 11 4.5 11 4C11 3.5 10.5 3 10 3Z"
                            fill="white"
                            opacity="0.3"
                        />
                    </svg>
                </motion.div>
            ))}

            {/* Add sparkle particles on mobile for extra effect */}
            {isMobile && Array.from({ length: 10 }, (_, i) => (
                <motion.div
                    key={`sparkle-${i}`}
                    className="absolute text-gold-400 text-xs md:text-sm"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        y: ['0vh', '110vh'],
                        opacity: [0, 0.8, 0.8, 0],
                        scale: [0, 1, 1, 0],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 12 + Math.random() * 8,
                        delay: Math.random() * 10,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: '-20px',
                    }}
                >
                    ✨
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingPetals;
