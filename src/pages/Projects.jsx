import React, { useState } from 'react';

const ProjectCard = ({ title, description, link, tags, activePreview, setActivePreview }) => {
    const isPreviewActive = activePreview === link;

    const handlePreviewToggle = () => {
        if (isPreviewActive) {
            setActivePreview(null);
        } else {
            setActivePreview(link);
        }
    };

    return (
        <article className="retro-card p-6 hover:cursor-pointer transform transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 overflow-hidden rounded border-2 border-[#2c1810] h-64 relative">
                {isPreviewActive ? (
                    <>
                        <iframe 
                            src={link}
                            className="w-full h-full"
                            title={title}
                            loading="lazy"
                        />
                        <button 
                            onClick={handlePreviewToggle}
                            className="absolute top-2 right-2 retro-button-small"
                            aria-label="Cerrar vista previa"
                        >
                            ✕
                        </button>
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#f5e6d3]">
                        <button 
                            onClick={handlePreviewToggle}
                            className="retro-button"
                        >
                            Cargar Vista Previa
                        </button>
                    </div>
                )}
            </div>
            <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-bold px-3 py-1 retro-border">Proyecto</span>
                <div className="flex gap-2">
                    {tags.map((tag, index) => (
                        <span key={index} className="text-sm font-mono">{tag}</span>
                    ))}
                </div>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="block">
                <h3 className="text-xl font-bold mb-2 hover:text-[#8b4513] transition-colors">
                    {title}
                </h3>
                <p className="text-gray-700 mt-2">{description}</p>
                <div className="mt-4 flex justify-between items-center">
                    <button className="retro-button">
                        Ver Proyecto →
                    </button>
                </div>
            </a>
        </article>
    );
};

const Projects = () => {
    const [activePreview, setActivePreview] = useState(null);

    const projects = [
        {
            title: "Portafolio Web Funny",
            description: "Una versión divertida y creativa de mi portafolio personal, mostrando mis proyectos de una manera única y entretenida.",
            link: "https://davcportafolio.vercel.app/",
            tags: ["React", "Vercel", "Diseño Creativo"]
        },
        {
            title: "Portafolio Web Profesional",
            description: "Mi portafolio profesional donde muestro mis habilidades, experiencia y proyectos de una manera formal y elegante.",
            link: "https://portafoliodavc.vercel.app/",
            tags: ["React", "Vercel", "Portfolio"]
        },
        {
            title: "DavCode - Plataforma de Cursos",
            description: "Una plataforma educativa donde comparto cursos y recursos para aprender desarrollo web y programación.",
            link: "https://davcode.vercel.app/",
            tags: ["Educación", "Cursos", "Desarrollo"]
        },
        {
            title: "DavGenerator - Generador de Imágenes",
            description: "Una herramienta para generar imágenes de código, perfecta para crear capturas de código estilizadas.",
            link: "https://davgenerator.vercel.app/",
            tags: ["Generador", "Imágenes", "Código"]
        }
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold mb-4">Mis Proyectos</h1>
                <p className="text-xl text-gray-700">Una colección de mis trabajos y experimentos en la web</p>
            </header>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <ProjectCard 
                        key={index} 
                        {...project} 
                        activePreview={activePreview}
                        setActivePreview={setActivePreview}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
