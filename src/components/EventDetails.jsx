import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import AddToCalendar from './AddToCalendar';

const EventDetails = () => {
    const [dateCardHover, setDateCardHover] = useState({ x: 0, y: 0, isHovered: false });
    const [timeCardHover, setTimeCardHover] = useState({ x: 0, y: 0, isHovered: false });
    const [isMobile, setIsMobile] = useState(false);
    const [dateCardActive, setDateCardActive] = useState(false);
    const [timeCardActive, setTimeCardActive] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Auto-pulse cards on mobile
    useEffect(() => {
        if (isMobile) {
            const interval = setInterval(() => {
                setDateCardActive(true);
                setTimeout(() => setDateCardActive(false), 1500);
                setTimeout(() => {
                    setTimeCardActive(true);
                    setTimeout(() => setTimeCardActive(false), 1500);
                }, 2000);
            }, 8000);
            return () => clearInterval(interval);
        }
    }, [isMobile]);

    const handleMouseMove = (e, setHover) => {
        if (isMobile) return; // Disable 3D effect on mobile
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 10;
        const y = (e.clientY - rect.top - rect.height / 2) / 10;
        setHover({ x, y, isHovered: true });
    };

    const handleMouseLeave = (setHover) => {
        setHover({ x: 0, y: 0, isHovered: false });
    };

    const handleDateCardTap = () => {
        if (isMobile) {
            setDateCardActive(!dateCardActive);
        }
    };

    const handleTimeCardTap = () => {
        if (isMobile) {
            setTimeCardActive(!timeCardActive);
        }
    };

    return (
        <section className="py-16 bg-cream text-center relative overflow-hidden">
            {/* Animated background particles */}
            <motion.div
                className="absolute inset-0 opacity-5"
                animate={{
                    background: [
                        'radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.4) 0%, transparent 60%)',
                        'radial-gradient(circle at 70% 70%, rgba(212, 175, 55, 0.4) 0%, transparent 60%)',
                        'radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.4) 0%, transparent 60%)',
                    ]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    animate={{
                        scale: [1, 1.02, 1],
                    }}
                    transition={{
                        scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="mb-12 font-serif text-2xl md:text-3xl text-royal-900 border-b-2 border-gold-400 inline-block pb-2"
                >
                    Insha Allah
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-center justify-center">
                    <motion.div
                        onMouseMove={(e) => handleMouseMove(e, setDateCardHover)}
                        onMouseLeave={() => handleMouseLeave(setDateCardHover)}
                        onClick={handleDateCardTap}
                        onTouchStart={handleDateCardTap}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        animate={isMobile ? {
                            scale: dateCardActive ? [1, 1.08, 1.05] : 1,
                            boxShadow: dateCardActive
                                ? [
                                    '0 10px 30px rgba(212, 175, 55, 0.3)',
                                    '0 20px 50px rgba(212, 175, 55, 0.6)',
                                    '0 15px 40px rgba(212, 175, 55, 0.4)',
                                ]
                                : '0 10px 30px rgba(0,0,0,0.1)',
                        } : {
                            rotateX: dateCardHover.isHovered ? -dateCardHover.y : 0,
                            rotateY: dateCardHover.isHovered ? dateCardHover.x : 0,
                            scale: dateCardHover.isHovered ? 1.05 : 1,
                        }}
                        transition={isMobile ? {
                            duration: 0.6,
                            ease: "easeOut"
                        } : {
                            type: 'spring',
                            stiffness: 300,
                            damping: 20
                        }}
                        style={{
                            transformStyle: 'preserve-3d',
                            boxShadow: !isMobile && dateCardHover.isHovered
                                ? `${dateCardHover.x}px ${dateCardHover.y}px 30px rgba(212, 175, 55, 0.4)`
                                : '0 10px 30px rgba(0,0,0,0.1)',
                        }}
                        className="bg-white p-8 rounded-lg border border-gold-400/30 cursor-pointer relative"
                    >
                        <motion.div
                            animate={dateCardActive ? { rotate: [0, -10, 10, -10, 0] } : {}}
                            transition={{ duration: 0.5 }}
                        >
                            <Calendar className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Wednesday</h3>
                        <motion.p
                            className="text-4xl font-bold text-royal-800 my-2"
                            animate={dateCardActive ? {
                                scale: [1, 1.1, 1],
                                color: ['#1e3a8a', '#d4af37', '#1e3a8a']
                            } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            7th Jan 2026
                        </motion.p>
                        <p className="text-sm text-gray-500 italic">17th Rajjab-ul-Murajjab 1447 Hijri</p>

                        {/* Tap indicator for mobile */}
                        {isMobile && !dateCardActive && (
                            <motion.div
                                className="absolute -top-2 -right-2 bg-gold-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                📅
                            </motion.div>
                        )}
                    </motion.div>

                    <motion.div
                        onMouseMove={(e) => handleMouseMove(e, setTimeCardHover)}
                        onMouseLeave={() => handleMouseLeave(setTimeCardHover)}
                        onClick={handleTimeCardTap}
                        onTouchStart={handleTimeCardTap}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        animate={isMobile ? {
                            scale: timeCardActive ? [1, 1.08, 1.05] : 1,
                            boxShadow: timeCardActive
                                ? [
                                    '0 10px 30px rgba(212, 175, 55, 0.3)',
                                    '0 20px 50px rgba(212, 175, 55, 0.6)',
                                    '0 15px 40px rgba(212, 175, 55, 0.4)',
                                ]
                                : '0 10px 30px rgba(0,0,0,0.1)',
                        } : {
                            rotateX: timeCardHover.isHovered ? -timeCardHover.y : 0,
                            rotateY: timeCardHover.isHovered ? timeCardHover.x : 0,
                            scale: timeCardHover.isHovered ? 1.05 : 1,
                        }}
                        transition={isMobile ? {
                            duration: 0.6,
                            ease: "easeOut"
                        } : {
                            type: 'spring',
                            stiffness: 300,
                            damping: 20
                        }}
                        style={{
                            transformStyle: 'preserve-3d',
                            boxShadow: !isMobile && timeCardHover.isHovered
                                ? `${timeCardHover.x}px ${timeCardHover.y}px 30px rgba(212, 175, 55, 0.4)`
                                : '0 10px 30px rgba(0,0,0,0.1)',
                        }}
                        className="bg-white p-8 rounded-lg border border-gold-400/30 cursor-pointer relative"
                    >
                        <motion.div
                            animate={timeCardActive ? { rotate: [0, 360] } : { rotate: [0, 15, -15, 0] }}
                            transition={timeCardActive ? { duration: 1 } : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <Clock className="w-12 h-12 text-gold-500 mx-auto mb-4" />
                        </motion.div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">Dinner</h3>
                        <motion.p
                            className="text-4xl font-bold text-royal-800 my-2"
                            animate={timeCardActive ? {
                                scale: [1, 1.1, 1],
                                color: ['#1e3a8a', '#d4af37', '#1e3a8a']
                            } : {}}
                            transition={{ duration: 0.6 }}
                        >
                            9:00 PM
                        </motion.p>
                        <p className="text-sm text-gray-500 italic">Please join us for dinner</p>

                        {/* Tap indicator for mobile */}
                        {isMobile && !timeCardActive && (
                            <motion.div
                                className="absolute -top-2 -right-2 bg-gold-400 text-white rounded-full w-8 h-8 flex items-center justify-center text-xs font-bold"
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, -10, 10, 0]
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            >
                                🕘
                            </motion.div>
                        )}
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-white p-8 rounded-lg shadow-2xl border-2 border-gold-400 relative overflow-hidden"
                >
                    <motion.div
                        className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300"
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        style={{ backgroundSize: '200% 100%' }}
                    />

                    <motion.div
                        animate={{
                            y: [0, -5, 0],
                            scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <MapPin className="w-12 h-12 text-royal-800 mx-auto mb-4" />
                    </motion.div>

                    <h3 className="text-xl text-gray-500 uppercase tracking-widest mb-2">Venue</h3>
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-royal-900 mb-4 font-serif"
                        animate={{
                            textShadow: [
                                '0 0 0px rgba(212, 175, 55, 0)',
                                '0 0 20px rgba(212, 175, 55, 0.3)',
                                '0 0 0px rgba(212, 175, 55, 0)',
                            ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Pista House Banquet Hall
                    </motion.h2>
                    <p className="text-lg text-gray-600">Above Kalyan Jewellers, ISM Complex</p>
                    <p className="text-lg text-gray-600 mb-8">Shah Ali Banda, Hyderabad</p>

                    <motion.div
                        className="w-full h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden shadow-inner mb-6 mx-auto max-w-2xl border border-gray-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <iframe
                            width="100%"
                            height="100%"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=Pista+House+Banquet+Hall+Shah+Ali+Banda,Hyderabad&t=&z=15&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            title="Event Location"
                        ></iframe>
                    </motion.div>
                    <AddToCalendar />
                </motion.div>
            </div>
        </section>
    );
};

export default EventDetails;
