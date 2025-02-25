import { useEffect, useState } from 'react';

const TechCard = ({ title, description, date, category }) => (
    <article className="retro-card p-6 hover:cursor-pointer">
        <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-bold">{category}</span>
            <span className="text-sm font-mono">{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-2">
            {title}
        </h3>
        <p className="text-gray-700">{description}</p>
    </article>
);

const NewsCard = ({ title, url, source, publishedAt, description, image }) => {
    const date = new Date(publishedAt).toLocaleDateString('es-ES');
    return (
        <article className="retro-card p-6 hover:cursor-pointer transform transition-all duration-300 hover:-translate-y-1">
            {image && (
                <div className="mb-4 overflow-hidden rounded">
                    <img src={image} alt={title} className="w-full h-48 object-cover hover:scale-105 transition-transform" />
                </div>
            )}
            <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold">📰 {source.name}</span>
                <span className="text-sm font-mono">{date}</span>
            </div>
            <a href={url} target="_blank" rel="noopener noreferrer" className="block">
                <h3 className="text-xl font-bold mb-2 hover:text-[#8b4513] transition-colors">
                    {title}
                </h3>
                {description && (
                    <p className="text-gray-700 mt-2 line-clamp-3">{description}</p>
                )}
            </a>
        </article>
    );
};

const Technology = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const techPosts = [
        {
            title: "El Futuro del Desarrollo Web",
            description: "Explorando las últimas tendencias y tecnologías que están transformando el desarrollo web...",
            date: "Próximamente",
            category: "Desarrollo Web"
        },
        {
            title: "Inteligencia Artificial en 2024",
            description: "Un vistazo a los avances más significativos en IA y su impacto en nuestra vida diaria...",
            date: "Próximamente",
            category: "IA"
        },
    ];

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://gnews.io/api/v4/search?' + new URLSearchParams({
                    q: 'Inteligencia Artificial',
                    lang: 'es',
                    country: 'mx',
                    max: '9',
                    apikey: '0aeb77f338aeae7c6c4ab33c8da252d8'
                }));

                const data = await response.json();

                if (data.articles) {
                    setNews(data.articles);
                } else {
                    throw new Error('Error al obtener las noticias');
                }

                setLoading(false);
            } catch (err) {
                console.error('Error:', err);
                setError('Error al cargar las noticias: ' + err.message);
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    return (
        <div className="space-y-12">
            <section className="text-center animate-slide-in">
                <h1 className="text-6xl font-bold mb-4">Tecnología</h1>
                <p className="text-xl max-w-2xl mx-auto">
                    Explorando las últimas tendencias, compartiendo conocimientos y
                    descubriendo el futuro de la tecnología.
                </p>
            </section>

            <section className="flex justify-center space-x-4 animate-fade-in">
                <button className="retro-button">
                    Todos
                </button>
                <button className="retro-button">
                    Desarrollo Web
                </button>
                <button className="retro-button">
                    IA
                </button>
            </section>

            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
                {techPosts.map((post, index) => (
                    <TechCard key={index} {...post} />
                ))}
            </section>

            <section className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Últimas Noticias de Tecnología</h2>
                {loading ? (
                    <div className="text-center">
                        <div className="retro-card p-8">
                            <p className="text-lg">Cargando noticias...</p>
                        </div>
                    </div>
                ) : error ? (
                    <div className="text-center">
                        <div className="retro-card p-8">
                            <p className="text-lg text-red-600">{error}</p>
                        </div>
                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {news.map((item, index) => (
                            <NewsCard
                                key={index}
                                title={item.title}
                                url={item.url}
                                source={item.source}
                                publishedAt={item.publishedAt}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
};

export default Technology;
