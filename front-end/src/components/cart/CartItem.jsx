import { useContext } from "react";
import { CartContext } from "../../context/cart/cartContext.js";
import { formatPriceUSD } from "../../utils/formatPrice.js";


export const CartItem = ({product}) => {
    const {id, title, price, image} = product;

    const { removeProduct, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    return(
        <div className="cart-item">
            <img className="cart-img" src={image} alt={title} />
            <div className="cart-body">
                <h4>{title}</h4>
                <h5>Precio: {formatPriceUSD(price)}</h5>
            </div>
            <div className="cart-item-quantity">
                <button className="quantity-btn" onClick={() => increaseQuantity(id)}>+</button>
                <span>{product.quantity}</span>
                <button className="quantity-btn" onClick={() => decreaseQuantity(id)} disabled={product.quantity <= 1}>-</button>
            </div>
            <button className="remove-btn" onClick={() => removeProduct(id)}>Quitar del carrito</button>
            <p> Subtotal: {formatPriceUSD(price*product.quantity)}</p>
        </div>
    )
}