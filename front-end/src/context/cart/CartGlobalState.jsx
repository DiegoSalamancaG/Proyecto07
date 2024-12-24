import { useReducer } from "react";
import { CartContext } from "./cartContext.js";
import { CartReducer } from "./cartReducer.js";

const estadoInicial = {  // Initial state of the cart
    cart: []
}

export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CartReducer, estadoInicial);

    // Agrega un producto al carrito
    const addProduct = (product) => {
        const { title }= product;
        dispatch({ type: 'ADD_PRODUCT', payload: product });
        console.log(`Producto agregado al carrito: ${title}`);
    }

    // Elimina un producto del carrito
    const removeProduct = (productId) => {
        dispatch({ type: 'REMOVE_PRODUCT', payload: productId });
    }

    // Limpia el carrito
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    }

    // Aumenta la cantidad de un producto
    const increaseQuantity = (productId) => {
        dispatch({ type: 'INCREASE_QUANTITY', payload: productId})
    }

    // Disminuye la cantidad de un producto
    const decreaseQuantity = (productId) => {
        dispatch({ type: 'DECREASE_QUANTITY', payload: productId})
    }

    // exportar el contexto
    return (
        <CartContext.Provider 
            value={{
                cart: state.cart,
                addProduct,
                removeProduct,
                clearCart,
                increaseQuantity,
                decreaseQuantity
            }}
        >
            {children}
        </CartContext.Provider>
    )

}