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

    // Removed auto-sparkle for better performance

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
            {/* Static background glow for better performance */}
            <div className="absolute inset-0 opacity-10 bg-gradient-radial from-gold-400/30 to-transparent" />

            <div className="absolute inset-0 opacity-5 border-y-2 border-gold-400 m-4 pointer-events-none"></div>

            <div className="container mx-auto px-4 text-center">
                <motion.div
                    initial={{ x: -30, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <p className="text-gray-500 mb-4 font-serif italic text-lg">
                        of their son
                    </p>
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
                    <span className="text-xl md:text-2xl font-serif text-gray-700 block mt-2">
                        (Rahil)
                    </span>
                    <p className="text-base text-gray-500 mt-2 font-serif tracking-wide">M.Tech (Canada)</p>
                </motion.div>

                <div
                    className="w-16 h-16 mx-auto my-6 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center text-white font-serif text-2xl shadow-lg"
                >
                    &
                </div>

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
                    <p className="text-gray-500 mt-6 font-serif italic text-lg">
                        D/o Mr. Mohammed Sadiq Sahab
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Couple;
