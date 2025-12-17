import React from 'react';
import { motion } from 'framer-motion';

const Sparkle = ({ isHovered }) => {
    const sparkles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        angle: (i * 45) * Math.PI / 180, // 8 sparkles in circle
    }));

    return (
        <>
            {sparkles.map((sparkle) => (
                <motion.div
                    key={sparkle.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isHovered ? {
                        scale: [0, 1, 0],
                        opacity: [0, 1, 0],
                        x: Math.cos(sparkle.angle) * 30,
                        y: Math.sin(sparkle.angle) * 30,
                    } : {
                        scale: 0,
                        opacity: 0,
                    }}
                    transition={{
                        duration: 1,
                        repeat: isHovered ? Infinity : 0,
                        repeatDelay: 0.5,
                    }}
                    className="absolute pointer-events-none"
                    style={{
                        left: '50%',
                        top: '50%',
                    }}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12">
                        <path
                            d="M6 0L7 5L12 6L7 7L6 12L5 7L0 6L5 5L6 0Z"
                            fill="#D4AF37"
                            opacity="0.8"
                        />
                    </svg>
                </motion.div>
            ))}
        </>
    );
};

export default Sparkle;
