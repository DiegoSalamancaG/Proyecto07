import { useState, useEffect } from "react";
import { ProductItem } from "./ProductItem.jsx";
import { getProducts } from "../../services/productServices.js" // Importamos la función que obtiene los productos



export const ProductList = () => {
    // Inicializamos el estado de los productos
    const [ products, setProducts ] = useState([]); 

    // Inicializamos el estado de carga
    const [ loading, setLoading ] = useState(true); 

    // Inicializamos el estado de error
    const [ error, setError ] = useState(null); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                getProducts().then((data)=>setProducts(data))
                // setProducts(data); // Actualizamos el estado de los productos
            } catch (error) {
                setError(error.response?.data?.message || error.message || "No se pudieron cargar los productos."); // Manejo robusto del error
            } finally {
                setLoading(false); // Actualizamos el estado de carga
            }
        };
        fetchProducts(); // Llamamos a la función que obtiene los productos
    }, []);

    if (error) return <p className="error">Ocurrió un error: {error}</p>; // Si hay un error mostramos un mensaje

    // console.log(products);
    return (
        <div className="product-list" id="products">
            {
                loading ? (<p className="loading">Cargando...</p>):
                (
                products.length > 0 ? (
                    products.map((product) => (
                        <ProductItem key={product._id} product={product}  />
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                ))
            }
        </div>
    );
};
