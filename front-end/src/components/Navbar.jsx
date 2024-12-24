import { useState } from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    return (
        <nav className="navbar">
            {/* Logo */}
            <div className="navbar__logo">
                <Link className="navbar__logo_logo" id="#home" to="/"><img src="/hokoriLogo_resized.png"/></Link>
            </div>

            {/* Ítems de Navegación */}
            <div className={`navbar__nav ${isMobileMenuOpen ? 'navbar__nav--active' : ''}`}>
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link">Inicio</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/about" className="navbar__link">Sobre Nosotros</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/products" className="navbar__link">Tienda</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/questions" className="navbar__link">Preguntas frecuentes</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/cart" className="navbar__link">Carrito</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/login" className="navbar__link">Iniciar Sesión</Link>
                    </li>
                </ul>
            </div>

            {/* Botón de Menú Hamburger */}
            <div className="navbar__toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation">
                <span className="navbar__toggle-bar"></span>
                <span className="navbar__toggle-bar"></span>
                <span className="navbar__toggle-bar"></span>
            </div>
        </nav>
    )
}
