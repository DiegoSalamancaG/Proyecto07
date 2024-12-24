import { Link } from 'react-router-dom';
import "../assets/styles/components/footer.css"

export const Footer = () => {
    return (
        // Footer
        <section className="footer-container">
            <footer className="footer">
                <div className="footer__logo">
                    <Link className="footer__logo_logo" to="#home"><img src="/hokoriLogo_resized.png"/></Link>
                </div>
                
                <div className="social-buttons">
                    <Link
                        to="/"
                        className="social-button social-button--facebook"
                        aria-label="Facebook"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </Link>
                    <Link
                        to="/"
                        className="social-button social-button--linkedin"
                        aria-label="LinkedIn"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </Link>
                    <Link
                        to="/"
                        className="social-button social-button--snapchat"
                        aria-label="Snapchat"
                    >
                        <i className="fab fa-snapchat-ghost"></i>
                    </Link>
                    <Link
                        to="/"
                        className="social-button social-button--github"
                        aria-label="GitHub"
                    >
                        <i className="fab fa-github"></i>
                    </Link>
                    <Link
                        to="/"
                        className="social-button social-button--codepen"
                        aria-label="CodePen"
                    >
                        <i className="fab fa-codepen"></i>
                    </Link>
                </div>

                <div className="footer__contact">
                    <p>Contáctanos</p>
                    <p>©2024 - Todos los derechos reservados</p>
                </div>
            </footer>
        </section>
    );
};
