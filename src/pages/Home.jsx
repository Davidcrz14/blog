import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const InfoCard = ({ title, content, icon }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="retro-card p-6 cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
            onClick={() => setIsFlipped(!isFlipped)}
            style={{ minHeight: '200px' }}
        >
            <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold">{title}</h3>
                    <span className="text-2xl">{icon}</span>
                </div>
                <div className={`transition-opacity duration-300 ${isFlipped ? 'opacity-100' : 'opacity-0'}`}>
                    {content}
                </div>
                {!isFlipped && (
                    <div className="text-center mt-4 text-sm">
                        Click para ver más...
                    </div>
                )}
            </div>
        </div>
    );
};

const TypingEffect = ({ text }) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 50);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text]);

    return <span>{displayText}<span className="cursor-blink">|</span></span>;
};

const AchievementCard = ({ title, description, icon, link }) => (
    <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="retro-card p-6 transform transition-all hover:-translate-y-1 hover:shadow-lg"
    >
        <div className="flex items-center space-x-4">
            <div className="text-3xl">{icon}</div>
            <div>
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-sm opacity-75">{description}</p>
            </div>
        </div>
    </a>
);

const SocialLinks = () => {
    const [hoveredLink, setHoveredLink] = useState(null);

    const links = [
        { name: 'Platzi', icon: '🎓', url: 'https://platzi.com/p/davidprofesor14/', description: 'Ver mis certificados y cursos' },
        { name: 'Portafolio', icon: '💼', url: 'https://portafoliodavc.vercel.app/', description: 'Explora mis proyectos' },
        { name: 'Discord', icon: '💬', url: 'https://discordapp.com/users/989960854529253426', description: 'Contacta conmigo' }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="retro-card p-4 flex items-center justify-center relative group"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                >
                    <div className="text-center">
                        <span className="text-3xl mb-2 block transform transition-transform group-hover:scale-110">
                            {link.icon}
                        </span>
                        <span className="font-bold">{link.name}</span>
                    </div>
                    {hoveredLink === link.name && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#2c1810] text-[#f5e6d3] px-4 py-2 rounded text-sm whitespace-nowrap">
                            {link.description}
                        </div>
                    )}
                </a>
            ))}
        </div>
    );
};

const SkillBar = ({ skill, level }) => (
    <div className="mb-4">
        <div className="flex justify-between mb-1">
            <span className="font-bold">{skill}</span>
            <span>{level}%</span>
        </div>
        <div className="h-2 bg-[#2c1810] rounded-full overflow-hidden">
            <div
                className="h-full bg-[#8b4513] transition-all duration-1000"
                style={{ width: `${level}%` }}
            />
        </div>
    </div>
);

