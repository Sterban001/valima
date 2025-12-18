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

    // REDUCED petal count for better performance
    const petalCount = isMobile ? 8 : 12;

    // Generate array of petals with random properties
    const petals = Array.from({ length: petalCount }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${10 + Math.random() * 8}s`,
        size: isMobile ? 18 + Math.random() * 10 : 14 + Math.random() * 10,
        opacity: 0.6 + Math.random() * 0.3,
        color: Math.random() > 0.5 ? '#e89ba3' : '#f4c2c2',
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
                    initial={{ y: -20, opacity: 0 }}
                    animate={{
                        y: ['0vh', '110vh'],
                        x: [
                            0,
                            (Math.random() * 60 - 30),
                            (Math.random() * 60 - 30)
                        ],
                        rotate: [0, 360],
                        opacity: [0, petal.opacity, petal.opacity, 0],
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
                        willChange: 'transform', // Performance hint
                    }}
                >
                    {/* Simplified rose petal SVG */}
                    <svg
                        width={petal.size}
                        height={petal.size}
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <linearGradient id={`gradient-${petal.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: petal.color, stopOpacity: 0.9 }} />
                                <stop offset="100%" style={{ stopColor: petal.innerColor, stopOpacity: 0.8 }} />
                            </linearGradient>
                        </defs>
                        <path
                            d="M10 2C7 2 5 4 5 7C5 9 6 10 7 11C5 11 3 12 3 14C3 16 5 18 8 18C8 18 9 16 10 16C11 16 12 18 12 18C15 18 17 16 17 14C17 12 15 11 13 11C14 10 15 9 15 7C15 4 13 2 10 2Z"
                            fill={`url(#gradient-${petal.id})`}
                            opacity="0.9"
                        />
                    </svg>
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingPetals;
