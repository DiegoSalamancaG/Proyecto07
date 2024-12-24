import { Link } from "react-router-dom";
import "../assets/styles/components/about.css"


export const About = () => {
    return (
        <div className="about-container">
            {/* Logo */}
            <div className="logo-container">
                <img src="/hokoriLogo_resized.png" alt="Hokori Logo" className="logo" />
            </div>

            {/* Introducción */}
            <h1>¡Bienvenidos a Hokori!</h1>
            <p>
                En Hokori nos apasiona crear prendas únicas de vestuario inspiradas en la cultura geek, anime 
                y tus personajes favoritos. Cada diseño es cuidadosamente elaborado para reflejar tu personalidad 
                y estilo.
            </p>

            {/* Ubicación */}
            <div className="location-section">
                <h2>¿Dónde encontrarnos?</h2>
                <p>
                    Puedes visitarnos en nuestra tienda física ubicada en: <br />
                    <strong>Av. Providencia #2216, Local 59B</strong> <br />
                    (Edificio Dos Caracoles) Providencia.
                </p>
                <p>¡Te esperamos para que conozcas nuestros productos en persona!</p>
            </div>

            {/* Valores de la marca */}
            <div className="values-section">
                <h2>Nuestros Valores</h2>
                <ul>
                    <li>🌟 Creatividad: Diseños únicos que cuentan una historia.</li>
                    <li>🧵 Calidad: Materiales y confección de primera.</li>
                    <li>🌱 Sostenibilidad: Prendas responsables con el medio ambiente.</li>
                    <li>🤝 Comunidad: Un espacio para los amantes de la cultura geek.</li>
                </ul>
            </div>

            {/* Llamado a la acción */}
            <div className="cta-section">
                <p>¿Listo para encontrar tu próxima prenda favorita? Explora nuestra tienda en línea o visítanos en persona.</p>
                <Link to="/products" className="cta-button">Explorar la tienda</Link>
            </div>
        </div>
    );
};
