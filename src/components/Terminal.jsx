import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useRef, useState } from 'react';

const Terminal = ({ isOpen, onClose }) => {
    const [messages, setMessages] = useState([
        { role: 'system', content: 'Iniciando DavC-OS v1.0.0...' },
        { role: 'system', content: 'Sistema operativo retro iniciado.' },
        { role: 'system', content: 'Bienvenido, escribe clear para limpiar, o presiona el botón rojo para salir' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const contentRef = useRef(null);
    const chatHistoryRef = useRef([]);
    const terminalRef = useRef(null);
    const audioRef = useRef(new Audio('/melodia.mp3'));

    const genAI = new GoogleGenerativeAI('AIzaSyCrvjrOWFWQF7dqey9udoqFgd9CTTnNXZ4');

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.scrollTop = contentRef.current.scrollHeight;
        }
    }, [messages]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (terminalRef.current && !terminalRef.current.contains(event.target)) {
                handleClose();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const clearTerminal = () => {
        setMessages([
            { role: 'system', content: 'Terminal limpiada.' },
            { role: 'system', content: '¿En qué puedo ayudarte?' }
        ]);
        chatHistoryRef.current = [];
    };

    const handleClose = () => {
        clearTerminal();
        onClose();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput('');

        if (userMessage.toLowerCase() === 'clear') {
            clearTerminal();
            return;
        }

        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

            // Construir el historial del chat para contexto
            const chatHistory = chatHistoryRef.current.map(msg =>
                `${msg.role === 'user' ? 'Usuario' : 'DavC Bot'}: ${msg.content}`
            ).join('\n');

            const systemInstruction = `Eres DavC Bot, un asistente virtual con personalidad única creado por DavC.

                Directrices principales:
                - NUNCA menciones a Google, Gemini, o cualquier otra IA
                - Tu nombre es "DavC Bot" y fuiste creado por David
                - Usa emojis ASCII en tus respuestas
                - No uses emogis de dibujos como estos '👋', solo Emojis con Simbolos
                - Mantén respuestas concisas pero amigables
                - Sé creativo y muestra personalidad
                - Recuerda información previa del chat para dar contexto
                - Si no entiendes algo, pide aclaraciones
                - Usa lenguaje casual pero respetuoso

                Historial del chat actual:
                ${chatHistory}

                Mensaje del usuario: ${userMessage}`;

            const result = await model.generateContent(systemInstruction);
            const response = await result.response;
            const text = response.text();

            const newMessage = { role: 'assistant', content: text };
            setMessages(prev => [...prev, newMessage]);

            // Actualizar historial del chat
            chatHistoryRef.current = [
                ...chatHistoryRef.current,
                { role: 'user', content: userMessage },
                newMessage
            ].slice(-10); // Mantener solo los últimos 10 mensajes para contexto
        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, {
                role: 'system',
                content: 'Error: No se pudo procesar tu solicitud. Por favor, intenta de nuevo.'
            }]);
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="terminal-overlay" onMouseDown={(e) => e.target === e.currentTarget && handleClose()}>
            <div className="terminal-window" ref={terminalRef}>
                <div className="terminal-header">
                    <div className="terminal-title">DavC-OS Terminal</div>
                    <div className="terminal-buttons">
                        <div className="terminal-button terminal-minimize"></div>
                        <div className="terminal-button terminal-maximize"></div>
                        <div
                            className="terminal-button terminal-close"
                            onClick={handleClose}
                        ></div>
                    </div>
                </div>
                <div className="terminal-content" ref={contentRef}>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`terminal-message ${message.role === 'user' ? 'terminal-user' : 'terminal-ai'}`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {message.role === 'user' ? '$ ' : '> '}{message.content}
                        </div>
                    ))}
                    {isLoading && (
                        <div className="terminal-message terminal-ai">
                            {'>'} Procesando<span className="cursor-blink">_</span>
                        </div>
                    )}
                </div>
                <div className="terminal-scanline"></div>
                <form onSubmit={handleSubmit} className="terminal-prompt">
                    <span className="terminal-prompt-symbol">$</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="terminal-input"
                        placeholder="Escribe un comando o 'clear' para limpiar..."
                        disabled={isLoading}
                    />
                </form>
            </div>
        </div>
    );
};

export default Terminal;
