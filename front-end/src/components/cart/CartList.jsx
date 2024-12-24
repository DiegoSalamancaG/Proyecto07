import { useContext } from "react";
import { CartContext } from "../../context/cart/cartContext.js";
import { formatPriceUSD } from "../../utils/formatPrice.js";
import { CartItem } from "./CartItem.jsx";
import { MercadoPagoBtn } from "../../components/payments/MercadoPagoBtn.jsx";
import { useNavigate } from "react-router-dom"

export const CartList = () => {
    const {cart, clearCart} = useContext(CartContext);
    const navigate = useNavigate();

    if (!cart || cart.length === 0) {
        return (
            <div className="cart-title-empty">
                <h2>Tu carrito está vacío</h2>
                <p>Explora nuestra tienda y encuentra productos increíbles!</p>
                <i className="fas fa-shopping-cart cart-icon"></i>
                <button className="btn-return" onClick={() => navigate('/products')}>Ir a la tienda</button>
            </div>
        );
    }    

    const total = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

    // payment MP
    const handlePayment = (details) => {
        console.log("Pago exitoso",details);
        alert("Pago exitoso");
        clearCart();
    }

    return(
        <div className="cart-list">
            <h2>Carrito de compra</h2>
            {cart.map(product => (
                <CartItem key={product.id} product={product} />
            ))}

            <div className="cart-total">
                <h3>Total: {formatPriceUSD(total)}</h3>
                <button className="clear-btn" onClick={clearCart}>Limpiar carrito</button>
            </div>

            {/* boton pago MP */}
            <section className="cart-mp">
                <MercadoPagoBtn cart={cart} total={total} onPaymentSuccess={handlePayment}/>
            </section>
        </div>

    )
}