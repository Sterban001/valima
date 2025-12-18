import React, { useRef, useEffect, useState } from 'react';

const MusicPlayer = () => {
    const audioRef = useRef(null);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const playMusic = () => {
            if (audioRef.current && !hasStarted) {
                audioRef.current.play()
                    .then(() => {
                        console.log("Music started successfully");
                        setHasStarted(true);
                    })
                    .catch(error => {
                        console.log("Music autoplay prevented:", error);
                        // Don't set hasStarted, so we keep trying
                    });
            }
        };

        const handleInteraction = () => {
            playMusic();
        };

        // Only add listeners if music hasn't started yet
        if (!hasStarted) {
            // Listen for multiple types of user interactions
            document.addEventListener('click', handleInteraction);
            document.addEventListener('touchstart', handleInteraction);
            document.addEventListener('touchend', handleInteraction);
            document.addEventListener('scroll', handleInteraction);
            document.addEventListener('keydown', handleInteraction);
            document.addEventListener('mousemove', handleInteraction, { once: true });

            return () => {
                document.removeEventListener('click', handleInteraction);
                document.removeEventListener('touchstart', handleInteraction);
                document.removeEventListener('touchend', handleInteraction);
                document.removeEventListener('scroll', handleInteraction);
                document.removeEventListener('keydown', handleInteraction);
                document.removeEventListener('mousemove', handleInteraction);
            };
        }
    }, [hasStarted]);

    return (
        <audio ref={audioRef} loop preload="auto">
            <source src="/music.mp3" type="audio/mpeg" />
        </audio>
    );
};

export default MusicPlayer;
