import { useState } from 'react';

const Drawings = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-8 space-y-12">
            <section className="text-center animate-slide-in">
                <h1 className="text-6xl font-bold mb-4 animate-fade-in">Mis Dibujos</h1>
                <p className="text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Un espacio donde compartiré mis creaciones artísticas y bocetos digitales
                </p>
            </section>

            <div
                className="retro-card p-12 text-center max-w-2xl mx-auto transform transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="space-y-6">
                    <div className="text-4xl font-bold mb-4 ">
                         Próximamente
                    </div>

                    <div className="relative">
                        <div className={`transition-opacity duration-300 ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
                            <p className="text-lg mb-4">
                                Estoy preparando algo especial para ti...
                            </p>
                            <div className="flex justify-center space-x-4 animate-bounce-slow">
                                <span className="text-2xl">✏️</span>
                                <span className="text-2xl">🎨</span>
                                <span className="text-2xl">🐧</span>
                            </div>
                        </div>

                        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="text-center">
                                <p className="text-lg font-bold mb-2">¡Sorpresa en desarrollo!</p>
                                <p className="text-sm">
                                    Estoy trabajando en una galería interactiva<br/>
                                    donde podrás explorar mis dibujos de una manera única
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="inline-block pixel-corners">
                            <span className="text-sm font-mono">Loading creativity...</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                {[1, 2, 3].map((_, index) => (
                    <div
                        key={index}
                        className="retro-card p-4 aspect-square flex items-center justify-center opacity-50"
                    >
                        <span className="text-4xl">🎨</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Drawings;
