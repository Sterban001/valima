import React, { useRef, useEffect } from 'react';

const MusicPlayer = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        const playMusic = () => {
            if (audioRef.current) {
                audioRef.current.play().catch(error => {
                    console.log("Music autoplay prevented:", error);
                });
            }
        };

        const handleInteraction = () => {
            playMusic();
            // Remove event listeners after first successful interaction
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('scroll', handleInteraction);
        };

        // Listen for any user interaction
        document.addEventListener('click', handleInteraction);
        document.addEventListener('touchstart', handleInteraction);
        document.addEventListener('scroll', handleInteraction);

        return () => {
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
            document.removeEventListener('scroll', handleInteraction);
        };
    }, []);

    return (
        <audio ref={audioRef} loop preload="auto">
            <source src="/music.mp3" type="audio/mpeg" />
        </audio>
    );
};

export default MusicPlayer;
