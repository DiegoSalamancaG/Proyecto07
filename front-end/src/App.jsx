import {  AppRoutes } from "./routes/AppRouter";
//aqui ira el cartProvider y AuthProvider
import { CartProvider } from "./context/cart/CartGlobalState";
import { UserProvider } from "./context/user/UserGlobalState";

export const App = () => {
    return (
        <UserProvider>
            <CartProvider>
                <AppRoutes />
            </CartProvider>
        </UserProvider>
    )
}
