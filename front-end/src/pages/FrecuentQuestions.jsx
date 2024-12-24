import "../assets/styles/components/questions.css"


export const FrecuentQuestions = () => {
    return (
        <div className="container-frecuent-questions">
            {/* Logo */}
            <div className="logo-container">
                <img src="/hokoriLogo_resized.png" alt="Hokori Logo" className="logo" />
            </div>

            {/* Preguntas Frecuentes */}
            <div className="frecuent-questions">
                <h2>Preguntas Frecuentes</h2>

                {/* Pregunta 1 */}
                <section className="frecuent-question">
                    <h3>¿Tienen tienda física?</h3>
                    <p>
                        Sí! Puedes visitarnos y ver algunos de nuestros productos en la tienda de 
                        Ikigai Bazar, ubicada en Merced #832, Piso 3, Local 75 en Santiago. 
                        Atendemos de Lunes a Viernes de 13:00 a 19:00 hrs y Sábados de 12:00 a 15:00 hrs. 
                        Feriados y Domingos se encuentra cerrado.
                    </p>
                </section>

                {/* Pregunta 2 */}
                <section className="frecuent-question">
                    <h3>¿Mi prenda tiene algún cuidado especial?</h3>
                    <p>
                        Todas nuestras prendas requieren el mismo cuidado que cualquier prenda de ropa. Procura usar 
                        siempre agua fría en el lavado, no usar cloro, lavar por el revés (para cuidar el estampado), 
                        evitar el uso de secadora en temperatura alta e idealmente secar a la sombra (no al sol directo).
                    </p>
                </section>

                {/* Pregunta 3 */}
                <section className="frecuent-question">
                    <h3>¿En cuánto tiempo estará listo mi pedido?</h3>
                    <p>
                        El tiempo de confección de tu pedido es de 2 a 5 días hábiles (Lunes a Viernes). Dentro de este 
                        periodo tu pedido será despachado ya sea por Delivery o Starken. Si seleccionaste retiro en tienda, 
                        debes esperar a que te avisemos por correo o WhatsApp cuando tu pedido esté listo para ser retirado.
                    </p>
                </section>

                {/* Pregunta 4 */}
                <section className="frecuent-question">
                    <h3>La prenda me quedó pequeña/grande, ¿puedo cambiar de talla?</h3>
                    <p>
                        Claro que sí! Si deseas cambiar de talla, envíanos un mensaje. El tiempo de espera dependerá de si 
                        tenemos stock disponible de la talla que necesites o si debemos confeccionarla. La prenda de cambio 
                        debe venir SIN USO, y en un plazo de no más de 10 días desde el día de recepción de tu pedido.
                    </p>
                </section>

                {/* Pregunta 5 */}
                <section className="frecuent-question">
                    <h3>¿Hacen diseños personalizados?</h3>
                    <p>
                        ¡Sí! Aceptamos pedidos personalizados según agenda disponible para diseños. Si deseas pedir uno, 
                        envíanos un mensaje por Instagram o WhatsApp con la idea que tengas en mente. NO replicamos diseños 
                        que pertenezcan a otras tiendas/ilustradores, ni tampoco estampamos imágenes sacadas directamente de 
                        internet. Todo diseño debe ser previamente aprobado por nuestra área de diseño para asegurar la calidad 
                        que tendrá posteriormente en la prenda.
                    </p>
                </section>

                {/* Pregunta 6 */}
                <section className="frecuent-question">
                    <h3>¿Puedo pagar con tarjeta de crédito?</h3>
                    <p>
                        ¡Sí! Aceptamos pagos con tarjeta de crédito a través de MercadoPago, además de transferencia bancaria y 
                        efectivo al momento de retirar en tienda.
                    </p>
                </section>
            </div>
        </div>
    );
};
