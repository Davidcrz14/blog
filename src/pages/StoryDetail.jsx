import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MusicPlayer from '../components/MusicPlayer';

const stories = {
    "el-regalo-de-cumpleanos": {
        title: "El Regalo de Cumpleaños",
        category: "Terror",
        readTime: 8,
        date: "14 de Marzo, 2024",
        content: `Todo comenzó con un mensaje de WhatsApp. Era Andrea, una amiga que no veía desde la secundaria. Me sorprendió porque, aunque nos seguíamos en redes, nunca hablábamos. El mensaje era simple: "¿Te acordás cuando éramos chicas y jugábamos a las muñecas? Encontré algo que te va a encantar."

No le di importancia al principio. Respondí con un emoji y seguí con mi vida. Pero Andrea insistió. Me contó que había encontrado una tienda especial, de esas que solo aparecen en Instagram a las tres de la mañana cuando no podés dormir.

"Hacen muñecas personalizadas", me explicó. "Son igualitas a la persona que vos quieras. Pensé en mandarte una para tu cumpleaños. Solo necesito una foto tuya."

Debí haberme negado. Algo en la forma en que escribía los mensajes me inquietaba. Era demasiado formal, demasiado precisa. La Andrea que yo recordaba era un desastre escribiendo, siempre con faltas de ortografía y emojis por todos lados.

Pero la curiosidad pudo más. Le mandé una selfie reciente y me olvidé del asunto. Los días pasaron y mi cumpleaños se acercaba. Andrea dejó de escribir después de confirmarme que había hecho el pedido.

La noche antes de mi cumpleaños, recibí un paquete. Era una caja negra con un moño rojo sangre. Dentro había una nota: "Para que nunca estés sola. Con amor, Andrea."

La muñeca era perfecta. Demasiado perfecta. Tenía mi mismo lunar en el cuello, la pequeña cicatriz en la ceja izquierda, hasta el mechón rebelde que nunca logro peinar. Sus ojos eran de vidrio, pero parecían vivos.

Esa noche no pude dormir. Sentía que la muñeca me observaba desde la repisa donde la había puesto. A la madrugada, escuché un ruido. La muñeca estaba en el piso, mirando hacia mi cama.

La levanté, con las manos temblando, y la volví a colocar en su lugar. Pero cuando me di vuelta para volver a la cama, sentí un escalofrío. En el espejo del tocador, el reflejo de la muñeca parpadeó.

Asustada, busqué a Andrea en Instagram. Su perfil había desaparecido. Intenté llamar al número desde el que me había escrito, pero estaba fuera de servicio.

Desesperada, empecé a investigar. Encontré una noticia vieja, de hace cinco años. Andrea había fallecido en un accidente. La fecha de su muerte era exactamente el día antes de que empezara a escribirme.

Ahora la muñeca está en mi habitación. Cada noche la encuentro en un lugar diferente. A veces sonríe. Y cada día que pasa, noto que se parece menos a mí y más a Andrea.

Ayer encontré un mensaje nuevo en mi celular, desde un número desconocido: "¿Te gusta tu regalo? Pronto estaremos juntas de nuevo, como cuando éramos niñas. Para siempre."

Y lo peor no es el mensaje. Lo peor es que mientras escribo esto, puedo ver por el rabillo del ojo cómo la muñeca mueve lentamente su cabeza hacia mí. Y juro que sus labios están formando mi nombre.`
    },
    "la-ultima-llamada": {
        title: "La Última Llamada",
        category: "Terror",
        readTime: 8,
        date: "14 de Marzo, 2024",
        content: `El zumbido del teléfono rompió el silencio de mi departamento a las
        3:33 de la madrugada. Era el número de mi hermana Lucía, quien había fallecido
        hace exactamente un año en circunstancias que todavía me negaba a aceptar.

La pantalla brillaba en la oscuridad como un ojo acusador. El número seguía ahí,
parpadeando, mientras mis dedos temblaban sobre la superficie fría del celular. Sabía
que era imposible, había cancelado su línea yo misma después del funeral. Sin embargo,
el teléfono continuaba sonando, cada vibración enviando ondas de terror por mi espina
dorsal.

Me quedé mirando la pantalla hasta que la llamada se cortó. El silencio que siguió fue
tan denso que podía sentirlo presionando contra mis tímpanos. Entonces, un mensaje de
texto: "Por favor, contestá. Necesito explicarte lo que pasó esa noche."

El aire se volvió espeso, casi irrespirable. Las sombras de mi habitación parecían
cobrar vida propia, estirándose hacia mí como dedos hambrientos. Mi mente viajó
inevitablemente a aquella noche, la última vez que había escuchado su voz.

Lucía siempre había sido la hermana perfecta. Exitosa, hermosa, adorada por todos. Yo
era su opuesto, la oveja negra que vivía a su sombra. La noche de su muerte, habíamos
discutido. Me había confesado algo terrible, un secreto que amenazaba con destruir la
imagen inmaculada que todos tenían de ella. En mi rabia, le dije cosas imperdonables.
Ella salió corriendo bajo la lluvia. Dos horas después, encontraron su auto en el fondo
del río.

Otro mensaje llegó: "¿Recordás lo que te conté esa noche? No era cierto. Hay algo peor.
Algo que necesitás saber."

Mis manos temblaban tanto que casi dejo caer el teléfono. Las paredes de mi
departamento parecían contraerse, como si el espacio mismo quisiera asfixiarme. El aire
acondicionado susurraba como voces distantes, y juraría que escuché su risa, ese sonido
cristalino que tanto extrañaba.

Un tercer mensaje: "Mirá el espejo del baño. Necesito mostrarte algo."

La racionalidad me gritaba que no lo hiciera, que todo esto era producto de mi culpa y
mi dolor no procesado. Pero mis pies se movieron solos, arrastrándome hacia el baño
como si estuviera en trance. El espejo estaba empañado, aunque no había duchado nadie.

Con el corazón martillando en mi pecho, limpié el vapor con la mano. Por un segundo, vi
su reflejo detrás de mí. No era la Lucía que todos conocían, sino algo diferente. Su
piel tenía un tono verdoso, como si todavía estuviera bajo el agua del río, y sus
ojos... sus ojos eran pozos negros que parecían absorber la luz.

El teléfono vibró una vez más en mi mano. "¿Querés saber por qué me suicidé realmente?
No fue por lo que me dijiste. Fue por lo que descubrí sobre vos."

La temperatura del baño descendió bruscamente. Podía ver mi aliento formando pequeñas
nubes frente a mi rostro. El espejo comenzó a empañarse de nuevo, pero esta vez, letras
comenzaron a formarse sobre la superficie, como si alguien las estuviera escribiendo
desde el otro lado.

"Yo sé lo que hiciste cuando éramos niñas."

Los recuerdos que había enterrado en lo más profundo de mi mente comenzaron a emerger
como cadáveres flotando a la superficie. Imágenes fragmentadas de una tarde de verano,
gritos ahogados, un secreto terrible que había logrado suprimir durante dos décadas.

El siguiente mensaje llegó con una foto adjunta. Era una imagen antigua, deteriorada
por el tiempo. La fecha en la esquina marcaba exactamente veinte años atrás. En ella,
Lucía y yo sonreíamos a la cámara, pero había una tercera niña que nadie más recordaba,
una que había desaparecido ese mismo verano.

Las luces del baño comenzaron a parpadear, y en cada destello, el reflejo de Lucía se
acercaba más a mí. Su piel ahora estaba completamente verde, su cabello flotaba como si
estuviera sumergida, y su boca se abría en una sonrisa imposiblemente ancha.

El último mensaje apareció justo cuando las luces se apagaron por completo: "Es hora de
que todos sepan la verdad sobre vos, hermanita. Es hora de que pagues por lo que me
obligaste a guardar silencio durante tanto tiempo."

Ahora estoy escribiendo esto desde la oscuridad de mi habitación. El teléfono sigue
sonando, pero ya no es solo el número de Lucía. Son decenas de llamadas, todas de
números que pertenecieron a personas que ya no están. Y en cada pantalla que me rodea -
mi computadora, mi tablet, incluso el viejo televisor que nunca uso- puedo ver su
rostro, acercándose cada vez más, mientras sus labios forman las palabras que más temo
escuchar:
        "Contales lo que le hiciste a Clara ese verano, o lo haré yo."
El agua comienza a filtrarse por debajo de mi puerta, y huele a río, a secretos
podridos y a culpa. Y lo peor es que sé que esta vez, Lucía no se detendrá hasta que la
verdad salga a la superficie, como el cuerpo que nunca encontraron en aquel caluroso
verano de nuestra infancia.`
    },
    "el-eco-de-la-habitacion-vacia": {
        title: "El Eco de la Habitación Vacía",
        category: "Terror",
        readTime: 15,
        date: "20 de Octubre, 2024",
        content: `
Este es mi fin.

Todo comenzó con un simple cambio de domicilio. Después de mi divorcio, necesitaba alejarme de los recuerdos que me perseguían en cada esquina del departamento que había compartido con Martín durante ocho años. Encontré lo que parecía ser la solución perfecta: un pequeño pero acogedor apartamento en un edificio antiguo del centro.

La primera semana fue tranquila. El lugar tenía ese encanto especial de las construcciones antiguas: techos altos, pisos de madera que crujían suavemente, y una extraña quietud que al principio encontré reconfortante. Pero pronto descubrí que no estaba sola.

Fue algo sutil al principio. Pequeños detalles que atribuí a mi imaginación sobrecargada por el estrés del divorcio. El sonido de pasos en el piso de arriba cuando sabía que el departamento estaba vacío. El reflejo de una figura en el espejo que desaparecía cuando me giraba. La sensación de ser observada mientras dormía.

Lo que realmente me hizo dudar de mi cordura fue el eco. Al principio pensé que era normal; después de todo, el edificio era viejo y probablemente tenía problemas de aislamiento acústico. Pero pronto noté algo peculiar: el eco siempre respondía medio segundo más tarde de lo que debería, como si alguien repitiera mis palabras deliberadamente.

Una noche, incapaz de dormir, decidí investigar. El eco parecía provenir del departamento contiguo, uno que según la administración llevaba meses vacío. Pegué mi oreja a la pared y escuché. Para mi horror, pude distinguir claramente una voz que repetía mis propias palabras, pero... diferente. Era mi voz, pero más grave, más áspera, como si estuviera siendo forzada a través de una garganta seca y dolorida.

La verdadera pesadilla comenzó cuando conocí a Sebas, mi vecino del otro lado. Un hombre amable de unos cincuenta años que trabajaba desde casa como traductor. Durante nuestras primeras conversaciones casuales en el pasillo, noté algo extraño: él también escuchaba el eco, pero en su caso, provenía de MI departamento.

Las cosas empeoraron rápidamente. Empecé a encontrar notas escritas en mi puerta, mensajes garabateados en los espejos con algún tipo de grasa, incluso grabados en la madera de mi escritorio. Todos decían lo mismo: "Cámbiate. Ahora."

Un día, mientras revisaba unas cajas que aún no había desempacado, encontré algo que me heló la sangre. Una foto de mi boda, pero alterada. En ella, yo estaba sola frente al altar. Martín no estaba. Ni siquiera estaba invitado entre los asistentes. Lo más perturbador era que todos los demás invitados estaban presentes, felices, como si esa versión alternativa de mi boda fuera completamente normal.

Sebas comenzó a comportarse de manera extraña. Me evitaba en los pasillos y cuando lo confronté, solo pudo balbucear: "No deberías estar aquí. Ninguno de nosotros debería." Antes de que pudiera explicar más, entró precipitadamente a su departamento y cerró de golpe.

Decidí buscar información sobre el edificio. Lo que descubrí en los archivos municipales me dejó sin aliento. El edificio había sido testigo de un trágico accidente hace veinte años. Una joven llamada Mariana, idéntica a mí en apariencia según las fotos de los periódicos de la época, había muerto al caer desde el tejado. Su cuerpo nunca fue encontrado.

Pero lo que realmente me paralizó fue el informe policial. Mariana había estado comprometida, pero su novio había cancelado la boda abruptamente. Según los testimonios, ella había perdido la razón, convencida de que podía "volver a empezar" si simplemente eliminaba cualquier evidencia de su pasado.

Esa noche, mientras intentaba procesar toda esta información, ocurrió algo que cambió todo. Escuché claramente cómo alguien abría la puerta principal. Los pasos eran inconfundibles: venían directamente hacia mi habitación. Encendí la luz y vi... a mí misma.

No era un reflejo. No era un truco de la luz. Era yo, pero diferente. Mis ojos eran completamente negros, mi piel tenía un tono grisáceo, y mi cabello flotaba como si estuviera sumergida en agua. Pero lo más aterrador fue su sonrisa: demasiado ancha, mostrando demasiados dientes.

"Finalmente," dijo con mi voz distorsionada, "podemos terminar lo que empezaste."

En ese momento, recordé todo. Los últimos meses antes de mudarme aquí. Las terapias psiquiátricas que había fingido hacer para complacer a Martín. Los medicamentos que tiraba por el inodoro porque estaba segura de que no los necesitaba. Y peor aún, las largas caminatas nocturnas que no podía recordar, los períodos de tiempo perdidos, las voces que nadie más escuchaba.

Ahora entiendo por qué Sebas me miraba con tanta lástima. Por qué la administradora del edificio me había dado este departamento específicamente. Por qué mi reflejo en el espejo del baño ha estado perdiendo color gradualmente.

Estoy escribiendo esto desde el suelo de mi habitación, con la espalda contra la puerta. Puedo escucharla moviéndose por el departamento, buscándome. A veces habla con mi voz, otras veces con la de Mariana. Dice que solo quiere ayudarme a "corregir" las cosas, a eliminar todas las versiones incorrectas de mí misma que han estado causando tanto dolor.

Lo más irónico es que ahora entiendo por qué elegí este departamento. Por qué insistí en mudarme aquí tan rápido. Por qué empecé a actuar de manera errática justo antes de venir. Todo tiene sentido.

Escucho pasos aproximándose. Mi otro yo está cerca. Ya no estoy segura de quién está escribiendo esto. O cuántas versiones de mí misma quedan por eliminar.

[Nota del editor: Este documento fue encontrado en un dispositivo perteneciente a una mujer identificada como María Fernanda López. Según los registros médicos, la paciente había sido diagnosticada con trastorno de identidad disociativo severo. El apartamento donde fue hallada permanece sellado por orden judicial. Los vecinos reportan escuchar conversaciones acaloradas provenientes del interior, aunque el lugar está oficialmente desocupado.]`
    }
};

