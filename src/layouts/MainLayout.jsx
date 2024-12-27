import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Terminal from '../components/Terminal';

const NavLink = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    
    return (
        <Link 
            to={to} 
            className={`relative px-3 py-2 transition-colors hover:text-[#8b4513] ${
                isActive ? 'text-[#8b4513] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#8b4513]' : ''
            }`}
        >
            {children}
        </Link>
    );
};

const MainLayout = ({ children }) => {
    const [isTerminalOpen, setIsTerminalOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        // Cerrar el menú cuando cambia la ruta
        setIsMenuOpen(false);
    }, [location]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false);
            }
        };

        // Agregar el evento cuando el menú está abierto
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            document.addEventListener('scroll', () => setIsMenuOpen(false));
        }

        // Limpiar los eventos cuando el componente se desmonta o el menú se cierra
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('scroll', () => setIsMenuOpen(false));
        };
    }, [isMenuOpen]);

    return (
        <div className="min-h-screen bg-[#f5e6d3] text-[#2c1810] font-['VT323']">
            <nav className="border-b-2 border-[#2c1810] bg-[#f5e6d3] sticky top-0 z-50 shadow-sm" ref={menuRef}>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center space-x-4 md:space-x-12">
                            <Link to="/" className="text-2xl md:text-3xl font-bold hover:text-[#8b4513] transition-colors group">
                                DavC | Bliss_<span className="cursor-blink group-hover:text-[#8b4513]">|</span>
                            </Link>
                            <div className="hidden md:flex space-x-8">
                                <NavLink to="/tecnologia">Tecnología</NavLink>
                                <NavLink to="/historias">Historias</NavLink>
                                <NavLink to="/proyectos">Proyectos Web</NavLink>
                                <NavLink to="/arcade">Arcade</NavLink>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <button
                                className="md:hidden retro-button-small"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                aria-label="Menu"
                            >
                                ☰
                            </button>
                            <button
                                className="hidden md:block retro-button-nav group"
                                onClick={() => setIsTerminalOpen(true)}
                            >
                                <span className="cursor-blink group-hover:text-[#f5e6d3]">_</span> Terminal
                            </button>
                        </div>
                    </div>
                </div>
                {/* Menú móvil */}
                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} border-t-2 border-[#2c1810]`}>
                    <div className="px-4 py-2 space-y-2">
                        <Link to="/tecnologia" className="block py-2 hover:text-[#8b4513] transition-colors">
                            Tecnología
                        </Link>
                        <Link to="/historias" className="block py-2 hover:text-[#8b4513] transition-colors">
                            Historias
                        </Link>
                        <Link to="/proyectos" className="block py-2 hover:text-[#8b4513] transition-colors">
                            Proyectos Web
                        </Link>
                        <Link to="/arcade" className="block py-2 hover:text-[#8b4513] transition-colors">
                            Arcade
                        </Link>
                        <button
                            className="retro-button-nav w-full text-left mt-2"
                            onClick={() => {
                                setIsTerminalOpen(true);
                                setIsMenuOpen(false);
                            }}
                        >
                            <span className="cursor-blink">_</span> Terminal
                        </button>
                    </div>
                </div>
            </nav>

            <main className="max-w-6xl mx-auto px-4 py-8">
                {children}
            </main>

            <footer className="border-t-2 border-[#2c1810] mt-20 bg-[#f5e6d3]">
                <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        <div className="space-y-4 md:space-y-6">
                            <div className="retro-footer-card">
                                <h3 className="font-bold text-lg md:text-xl mb-4 flex items-center ">
                                    <span className="mr-2">⌘</span> Navegación Rápida
                                </h3>
                                <div className="space-y-2 md:space-y-3">
                                    <Link to="/tecnologia" className="retro-footer-link">
                                        <span className="font-mono">&gt;</span> Tecnología
                                    </Link>
                                    <Link to="/historias" className="retro-footer-link">
                                        <span className="font-mono">&gt;</span> Historias
                                    </Link>
                                    <Link to="/proyectos" className="retro-footer-link">
                                        <span className="font-mono">&gt;</span> Proyectos Web
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 md:space-y-6">
                            <div className="retro-footer-card">
                                <h3 className="font-bold text-lg md:text-xl mb-4 flex items-center ">
                                    <span className="mr-2">⌥</span> Redes
                                </h3>
                                <div className="space-y-2 md:space-y-3">
                                    <a href="https://x.com/programacionori" className="retro-footer-link">
                                        <span className="font-mono">&gt;</span> Twitter
                                    </a>
                                    <a href="https://github.com/Davidcrz14" className="retro-footer-link">
                                        <span className="font-mono">&gt;</span> GitHub
                                    </a>
                                    <a href="https://www.linkedin.com/in/davcrz/" className="retro-footer-link">
                                        <span className="font-mono">&gt;</span> LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 md:mt-12 text-center pt-6 retro-footer-bottom">
                        <p className="text-base md:text-lg pixel-corners">
                            2024 DavC | Bliss - Hecho con ♥
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
