const BackgroundShapes = () => {
    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {/* Forma 1: Cuadrado giratorio con borde punteado */}
            <div className="absolute top-20 right-20 w-32 h-32 border-4 border-dashed border-[#2c1810] opacity-10 hover:opacity-20 transform rotate-12 hover:rotate-180 transition-all duration-1000 pointer-events-auto"></div>

            {/* Forma 2: Triángulo */}
            <div className="absolute top-40 left-20 w-0 h-0 border-l-[30px] border-l-transparent border-r-[30px] border-r-transparent border-b-[50px] border-[#8b4513] opacity-10 hover:opacity-20 transform -rotate-6 hover:rotate-[354deg] hover:scale-150 transition-all duration-700 pointer-events-auto"></div>

            {/* Forma 3: Círculo con patrón */}
            <div className="absolute bottom-40 right-40 w-48 h-48 rounded-full bg-[#8b4513] opacity-5 hover:opacity-10 transform hover:scale-110 transition-all duration-500 pointer-events-auto overflow-hidden">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#2c1810_10px,#2c1810_20px)]"></div>
            </div>

            {/* Forma 4: Rombo */}
            <div className="absolute bottom-20 left-40 w-32 h-32 bg-[#2c1810] opacity-5 hover:opacity-10 transform rotate-45 hover:rotate-[225deg] transition-all duration-1000 pointer-events-auto"></div>

            {/* Forma 5: Estrella (usando clip-path) */}
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#8b4513] opacity-5 hover:opacity-10 transform -translate-x-1/2 -translate-y-1/2 hover:scale-150 transition-all duration-700 pointer-events-auto"
                style={{
                    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                }}></div>

            {/* Forma 6: Hexágono */}
            <div className="absolute top-1/4 right-1/3 w-20 h-20 bg-[#2c1810] opacity-5 hover:opacity-10 transform hover:rotate-[360deg] transition-all duration-1000 pointer-events-auto"
                style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                }}></div>

            {/* Forma 7: Círculos concéntricos */}
            <div className="absolute bottom-1/4 left-1/3 pointer-events-auto">
                <div className="w-24 h-24 rounded-full border-4 border-[#8b4513] opacity-5 hover:opacity-10 transform hover:scale-150 transition-all duration-700"></div>
                <div className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full border-4 border-[#2c1810] opacity-5 hover:opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute top-1/2 left-1/2 w-8 h-8 rounded-full bg-[#8b4513] opacity-5 hover:opacity-10 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            {/* Forma 8: Cruz */}
            <div className="absolute top-3/4 right-1/4 pointer-events-auto">
                <div className="w-24 h-6 bg-[#2c1810] opacity-5 hover:opacity-10"></div>
                <div className="absolute top-1/2 left-1/2 w-6 h-24 bg-[#2c1810] opacity-5 hover:opacity-10 transform -translate-x-1/2 -translate-y-1/2 hover:rotate-45 transition-all duration-500"></div>
            </div>
        </div>
    );
};

export default BackgroundShapes;
