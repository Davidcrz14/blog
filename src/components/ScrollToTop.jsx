import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false);

    // Efecto para volver arriba cuando cambia la ruta
    useEffect(() => {
        // Animación suave al inicio de la página
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    // Efecto para mostrar/ocultar el botón de scroll
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 retro-button-scroll animate-bounce-slow"
                    aria-label="Volver arriba"
                >
                    <span className="text-xl">↑</span>
                </button>
            )}
        </>
    );
};

export default ScrollToTop;
