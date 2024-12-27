import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
            id: 1,
            title: "Portafolio Web Funny",
            description: "Un portafolio interactivo con elementos divertidos y animaciones",
            url: "https://davcportafolio.vercel.app/",
            tags: ["React", "TailwindCSS", "Animaciones"]
        },
        {
            id: 2,
            title: "Portafolio Web Profesional",
            description: "Versión profesional de mi portafolio con diseño minimalista",
            url: "https://portafoliodavc.vercel.app/",
            tags: ["Next.js", "TailwindCSS", "Responsive"]
        },
        {
            id: 3,
            title: "DavCode - Plataforma de Cursos",
            description: "Plataforma educativa para aprender programación",
            url: "https://davcode.vercel.app/",
            tags: ["React", "Node.js", "MongoDB"]
        },
        {
            id: 4,
            title: "DavGenerator - Generador de Imágenes",
            description: "Herramienta para generar imágenes con IA",
            url: "https://davgenerator.vercel.app/",
            tags: ["OpenAI", "React", "API"]
        }
    ];

    const handlePreview = (id) => {
        if (activePreview === id) {
            setActivePreview(null);
        } else {
            setActivePreview(id);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-12 text-center">Mis Proyectos</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        className="retro-tv-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="retro-tv">
                            <div className="tv-antenna left"></div>
                            <div className="tv-antenna right"></div>
                            <div className="tv-body">
                                <div className="tv-screen">
                                    {activePreview === project.id ? (
                                        <div className="tv-content">
                                            <iframe
                                                src={project.url}
                                                className="w-full h-full"
                                                title={project.title}
                                            />
                                        </div>
                                    ) : (
                                        <div className="tv-static">
                                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                            <p className="text-sm mb-4">{project.description}</p>
                                            <div className="flex flex-wrap gap-2 mb-4 justify-center">
                                                {project.tags.map((tag, index) => (
                                                    <span
                                                        key={index}
                                                        className="retro-button-small"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                                <div className="tv-controls">
                                    <button
                                        onClick={() => handlePreview(project.id)}
                                        className="tv-button power"
                                    >
                                        {activePreview === project.id ? 'Apagar' : 'Encender'}
                                    </button>
                                    <div className="tv-knobs">
                                        <div className="knob"></div>
                                        <div className="knob"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="tv-stand"></div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
