import { useEffect, useRef, useState } from 'react';

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [isExpanded, setIsExpanded] = useState(false);

    const audioRef = useRef(null);
    const progressBarRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;

        const setAudioData = () => {
            setDuration(audio.duration);
        };

        const setAudioTime = () => {
            setCurrentTime(audio.currentTime);
        };

        // Eventos del audio
        audio.addEventListener('loadeddata', setAudioData);
        audio.addEventListener('timeupdate', setAudioTime);
        audio.addEventListener('ended', () => setIsPlaying(false));

        // Limpiar eventos
        return () => {
            audio.removeEventListener('loadeddata', setAudioData);
            audio.removeEventListener('timeupdate', setAudioTime);
            audio.removeEventListener('ended', () => setIsPlaying(false));
        };
    }, []);

    // Controlar reproducción
    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Controlar volumen
    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    };

    // Controlar progreso
    const handleProgressChange = (e) => {
        const newTime = parseFloat(e.target.value);
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
    };

    // Formatear tiempo
    const formatTime = (time) => {
        if (isNaN(time)) return '0:00';

        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    };

    return (
        <div className={`retro-music-player fixed ${isExpanded ? 'bottom-8 right-8 z-50 w-80' : 'bottom-4 right-4 z-50 w-16 h-16'} transition-all duration-300`}>
            <audio ref={audioRef} src="/melodia.mp3" preload="metadata"></audio>

            {isExpanded ? (
                <div className="retro-card p-4 shadow-lg">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-bold">Música Ambiental</h3>
                        <button
                            onClick={() => setIsExpanded(false)}
                            className="retro-button-small"
                            aria-label="Minimizar"
                        >
                            ↓
                        </button>
                    </div>

                    <div className="mb-3">
                        <div className="flex justify-between text-xs mb-1">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>
                        <input
                            ref={progressBarRef}
                            type="range"
                            min="0"
                            max={duration || 0}
                            value={currentTime}
                            onChange={handleProgressChange}
                            className="w-full retro-range"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <button
                                onClick={togglePlay}
                                className="retro-button-small mr-2"
                                aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                            >
                                {isPlaying ? '❚❚' : '▶'}
                            </button>

                            <div className="flex items-center">
                                <span className="mr-2 text-sm">🔈</span>
                                <input
                                    type="range"
                                    min="0"
                                    max="1"
                                    step="0.01"
                                    value={volume}
                                    onChange={handleVolumeChange}
                                    className="w-20 retro-range"
                                />
                            </div>
                        </div>

                        <div className="text-xs animate-pulse">
                            {isPlaying ? '♪ ♫ ♪' : ''}
                        </div>
                    </div>
                </div>
            ) : (
                <button
                    onClick={() => setIsExpanded(true)}
                    className="retro-button-circle w-16 h-16 flex items-center justify-center"
                    aria-label="Abrir reproductor de música"
                >
                    <span className="text-2xl">{isPlaying ? '♫' : '♪'}</span>
                </button>
            )}
        </div>
    );
};

export default MusicPlayer;
