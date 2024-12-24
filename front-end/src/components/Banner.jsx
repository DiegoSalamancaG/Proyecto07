import { Link } from "react-router-dom";
import "../assets/styles/components/banner.css"

export const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner-overlay">
                <div className="banner-content">
                    <h2>¡Oferta Especial de Temporada!</h2>
                    <p>
                        Aprovecha un <strong>20% de descuento</strong> en todas nuestras prendas inspiradas en la cultura geek. 
                        ¡Oferta válida hasta el 31 de diciembre!
                    </p>
                    <Link to="#products" className="banner-button">Ver Colección</Link>
                </div>
            </div>
        </div>
    );
};
