import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const StoryCard = ({ title, excerpt, category, readTime, slug }) => (
    <Link to={`/historias/${slug}`} className="block">
        <article className="retro-card hover:cursor-pointer transform transition-all hover:-translate-y-1 hover:shadow-lg">
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-bold px-3 py-1 retro-border">{category}</span>
                    <span className="text-sm font-mono">{readTime} min lectura</span>
                </div>
                <h3 className="text-xl font-bold mb-2 hover:text-[#8b4513] transition-colors">
                    {title}
                </h3>
                <p className="text-gray-700 line-clamp-3">{excerpt}</p>
                <div className="mt-4 flex justify-between items-center">
                    <button className="retro-button">
                        Leer más →
                    </button>
                    <span className="text-sm italic">Historia Corta</span>
                </div>
            </div>
        </article>
    </Link>
);

const QuoteCard = ({ quote, author }) => (
    <div className="retro-card p-6 transform transition-all hover:scale-105 hover:shadow-lg">
        <blockquote className="text-lg italic">"{quote}"</blockquote>
        <p className="mt-2 text-right font-bold">- {author}</p>
    </div>
);

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

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

    return isVisible ? (
        <div className="fixed bottom-4 right-4 animate-bounce">
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="retro-button-scroll"
            >
                ↑
            </button>
        </div>
    ) : null;
};

const Stories = () => {
    const [selectedCategory, setSelectedCategory] = useState('Todas');

    const stories = [
        {
            title: "El Regalo de Cumpleaños",
            excerpt: "Todo comenzó con un mensaje de WhatsApp. Era Andrea, una amiga que no veía desde la secundaria. Me sorprendió porque, aunque nos seguíamos en redes, nunca hablábamos...",
            category: "Terror",
            readTime: 8,
            slug: "el-regalo-de-cumpleanos"
        },
        {
            title: "La Última Llamada",
            excerpt: "El zumbido del teléfono rompió el silencio de mi departamento a las 3:33 de la madrugada. Era el número de mi hermana Lucía, quien había fallecido hace exactamente un año en circunstancias que todavía me negaba a aceptar...",
            category: "Terror",
            readTime: 10,
            slug: "la-ultima-llamada"
        },
        {
            title: "El Eco de la Habitación Vacía",
            excerpt: "Todo comenzó con un simple cambio de domicilio. Después de mi divorcio, necesitaba alejarme de los recuerdos que me perseguían en cada esquina del departamento que había compartido con Martín durante ocho años...",
            category: "Terror",
            readTime: 15,
            slug: "el-eco-de-la-habitacion-vacia"
        }
    ];

    const quotes = [
        {
            quote: "No hay algoritmo que pueda calcular el peso de una decisión tomada con el corazón.",
            author: "DavC"
        },
        {
            quote: "El amor no tiene 'syntax error' ; tiene errores humanos.",
            author: "Anónimo"
        }
    ];

    const filteredStories = selectedCategory === 'Todas'
        ? stories
        : stories.filter(story => story.category === selectedCategory);

    return (
        <div className="space-y-12">
            <section className="text-center animate-slide-in">
                <h1 className="text-6xl font-bold mb-4 animate-fade-in">Historias & Reflexiones</h1>
                <p className="text-xl max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    Holi, como estas?, espero que muy bien, este es un pequeño rincon donde algunas de mis ideas mas personales son plasmadas en forma de historias o frases
                </p>
            </section>

            <section className="flex justify-center space-x-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                {['Todas', 'Terror', 'Reflexiones'].map(category => (
                    <button
                        key={category}
                        className={`retro-button ${selectedCategory === category ? 'bg-[#2c1810] text-[#f5e6d3]' : ''}`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
                <div className="retro-card p-8 text-center bg-gradient-to-r from-[#f5e6d3] to-[#efe1cc]">
                    <h2 className="text-2xl font-bold mb-6">Frase del Día</h2>
                    <QuoteCard {...quotes[0]} />
                </div>
            </section>

            <section className="grid md:grid-cols-2 gap-8 animate-fade-in" style={{ animationDelay: '0.8s' }}>
                {filteredStories.map((story, index) => (
                    <div key={index} className="animate-fade-in" style={{ animationDelay: `${0.8 + index * 0.2}s` }}>
                        <StoryCard {...story} />
                    </div>
                ))}
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '1.2s' }}>
                <h2 className="text-2xl font-bold mb-6">Frases Inspiradoras</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {quotes.map((quote, index) => (
                        <div key={index} className="animate-fade-in" style={{ animationDelay: `${1.2 + index * 0.2}s` }}>
                            <QuoteCard {...quote} />
                        </div>
                    ))}
                </div>
            </section>

            <ScrollToTop />
        </div>
    );
};

export default Stories;
