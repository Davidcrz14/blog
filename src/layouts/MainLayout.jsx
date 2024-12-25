import { useState } from 'react';
import { Link } from 'react-router-dom';
import Terminal from '../components/Terminal';

const MainLayout = ({ children }) => {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-[#f5e6d3] text-[#2c1810] font-['VT323']">
            <nav className="border-b-2 border-[#2c1810] bg-[#f5e6d3] sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-8">
                            <Link to="/" className="text-2xl font-bold hover:text-[#8b4513] transition-colors">
                                DavC | Bliss_<span className="cursor-blink">|</span>
                            </Link>
                            <div className="hidden md:flex space-x-8">
                                <Link to="/tecnologia" className="hover:text-[#8b4513] transition-colors">
                                    Tecnología
                                </Link>
                                <Link to="/historias" className="hover:text-[#8b4513] transition-colors">
                                    Historias
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                className="retro-button"
                                onClick={() => setIsTerminalOpen(true)}
                            >
                                <span className="cursor-blink">_</span> Terminal
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-4 py-8">
                {children}
            </main>

            <footer className="border-t-2 border-[#2c1810] mt-20 bg-[#f5e6d3]">
                <div className="max-w-6xl mx-auto px-4 py-8">
                    <div className="flex justify-between">
                        <div className="hover:scale-105 transition-transform">
                            <h3 className="font-bold text-lg mb-4">Navegación</h3>
                            <div className="space-y-2">
                                <Link to="/tecnologia" className="block hover:text-[#8b4513] hover:translate-x-2 transition-all">
                                    Tecnología →
                                </Link>
                                <Link to="/historias" className="block hover:text-[#8b4513] hover:translate-x-2 transition-all">
                                    Historias →
                                </Link>
                            </div>
                        </div>
                        <div className="hover:scale-105 transition-transform">
                            <h3 className="font-bold text-lg mb-4">Redes</h3>
                            <div className="space-y-2">
                                <a href="https://x.com/programacionori" className="block hover:text-[#8b4513] hover:translate-x-2 transition-all">Twitter | X→</a>
                                <a href="https://github.com/Davidcrz14" className="block hover:text-[#8b4513] hover:translate-x-2 transition-all">GitHub →</a>
                                <a href="https://www.linkedin.com/in/davcrz/" className="block hover:text-[#8b4513] hover:translate-x-2 transition-all">LinkedIn →</a>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-lg">
                            © 2024 DavC | Bliss - Hecho con<span className="text-[#8b4513]"> ♥ </span>
                        </p>
                    </div>
                </div>
            </footer>

            <Terminal
                isOpen={isTerminalOpen}
                onClose={() => setIsTerminalOpen(false)}
            />
        </div>
    );
};

export default MainLayout;
