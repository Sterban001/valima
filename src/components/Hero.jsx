import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center pt-16 pb-8 px-4 text-center min-h-[50vh] bg-cream relative overflow-hidden">
            {/* Animated background gradient */}
            <motion.div
                className="absolute inset-0 opacity-5"
                animate={{
                    background: [
                        'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.4) 0%, transparent 70%)',
                        'radial-gradient(circle at 50% 100%, rgba(212, 175, 55, 0.4) 0%, transparent 70%)',
                        'radial-gradient(circle at 50% 0%, rgba(212, 175, 55, 0.4) 0%, transparent 70%)',
                    ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="mb-10 relative z-10"
            >
                <motion.div
                    className="w-64 md:w-80 mx-auto mb-6"
                    animate={{
                        scale: [1, 1.02, 1],
                        filter: [
                            'drop-shadow(0 0 0px rgba(212, 175, 55, 0))',
                            'drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))',
                            'drop-shadow(0 0 0px rgba(212, 175, 55, 0))',
                        ]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Basmala.svg/2560px-Basmala.svg.png"
                        alt="Bismillah"
                        className="w-full opacity-80"
                    />
                </motion.div>
                <motion.p
                    className="text-sm md:text-base text-gray-500 tracking-[0.2em] font-serif uppercase"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                    In the name of Allah
                </motion.p>
                <motion.p
                    className="text-xs md:text-sm text-gray-400 tracking-widest uppercase mt-1"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                    The Most Beneficent, The Most Merciful
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 1 }}
                viewport={{ once: true }}
                className="space-y-8 max-w-3xl mx-auto relative z-10"
            >
                <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-500 font-sans text-sm mb-2">With the blessings of</p>
                    <motion.h3
                        className="text-lg md:text-xl font-bold text-gray-800 font-serif"
                        whileInView={{ scale: [0.98, 1, 0.98] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                        Late Mrs. & Mr. Alhaj Mohammed Khawja Ali Sahab
                    </motion.h3>
                </motion.div>

                <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-500 font-sans text-sm mb-2">Under the guardianship of</p>
                    <motion.h3
                        className="text-lg md:text-xl font-bold text-gray-800 font-serif leading-tight"
                        whileInView={{ scale: [0.98, 1, 0.98] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                    >
                        Mrs. Late Hazrath Moulana Alhaj Hafez-O-Qazi <br />
                        Syed Mahboob Hussain Sahab RH
                    </motion.h3>
                    <p className="text-gray-500 italic mt-2 text-sm font-serif">(Ex-Nayeb Shaik-ul-Tasfeer Jamia Nizamia) (Ex-Imam Macca Masjid)</p>
                </motion.div>

                <motion.div
                    className="pt-8"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-600 font-serif mb-2">Mrs. & Mr.</p>
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold text-royal-800 font-serif mb-4 tracking-wide"
                        animate={{
                            textShadow: [
                                '0 0 0px rgba(212, 175, 55, 0)',
                                '0 0 20px rgba(212, 175, 55, 0.2)',
                                '0 0 0px rgba(212, 175, 55, 0)',
                            ]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Mohammed Waheed Ali
                    </motion.h1>
                    <motion.p
                        className="text-lg md:text-xl text-gray-600 font-serif italic text-pretty max-w-xl mx-auto"
                        animate={{ scale: [1, 1.01, 1] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                        Solicit your gracious presence on the auspicious occasion of the
                    </motion.p>
                </motion.div>

                <motion.div
                    className="pt-8 pb-4"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                >
                    <motion.div
                        className="inline-block border border-gold-400/50 rounded-full p-1"
                        animate={{
                            boxShadow: [
                                '0 0 0px rgba(212, 175, 55, 0)',
                                '0 0 20px rgba(212, 175, 55, 0.4)',
                                '0 0 30px rgba(212, 175, 55, 0.6)',
                                '0 0 20px rgba(212, 175, 55, 0.4)',
                                '0 0 0px rgba(212, 175, 55, 0)',
                            ],
                            scale: [1, 1.02, 1.05, 1.02, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        whileTap={{ scale: 1.1 }}
                    >
                        <motion.div
                            className="bg-gradient-to-r from-cream via-gold-50 to-cream border-2 border-gold-400 px-8 py-2 rounded-full shadow-lg"
                            animate={{
                                borderColor: [
                                    'rgba(212, 175, 55, 0.5)',
                                    'rgba(212, 175, 55, 1)',
                                    'rgba(212, 175, 55, 0.5)',
                                ]
                            }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <motion.span
                                className="text-royal-900 uppercase tracking-[0.2em] font-serif text-sm md:text-base font-semibold"
                                animate={{
                                    color: [
                                        'rgb(30, 58, 138)',
                                        'rgb(212, 175, 55)',
                                        'rgb(30, 58, 138)',
                                    ]
                                }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            >
                                Valima Ceremony
                            </motion.span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
