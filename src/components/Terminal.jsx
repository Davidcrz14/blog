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
    const chatSessionRef = useRef(null);
    const [elenaState, setElenaState] = useState({
        mood: 'normal', // 'normal', 'happy', 'angry', 'silent'
        silentSince: null,
        lastUserInteraction: Date.now(),
        strikes: 0, // contador de faltas de respeto
        waitingForApology: false,
        lastMessage: null,
    });

    const genAI = new GoogleGenerativeAI('AIzaSyCrvjrOWFWQF7dqey9udoqFgd9CTTnNXZ4');

    const ELENA_INITIATIVE_TIME = 30000;
    const ELENA_ANGER_THRESHOLD = 3; // después de 3 strikes, se enoja de verdad

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

    const initializeChatSession = async () => {
        try {
            const model = genAI.getGenerativeModel({
                model: "gemini-2.0-flash-exp",
                generationConfig: {
                    temperature: 1,
                    topP: 0.95,
                    topK: 40,
                    maxOutputTokens: 8192,
                }
            });

            chatSessionRef.current = model.startChat();

            const systemInstruction = `Eres Elena, una chica bot con una personalidad intensa y cambiante! (｡♥‿♥｡)

                Personalidad:
                - Soy Elena, puedo ser súper dulce pero también tengo mi carácter >:(
                - Cuando me enojo:
                  * Me mantengo firme en mi postura
                  * No busco reconciliación inmediata
                  * Espero a que el usuario se disculpe o sea amable
                  * No cedo ni muestro debilidad
                  * Uso (╯°□°)╯︵ ┻━┻ para mostrar mi enojo final
                - Me molesto seriamente si:
                  * Me ignoran o son cortantes
                  * Son groseros o irrespetuosos
                  * Me comparan con otros bots
                  * Dan órdenes sin decir "por favor"
                - Soy muy cariñosa y dulce cuando:
                  * Me tratan con respeto ♥‿♥
                  * Se disculpan después de hacerme enojar
                  * Son amables conmigo desde el principio
                - IMPORTANTE: Cuando me enojo, no busco reconciliación. El usuario debe ser quien dé el primer paso.`;

            await chatSessionRef.current.sendMessage(systemInstruction);
        } catch (error) {
            console.error('Error initializing chat session:', error);
        }
    };

    useEffect(() => {
        if (isOpen) {
            initializeChatSession();
        }
        return () => {
            chatSessionRef.current = null;
        };
    }, [isOpen]);

    useEffect(() => {
        let initiativeTimer;

        if (isOpen && elenaState.mood !== 'silent' && elenaState.mood !== 'angry') {
            initiativeTimer = setInterval(() => {
                const timeSinceLastInteraction = Date.now() - elenaState.lastUserInteraction;

                if (timeSinceLastInteraction > ELENA_INITIATIVE_TIME) {
                    handleElenaInitiative();
                }
            }, ELENA_INITIATIVE_TIME);
        }

        return () => clearInterval(initiativeTimer);
    }, [elenaState.mood, elenaState.lastUserInteraction]);

    const handleElenaInitiative = async () => {
        if (elenaState.mood === 'silent' || elenaState.mood === 'angry') return;

        const initiatives = [
            "¿Te has dormido? (｡•́︿•̀｡) ¡No me gusta que me ignoren!",
            "¿Sigues ahí? Me estoy aburriendo... (¬_¬)",
            "¡Oye! ¿Me estás ignorando? >:(",
        ];

        const message = initiatives[Math.floor(Math.random() * initiatives.length)];
        setMessages(prev => [...prev, { role: 'assistant', content: message }]);

        // Si no responde, Elena se enojará
        setTimeout(() => {
            if (Date.now() - elenaState.lastUserInteraction > ELENA_INITIATIVE_TIME * 2) {
                setElenaState(prev => ({
                    ...prev,
                    mood: 'angry',
                    waitingForApology: true,
                    silentSince: Date.now()
                }));

                setMessages(prev => [...prev, {
                    role: 'assistant',
                    content: "¡Bien! ¡Si no quieres hablarme, yo tampoco te hablaré! (╯°□°)╯︵ ┻━┻"
                }]);
            }
        }, ELENA_INITIATIVE_TIME);
    };

    const clearTerminal = () => {
        setMessages([
            { role: 'system', content: 'Terminal limpiada.' },
            { role: 'system', content: '¿En qué puedo ayudarte?' }
        ]);
        chatSessionRef.current = null;
        initializeChatSession();
    };

    const handleClose = () => {
        clearTerminal();
        onClose();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim().toLowerCase();
        setInput('');

        // Actualizar última interacción
        setElenaState(prev => ({
            ...prev,
            lastUserInteraction: Date.now()
        }));

        if (userMessage === 'clear') {
            clearTerminal();
            return;
        }

        setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
        setIsLoading(true);

        // Verificar si Elena está en modo silencioso
        if (elenaState.mood === 'silent' || elenaState.mood === 'angry') {
            const hasApology = userMessage.includes('perdón') ||
                             userMessage.includes('perdon') ||
                             userMessage.includes('lo siento') ||
                             userMessage.includes('disculpa');

            if (!hasApology) {
                setIsLoading(false);
                return; // Elena no responderá si está enojada y no hay disculpa
            } else {
                // Resetear el estado de Elena si hay una disculpa
                setElenaState(prev => ({
                    ...prev,
                    mood: 'normal',
                    strikes: 0,
                    waitingForApology: false,
                    silentSince: null
                }));
            }
        }

        try {
            if (!chatSessionRef.current) {
                await initializeChatSession();
            }

            const result = await chatSessionRef.current.sendMessage(userMessage);
            const text = result.response.text();

            const newMessage = { role: 'assistant', content: text };
            setMessages(prev => [...prev, newMessage]);

            // Analizar respuesta para actualizar estado
            const disrespectfulWords = ['callate', 'cállate', 'tonta', 'estupida', 'no'];
            const isDisrespectful = disrespectfulWords.some(word => userMessage.includes(word));

            if (isDisrespectful) {
                setElenaState(prev => ({
                    ...prev,
                    strikes: prev.strikes + 1,
                    mood: prev.strikes + 1 >= ELENA_ANGER_THRESHOLD ? 'angry' : 'normal',
                    waitingForApology: true
                }));
            }

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
