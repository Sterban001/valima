import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Couple from './components/Couple';
import EventDetails from './components/EventDetails';
import Footer from './components/Footer';
import Countdown from './components/Countdown';
import MusicPlayer from './components/MusicPlayer';
import FloatingPetals from './components/FloatingPetals';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const [sufiPosition, setSufiPosition] = useState('bottom-left');

  useEffect(() => {
    // Splash screen timer
    const timer = setTimeout(() => setLoading(false), 2000);

    // Sufi animation interval - cycle through all 4 corners
    const positions = ['bottom-left', 'bottom-right', 'top-right', 'top-left'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % positions.length;
      setSufiPosition(positions[currentIndex]);
    }, 3400); // 3.4 seconds per position

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      {/* Sufi Animations - Bottom Left */}
      <motion.img
        src="/1.svg"
        alt="Sufi Calligraphy Bottom Left"
        initial={{ opacity: 0 }}
        animate={{ opacity: sufiPosition === 'bottom-left' ? 0.2 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed bottom-0 left-0 w-32 sm:w-40 md:w-72 pointer-events-none z-20 md:opacity-40 md:mix-blend-multiply md:z-0"
      />

      {/* Bottom Right */}
      <motion.img
        src="/2.svg"
        alt="Sufi Calligraphy Bottom Right"
        initial={{ opacity: 0 }}
        animate={{ opacity: sufiPosition === 'bottom-right' ? 0.2 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed bottom-0 right-0 w-32 sm:w-40 md:w-72 pointer-events-none z-20 md:opacity-40 md:mix-blend-multiply md:z-0"
      />

      {/* Top Right */}
      <motion.img
        src="/1.svg"
        alt="Sufi Calligraphy Top Right"
        initial={{ opacity: 0 }}
        animate={{ opacity: sufiPosition === 'top-right' ? 0.2 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed top-0 right-0 w-32 sm:w-40 md:w-72 pointer-events-none z-20 md:opacity-40 md:mix-blend-multiply md:z-0"
      />

      {/* Top Left */}
      <motion.img
        src="/2.svg"
        alt="Sufi Calligraphy Top Left"
        initial={{ opacity: 0 }}
        animate={{ opacity: sufiPosition === 'top-left' ? 0.2 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-32 sm:w-40 md:w-72 pointer-events-none z-20 md:opacity-40 md:mix-blend-multiply md:z-0"
      />

      {/* Floating Rose Petals */}
      <FloatingPetals />

      <AnimatePresence>
        {loading ? (
          <motion.div
            key="loader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-royal-900 flex items-center justify-center z-50"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, loop: Infinity, repeatDelay: 1 }}
              className="text-gold-400 font-cursive text-5xl md:text-7xl"
            >
              RS
            </motion.h1>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto shadow-2xl bg-white min-h-screen relative md:border-x-4 md:border-double md:border-gray-100 z-10"
          >
            <Hero />
            <Couple />
            <EventDetails />
            <Countdown />
            <Footer />
            <MusicPlayer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
