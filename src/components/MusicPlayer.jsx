import React, { useRef, useEffect } from 'react';

const MusicPlayer = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        const playMusic = () => {
            if (audioRef.current) {
                audioRef.current.play().catch(error => {
                    console.log("Audio play failed (browser restriction):", error);
                });
            }
        };

        const handleInteraction = () => {
            playMusic();
            // Remove listeners after first successful interaction trigger
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('scroll', handleInteraction); // Optional: play on scroll too
        };

        // Add listeners to common interaction events
        document.addEventListener('click', handleInteraction);
        document.addEventListener('scroll', handleInteraction);

        return () => {
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('scroll', handleInteraction);
        };
    }, []);

    return (
        <audio ref={audioRef} loop hidden>
            <source src="/music.mp3" type="audio/mp3" />
        </audio>
    );
};

export default MusicPlayer;
