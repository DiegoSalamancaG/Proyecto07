import { useContext } from "react";
import { CartContext } from "../../context/cart/cartContext.js";
import { formatPriceUSD } from "../../utils/formatPrice.js";


export const ProductItem = ({ product }) => {
    //destrusturando el objeto de productos proveniente de la FAKEAPI
    const { title, image, price, description } = product;
    
    //destructurando el objeta de productos proveniente de la api backend
    //const { nombre, precio, imagen, descripcion } = product;

    const { addProduct } = useContext(CartContext);
    

    return(
        <div className="card-container">
            <div className="card-item">
                <div className="card-image">
                    <img src={image} alt={title} />
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p className="text-truncate">{description}</p>
                    <p>{formatPriceUSD(price)}</p>
                    <button onClick={() => addProduct(product)}>Agregar al carrito!</button>
                </div>
            </div>
        </div>
    )
}