const StoryDetail = () => {
    const { slug } = useParams();
    const story = stories[slug];
    const [isReading, setIsReading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentFontSize, setCurrentFontSize] = useState(18); // Tamaño de fuente predeterminado
    const [currentTheme, setCurrentTheme] = useState('light'); // Tema predeterminado
    const [showSettings, setShowSettings] = useState(false);
    const [showMusicPlayer, setShowMusicPlayer] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setProgress(currentProgress);
            setIsReading(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // Mostrar el reproductor de música después de un breve retraso
        const timer = setTimeout(() => {
            setShowMusicPlayer(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    const increaseFontSize = () => {
        if (currentFontSize < 24) {
            setCurrentFontSize(currentFontSize + 2);
        }
    };

    const decreaseFontSize = () => {
        if (currentFontSize > 14) {
            setCurrentFontSize(currentFontSize - 2);
        }
    };

    const toggleTheme = () => {
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
    };

    if (!story) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#f5e6d3]">
                <div className="text-center space-y-4">
                    <h1 className="text-4xl font-bold mb-4">Historia no encontrada</h1>
                    <p className="text-xl">La historia que buscas no existe.</p>
                    <Link to="/historias" className="retro-button inline-block mt-4">
                        Volver a Historias
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className={`relative min-h-screen transition-colors duration-300 ${
            currentTheme === 'dark' ? 'bg-[#2c1810] text-[#f5e6d3]' : 'bg-[#f5e6d3] text-[#2c1810]'
        }`}>
            <div
                className="fixed top-0 left-0 h-1 bg-[#8b4513] transition-all duration-300 z-50"
                style={{ width: `${progress}%` }}
            />

            <div className={`fixed top-4 left-4 transition-opacity duration-300 ${isReading ? 'opacity-100' : 'opacity-0'}`}>
                <Link to="/historias" className="retro-button text-sm">
                    ← Volver
                </Link>
            </div>

            <div className={`fixed top-4 right-4 transition-opacity duration-300 ${isReading ? 'opacity-100' : 'opacity-0'}`}>
                <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="retro-button text-sm"
                    aria-label="Configuración"
                >
                    ⚙️
                </button>

                {showSettings && (
                    <div className={`absolute right-0 mt-2 p-4 retro-card shadow-lg z-50 ${
                        currentTheme === 'dark' ? 'bg-[#3c2820] text-[#f5e6d3]' : 'bg-[#f5e6d3] text-[#2c1810]'
                    }`}>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <span>Tamaño de texto</span>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={decreaseFontSize}
                                        className="retro-button-small"
                                        aria-label="Disminuir tamaño de texto"
                                    >
                                        A-
                                    </button>
                                    <button
                                        onClick={increaseFontSize}
                                        className="retro-button-small"
                                        aria-label="Aumentar tamaño de texto"
                                    >
                                        A+
                                    </button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <span>Tema</span>
                                <button
                                    onClick={toggleTheme}
                                    className="retro-button-small"
                                    aria-label="Cambiar tema"
                                >
                                    {currentTheme === 'light' ? '🌙' : '☀️'}
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="max-w-4xl mx-auto px-4 py-16">
                <header className={`mb-12 text-center space-y-6 ${
                    currentTheme === 'dark' ? 'text-[#f5e6d3]' : 'text-[#2c1810]'
                }`}>
                    <div className="space-y-2">
                        <span className={`inline-block px-4 py-2 retro-border text-sm ${
                            currentTheme === 'dark' ? 'border-[#f5e6d3]' : 'border-[#2c1810]'
                        }`}>
                            {story.category}
                        </span>
                        <h1 className="text-6xl font-bold mt-4 leading-tight animate-fade-in">
                            {story.title}
                        </h1>
                    </div>
                    <div className="flex items-center justify-center space-x-4 text-sm opacity-75">
                        <span>{story.date}</span>
                        <span>•</span>
                        <span>{story.readTime} minutos de lectura</span>
                    </div>
                </header>

                <article className={`retro-card p-8 md:p-12 shadow-xl transition-colors duration-300 ${
                    currentTheme === 'dark' ? 'bg-[#3c2820] text-[#f5e6d3] border-[#f5e6d3]' : 'bg-[#f5e6d3] text-[#2c1810] border-[#2c1810]'
                }`}>
                    <div className="prose prose-lg max-w-none">
                        {story.content.split('\n\n').map((paragraph, index) => (
                            <p
                                key={index}
                                className="mb-6 leading-relaxed first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left animate-fade-in"
                                style={{
                                    fontSize: `${currentFontSize}px`,
                                    animationDelay: `${index * 0.1}s`
                                }}
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>
                </article>

                <footer className="mt-12 text-center space-y-8">
                    <div className="flex justify-center space-x-4">
                        <Link to="/historias" className="retro-button">
                            ← Volver a Historias
                        </Link>
                    </div>
                    <div className={`text-sm opacity-75 ${
                        currentTheme === 'dark' ? 'text-[#f5e6d3]' : 'text-[#2c1810]'
                    }`}>
                        © 2024 DavC | Bliss - Todos los derechos reservados
                    </div>
                </footer>
            </div>

            {/* Añadir el reproductor de música */}
            {showMusicPlayer && <MusicPlayer />}
        </div>
    );
};

export default StoryDetail;