const MusicPlayer = ({ artists }) => {
    const [currentArtist, setCurrentArtist] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [direction, setDirection] = useState('right');

    const nextArtist = () => {
        if (isTransitioning) return;
        setDirection('right');
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentArtist((prev) => (prev + 1) % artists.length);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 300);
    };

    const prevArtist = () => {
        if (isTransitioning) return;
        setDirection('left');
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentArtist((prev) => (prev - 1 + artists.length) % artists.length);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 50);
        }, 300);
    };

    return (
        <div className="retro-card p-6">
            <h3 className="text-xl font-bold mb-4">🎵 Artistas Favoritos</h3>
            <div className="flex flex-col items-center space-y-4">
                <div className="relative w-48 h-48 mb-4 overflow-hidden tv-static-effect">
                    <div className={`
                        absolute w-full h-full transition-transform duration-300
                        ${isTransitioning ? (direction === 'right' ? 'artist-transition-exit' : 'artist-transition-enter') : ''}
                    `}>
                        <img
                            src={artists[currentArtist].image}
                            alt={artists[currentArtist].name}
                            className="w-full h-full object-cover retro-border"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between w-full">
                    <button
                        onClick={prevArtist}
                        className="retro-button"
                        disabled={isTransitioning}
                    >
                        ←
                    </button>
                    <div className="text-center flex-1 px-4">
                        <p className={`text-lg font-bold ${isTransitioning ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                            {artists[currentArtist].name}
                        </p>
                    </div>
                    <button
                        onClick={nextArtist}
                        className="retro-button"
                        disabled={isTransitioning}
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
};

const Home = () => {
    const artists = [
        {
            name: "Mon Laferte",
            image: "https://i.scdn.co/image/ab676161000051742a89a5ad55e1cb241440afef"
        },
        {
            name: "Ugovhb",
            image: "https://i.scdn.co/image/ab67616100005174c4f05eeb14410f82b5a8d575"
        },
        {
            name: "Enjambre",
            image: "https://i.scdn.co/image/ab6761610000517461fb472a31152d596b6bb3ab"
        },
        {
            name: "Zoé",
            image: "https://i.scdn.co/image/ab676161000051742a7f6c818d24ac776151aefc"
        },
        {
            name: "Laufey",
            image: "https://i.scdn.co/image/ab6761610000517471eb8f92b86868400ed4e006"
        },
        {
            name: "Milo J",
            image: "https://i.scdn.co/image/ab676161000051745b2ed98931971ce81f0f22e7"
        },
        {
            name: "José José",
            image: "https://i.scdn.co/image/ab676161000051740c387e6ddb399d55a8e51341"
        },
        {
            name: "Jósean Log",
            image: "https://i.scdn.co/image/ab6761610000517473dd5c3798474b529c4a4b4f"
        },
        {
            name: "Cuarteto de Nos",
            image: "https://i.scdn.co/image/ab676161000051744e75c94ad7365dfcdb3201bf"
        },
        {
            name: "Julieta Venegas",
            image: "https://i.scdn.co/image/ab6761610000517444270f00ab4402b3fd91bad1"
        }
    ];

    return (
        <div className="space-y-20 relative">
            <section className="space-y-8 animate-slide-up relative z-10">
                <div className="space-y-4">
                    <h1 className="text-6xl font-bold">Hola.</h1>
                    <h2 className="text-6xl font-bold">
                        soy <TypingEffect text="David" />
                    </h2>
                </div>
                <p className="text-xl max-w-2xl">
                    Bienvenido a mi rincón digital. Aquí encontrarás mis pensamientos, proyectos y experiencias.
                    Soy un desarrollador apasionado por crear experiencias únicas y significativas.
                </p>
            </section>

            <section className="space-y-8 relative z-10">
                <h2 className="font-bold text-2xl mb-8">Sobre Mí</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <InfoCard
                        title="Origen y Estudios"
                        icon="🎓"
                        content={
                            <ul className="space-y-2 text-lg">
                                <li>📍 Oaxaca, México</li>
                                <li>🎂 18 años</li>
                                <li>👨‍🎓 Estudiante de Ing. en Computación</li>
                                <li>💻 Técnico en Programación</li>
                            </ul>
                        }
                    />
                    <InfoCard
                        title="Intereses"
                        icon="🌟"
                        content={
                            <ul className="space-y-2 text-lg">
                                <li>🎮 Gaming</li>
                                <li>📺 Anime</li>
                                <li>💻 Programación</li>
                                <li>🎵 Música</li>
                            </ul>
                        }
                    />
                </div>
            </section>

            <section className="space-y-8 relative z-10">
                <h2 className="font-bold text-2xl mb-6">Mis Perfiles</h2>
                <SocialLinks />
            </section>

            <section className="space-y-8 relative z-10">
                <h2 className="font-bold text-2xl mb-6">Logros y Certificaciones</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <AchievementCard
                        title="Certificaciones Platzi"
                        description="Más de 20 cursos completados en desarrollo web y programación"
                        icon="🏆"
                        link="https://platzi.com/p/davidprofesor14/"
                    />
                    <AchievementCard
                        title="Portafolio Web"
                        description="Explora mis proyectos y trabajos más destacados"
                        icon="💼"
                        link="https://portafoliodavc.vercel.app/"
                    />
                </div>
            </section>

            <section className="relative z-10">
                <div className="mt-8">
                    <MusicPlayer artists={artists} />
                </div>
            </section>

            <section className="retro-card p-8 relative z-10">
                <h2 className="font-bold text-2xl mb-6">Navegación Rápida</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link to="/tecnologia" className="retro-button w-full text-center">
                        Ver Tecnología →
                    </Link>
                    <Link to="/historias" className="retro-button w-full text-center">
                        Leer Historias →
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
