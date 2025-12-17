import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Sparkle from './Sparkle';

const Couple = () => {
    const [groomHovered, setGroomHovered] = useState(false);
    const [brideHovered, setBrideHovered] = useState(false);
    const [groomTapped, setGroomTapped] = useState(false);
    const [brideTapped, setBrideTapped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile device
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-sparkle effect on mobile
    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(() => {
                setGroomHovered(true);
                setTimeout(() => setGroomHovered(false), 2000);
                setTimeout(() => {
                    setBrideHovered(true);
                    setTimeout(() => setBrideHovered(false), 2000);
                }, 2500);
            }, 6000);
            return () => clearInterval(interval);
        }
    }, [isMobile]);

    const handleGroomInteraction = () => {
        if (isMobile) {
            setGroomTapped(!groomTapped);
            setGroomHovered(!groomTapped);
        }
    };

    const handleBrideInteraction = () => {
        if (isMobile) {
            setBrideTapped(!brideTapped);
            setBrideHovered(!brideTapped);
        }
    };

    return (
        <section className="py-12 bg-white relative overflow-hidden">
            {/* Animated background glow */}
            <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                    background: [
                        'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)',
                        'radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)',
                        'radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.3) 0%, transparent 50%)',
                    ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="absolute inset-0 opacity-5 border-y-2 border-gold-400 m-4 pointer-events-none"></div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <motion.p
                        className="text-gray-500 mb-4 font-serif italic text-lg"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        of their son
                    </motion.p>
                    <div
                        className="relative inline-block"
                        onMouseEnter={() => !isMobile && setGroomHovered(true)}
                        onMouseLeave={() => !isMobile && setGroomHovered(false)}
                        onClick={handleGroomInteraction}
                        onTouchStart={handleGroomInteraction}
                    >
                        <motion.h1
                            animate={groomHovered || groomTapped ? {
                                textShadow: [
                                    '0 0 10px rgba(212, 175, 55, 0.5)',
                                    '0 0 20px rgba(212, 175, 55, 0.8)',
                                    '0 0 30px rgba(212, 175, 55, 0.6)',
                                    '0 0 20px rgba(212, 175, 55, 0.8)',
                                    '0 0 10px rgba(212, 175, 55, 0.5)',
                                ],
                                scale: isMobile ? [1, 1.05, 1] : 1,
                            } : {}}
                            transition={{
                                duration: 1.5,
                                repeat: (groomHovered || groomTapped) ? Infinity : 0,
                                ease: "easeInOut"
                            }}
                            whileTap={{ scale: 1.1 }}
                            className="text-5xl md:text-7xl font-cursive text-gold-600 mb-2 leading-relaxed py-2 cursor-pointer active:scale-110 transition-transform"
                        >
                            Mohammed Basharath Ali
                        </motion.h1>
                        <Sparkle isHovered={groomHovered || groomTapped} />

                        {/* Mobile pulse indicator */}
                        {isMobile && !groomTapped && (
                            <motion.div
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-gold-400 text-xs"
                                animate={{ opacity: [0.3, 0.7, 0.3], y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                ✨ Tap me ✨
                            </motion.div>
                        )}
                    </div>
                    <motion.span
                        className="text-xl md:text-2xl font-serif text-gray-700 block mt-2"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        (Rahil)
                    </motion.span>
                    <p className="text-base text-gray-500 mt-2 font-serif tracking-wide">M.Tech (Canada)</p>
                </motion.div>

                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    animate={{
                        rotate: [0, 360],
                        boxShadow: [
                            '0 0 20px rgba(212, 175, 55, 0.5)',
                            '0 0 40px rgba(212, 175, 55, 0.8)',
                            '0 0 20px rgba(212, 175, 55, 0.5)',
                        ]
                    }}
                    transition={{
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        boxShadow: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="w-16 h-16 mx-auto my-6 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-serif text-2xl shadow-lg"
                >
                    &
                </motion.div>

                <motion.div
                    initial={{ x: 30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-8"
                >
                    <div
                        className="relative inline-block"
                        onMouseEnter={() => !isMobile && setBrideHovered(true)}
                        onMouseLeave={() => !isMobile && setBrideHovered(false)}
                        onClick={handleBrideInteraction}
                        onTouchStart={handleBrideInteraction}
                    >
                        <motion.h1
                            animate={brideHovered || brideTapped ? {
                                textShadow: [
                                    '0 0 10px rgba(212, 175, 55, 0.5)',
                                    '0 0 20px rgba(212, 175, 55, 0.8)',
                                    '0 0 30px rgba(212, 175, 55, 0.6)',
                                    '0 0 20px rgba(212, 175, 55, 0.8)',
                                    '0 0 10px rgba(212, 175, 55, 0.5)',
                                ],
                                scale: isMobile ? [1, 1.05, 1] : 1,
                            } : {}}
                            transition={{
                                duration: 1.5,
                                repeat: (brideHovered || brideTapped) ? Infinity : 0,
                                ease: "easeInOut"
                            }}
                            whileTap={{ scale: 1.1 }}
                            className="text-5xl md:text-7xl font-cursive text-gold-600 mb-2 leading-relaxed py-2 cursor-pointer active:scale-110 transition-transform"
                        >
                            Rafath Unnisa
                        </motion.h1>
                        <Sparkle isHovered={brideHovered || brideTapped} />

                        {/* Mobile pulse indicator */}
                        {isMobile && !brideTapped && (
                            <motion.div
                                className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-gold-400 text-xs"
                                animate={{ opacity: [0.3, 0.7, 0.3], y: [0, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            >
                                ✨ Tap me ✨
                            </motion.div>
                        )}
                    </div>
                    <p className="text-base text-gray-500 mt-2 font-serif tracking-wide">B.Tech</p>
                    <motion.p
                        className="text-gray-500 mt-6 font-serif italic text-lg"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    >
                        D/o Mr. Mohammed Sadiq Sahab
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default Couple;
