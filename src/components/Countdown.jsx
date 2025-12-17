import React, { useState, useEffect } from 'react';

const Countdown = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        // Target date: Jan 7, 2026 at 9:00 PM IST (UTC+5:30)
        const targetDate = new Date('2026-01-07T21:00:00+05:30').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const TimeBox = ({ value, label }) => (
        <div className="flex flex-col items-center mx-1 md:mx-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-royal-900 to-royal-800 rounded-lg flex items-center justify-center border-2 border-gold-400 shadow-lg relative overflow-hidden">
                {/* Corner decorations */}
                <div className="absolute top-0.5 left-0.5 md:top-1 md:left-1 w-1.5 h-1.5 md:w-2 md:h-2 border-t-2 border-l-2 border-gold-300/50 rounded-tl"></div>
                <div className="absolute top-0.5 right-0.5 md:top-1 md:right-1 w-1.5 h-1.5 md:w-2 md:h-2 border-t-2 border-r-2 border-gold-300/50 rounded-tr"></div>
                <div className="absolute bottom-0.5 left-0.5 md:bottom-1 md:left-1 w-1.5 h-1.5 md:w-2 md:h-2 border-b-2 border-l-2 border-gold-300/50 rounded-bl"></div>
                <div className="absolute bottom-0.5 right-0.5 md:bottom-1 md:right-1 w-1.5 h-1.5 md:w-2 md:h-2 border-b-2 border-r-2 border-gold-300/50 rounded-br"></div>

                <span className="text-lg sm:text-xl md:text-3xl font-bold text-gold-400 font-sans relative z-10">
                    {value < 10 ? `0${value}` : value}
                </span>
            </div>

            <span className="text-xs md:text-sm text-gray-600 mt-2 uppercase tracking-wider font-semibold">
                {label}
            </span>
        </div>
    );

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-center text-2xl md:text-3xl font-serif text-royal-900 mb-8">
                    Counting down to the celebration
                </h2>

                <div className="flex justify-center items-center">
                    <TimeBox value={timeLeft.days} label="Days" />
                    <TimeBox value={timeLeft.hours} label="Hours" />
                    <TimeBox value={timeLeft.minutes} label="Mins" />
                    <TimeBox value={timeLeft.seconds} label="Secs" />
                </div>

                {/* Decorative elements */}
                <div className="flex justify-center items-center mt-8 gap-2">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className="w-2 h-2 rounded-full bg-gold-400 opacity-50"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Countdown;
