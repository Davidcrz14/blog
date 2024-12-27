import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

const GRID_SIZE = 20; // Ampliado de nuevo
const CELL_SIZE = 22; // Ajustado para que quepa en pantalla
const INITIAL_SPEED = 200;
const SPEED_INCREASE = 5; // Reducido para que sea más gradual
const MAX_BUGS = 8; // Máximo número de bugs en pantalla
const BUG_LIFETIME = 5000; // Tiempo de vida de cada bug (5 segundos)

const SYMBOLS = {
    PLAYER: '◉',
    COFFEE: '♦',
    BUG: '†',
    HEART: '♥',
    PLAY: '►',
    PAUSE: '❚❚',
    RELOAD: '↺'
};

const Arcade = () => {
    const [player, setPlayer] = useState({ x: 10, y: 10 });
    const [coffee, setCoffee] = useState({ x: 5, y: 5 });
    const [bugs, setBugs] = useState([]);
    const [direction, setDirection] = useState({ x: 0, y: 0 });
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [gameOver, setGameOver] = useState(false);
    const [speed, setSpeed] = useState(INITIAL_SPEED);
    const [isPlaying, setIsPlaying] = useState(false);
    const [highScore, setHighScore] = useState(0);
    const gameLoopRef = useRef();
    const canvasRef = useRef();

    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const generateRandomPosition = () => {
        const margin = 2; // Margen para evitar bordes
        return {
            x: Math.floor(Math.random() * (GRID_SIZE - 2 * margin)) + margin,
            y: Math.floor(Math.random() * (GRID_SIZE - 2 * margin)) + margin
        };
    };

    // Función para manejar el ciclo de vida de los bugs
    const manageBugs = useCallback(() => {
        setBugs(prevBugs => {
            // Filtrar bugs antiguos y crear nuevos si es necesario
            const currentTime = Date.now();
            const updatedBugs = prevBugs
                .map(bug => ({
                    ...bug,
                    createdAt: bug.createdAt || currentTime
                }))
                .filter(bug => currentTime - bug.createdAt < BUG_LIFETIME);

            // Si hay espacio para más bugs, agregar uno nuevo
            if (updatedBugs.length < MAX_BUGS) {
                const newBug = {
                    ...generateRandomPosition(),
                    createdAt: currentTime
                };

                // Verificar que no se superponga
                if (!updatedBugs.some(bug => bug.x === newBug.x && bug.y === newBug.y) &&
                    !(newBug.x === player.x && newBug.y === player.y) &&
                    !(newBug.x === coffee.x && newBug.y === coffee.y)) {
                    updatedBugs.push(newBug);
                }
            }

            return updatedBugs;
        });
    }, [player.x, player.y, coffee.x, coffee.y]);

    // Ejecutar el manejo de bugs cada cierto tiempo
    useEffect(() => {
        if (isPlaying) {
            const bugInterval = setInterval(manageBugs, 1000);
            return () => clearInterval(bugInterval);
        }
    }, [isPlaying, manageBugs]);

    const addBug = useCallback(() => {
        setBugs(prevBugs => {
            if (prevBugs.length >= MAX_BUGS) {
                // Reemplazar el bug más antiguo
                const newBugs = [...prevBugs.slice(1)];
                const newBug = {
                    ...generateRandomPosition(),
                    createdAt: Date.now()
                };
                return [...newBugs, newBug];
            }
            
            const newBug = {
                ...generateRandomPosition(),
                createdAt: Date.now()
            };
            return [...prevBugs, newBug];
        });
    }, []);

    const movePlayer = useCallback(() => {
        if (!isPlaying) return;

        setPlayer(prev => {
            const newPos = {
                x: (prev.x + direction.x + GRID_SIZE) % GRID_SIZE,
                y: (prev.y + direction.y + GRID_SIZE) % GRID_SIZE
            };

            // Colisión con bugs
            if (bugs.some(bug => bug.x === newPos.x && bug.y === newPos.y)) {
                const newLives = lives - 1;
                if (newLives <= 0) {
                    setLives(0);
                    setGameOver(true);
                    setIsPlaying(false);
                    setHighScore(current => Math.max(current, score));
                } else {
                    setLives(newLives);
                }
                return prev;
            }

            // Recolectar café
            if (newPos.x === coffee.x && newPos.y === coffee.y) {
                setScore(s => s + 10);
                setCoffee(generateRandomPosition());
                addBug();
                // Velocidad más gradual
                setSpeed(s => Math.max(80, s - SPEED_INCREASE)); // Velocidad mínima más alta
            }

            return newPos;
        });
    }, [direction, bugs, coffee.x, coffee.y, isPlaying, addBug, score, lives]);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (!isPlaying) return;
            
            switch(e.key) {
                case 'ArrowUp':
                    setDirection({ x: 0, y: -1 });
                    break;
                case 'ArrowDown':
                    setDirection({ x: 0, y: 1 });
                    break;
                case 'ArrowLeft':
                    setDirection({ x: -1, y: 0 });
                    break;
                case 'ArrowRight':
                    setDirection({ x: 1, y: 0 });
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [isPlaying]);

    useEffect(() => {
        if (isPlaying) {
            gameLoopRef.current = setInterval(movePlayer, speed);
        }
        return () => clearInterval(gameLoopRef.current);
    }, [movePlayer, speed, isPlaying]);

    const startGame = () => {
        setPlayer({ x: 10, y: 10 });
        setCoffee(generateRandomPosition());
        setBugs([]);
        setDirection({ x: 0, y: 0 });
        setScore(0);
        setLives(3);
        setGameOver(false);
        setSpeed(INITIAL_SPEED);
        setIsPlaying(true);
    };

    const renderGame = useCallback(() => {
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx) return;

        // Limpiar canvas
        ctx.clearRect(0, 0, GRID_SIZE * CELL_SIZE, GRID_SIZE * CELL_SIZE);

        // Dibujar cuadrícula
        ctx.strokeStyle = '#2c181033';
        for (let i = 0; i < GRID_SIZE; i++) {
            for (let j = 0; j < GRID_SIZE; j++) {
                ctx.strokeRect(i * CELL_SIZE, j * CELL_SIZE, CELL_SIZE, CELL_SIZE);
            }
        }

        // Función helper para dibujar símbolos
        const drawSymbol = (symbol, x, y, color = '#2c1810') => {
            ctx.font = 'bold 20px monospace';
            ctx.fillStyle = color;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText(
                symbol,
                x * CELL_SIZE + CELL_SIZE/2,
                y * CELL_SIZE + CELL_SIZE/2
            );
        };

        // Dibujar jugador
        drawSymbol(SYMBOLS.PLAYER, player.x, player.y, '#2c1810');

        // Dibujar café
        drawSymbol(SYMBOLS.COFFEE, coffee.x, coffee.y, '#8b4513');

        // Dibujar bugs
        bugs.forEach(bug => {
            drawSymbol(SYMBOLS.BUG, bug.x, bug.y, '#ff0000');
        });

    }, [player, coffee, bugs]);

    useEffect(() => {
        renderGame();
    }, [renderGame]);

    const handleTouchStart = (e) => {
        setTouchStart({
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        });
    };

    const handleTouchMove = (e) => {
        setTouchEnd({
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        });
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const diffX = touchStart.x - touchEnd.x;
        const diffY = touchStart.y - touchEnd.y;
        const minSwipeDistance = 30;

        if (Math.abs(diffX) > Math.abs(diffY)) {
            // Movimiento horizontal
            if (Math.abs(diffX) > minSwipeDistance) {
                if (diffX > 0) {
                    setDirection({ x: -1, y: 0 }); // Izquierda
                } else {
                    setDirection({ x: 1, y: 0 }); // Derecha
                }
            }
        } else {
            // Movimiento vertical
            if (Math.abs(diffY) > minSwipeDistance) {
                if (diffY > 0) {
                    setDirection({ x: 0, y: -1 }); // Arriba
                } else {
                    setDirection({ x: 0, y: 1 }); // Abajo
                }
            }
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <div className="space-y-12">
            <section className="text-center animate-slide-in">
                <h1 className="text-6xl font-bold mb-4">Arcade</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Holi, te dejo un pequeño juego para pasar el rato.
                    
                    <br />
                    Solo funciona en PC, no en dispositivos móviles. ^^
                </p>
            </section>

            <div className="flex justify-center">
                <div className="max-w-4xl mx-auto">
                    <div className="retro-arcade-container">
                        <div className="retro-arcade">
                            <div className="game-screen"
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                            >
                                <canvas
                                    ref={canvasRef}
                                    width={GRID_SIZE * CELL_SIZE}
                                    height={GRID_SIZE * CELL_SIZE}
                                    className="pixel-canvas"
                                />
                                {!isPlaying && (
                                    <div className="game-overlay">
                                        <div className="text-center">
                                            <h2 className="text-2xl font-bold mb-4">
                                                {gameOver ? 'JUEGO TERMINADO' : 'DEV COFFEE RUSH'}
                                            </h2>
                                            <p className="mb-2 retro-text">
                                                {gameOver 
                                                    ? `PUNTUACION: ${score}`
                                                    : 'USA LAS FLECHAS O DESLIZA PARA MOVERTE'}
                                            </p>
                                            {gameOver && (
                                                <p className="mb-4 retro-text">RECORD: {highScore}</p>
                                            )}
                                            <button
                                                onClick={startGame}
                                                className="retro-button"
                                            >
                                                {gameOver ? `${SYMBOLS.RELOAD} REINICIAR` : `${SYMBOLS.PLAY} INICIAR`}
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="game-controls">
                                <div className="score-display retro-text">
                                    PUNTOS: {score}
                                </div>
                                <div className="lives-display">
                                    {Array.from({length: Math.max(0, lives)}).map((_, i) => (
                                        <span key={i} className="retro-heart">{SYMBOLS.HEART}</span>
                                    ))}
                                </div>
                                <button
                                    onClick={() => setIsPlaying(false)}
                                    className="retro-button-small"
                                >
                                    {SYMBOLS.PAUSE} PAUSA
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Controles móviles */}
            <div className="md:hidden mt-8">
                <div className="grid grid-cols-3 gap-4 max-w-[200px] mx-auto">
                    <div></div>
                    <button
                        className="retro-button-control"
                        onTouchStart={() => setDirection({ x: 0, y: -1 })}
                        onTouchEnd={() => setDirection({ x: 0, y: 0 })}
                    >
                        ↑
                    </button>
                    <div></div>
                    <button
                        className="retro-button-control"
                        onTouchStart={() => setDirection({ x: -1, y: 0 })}
                        onTouchEnd={() => setDirection({ x: 0, y: 0 })}
                    >
                        ←
                    </button>
                    <div></div>
                    <button
                        className="retro-button-control"
                        onTouchStart={() => setDirection({ x: 1, y: 0 })}
                        onTouchEnd={() => setDirection({ x: 0, y: 0 })}
                    >
                        →
                    </button>
                    <div></div>
                    <button
                        className="retro-button-control"
                        onTouchStart={() => setDirection({ x: 0, y: 1 })}
                        onTouchEnd={() => setDirection({ x: 0, y: 0 })}
                    >
                        ↓
                    </button>
                    <div></div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <h3 className="text-xl font-bold mb-4 retro-title">INSTRUCCIONES</h3>
                <ul className="space-y-2 retro-text">
                    <li className="md:block hidden">[←↑→↓] MUEVE AL {SYMBOLS.PLAYER}</li>
                    <li className="md:hidden block">DESLIZA O USA LOS BOTONES PARA MOVER AL {SYMBOLS.PLAYER}</li>
                    <li>RECOLECTA {SYMBOLS.COFFEE} PARA PUNTOS</li>
                    <li>EVITA LOS {SYMBOLS.BUG} O PIERDES {SYMBOLS.HEART}</li>
                    <li>LA VELOCIDAD AUMENTA CON CADA {SYMBOLS.COFFEE}</li>
                </ul>
            </div>
        </div>
    );
};

export default Arcade;
