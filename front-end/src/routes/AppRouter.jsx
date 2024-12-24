import { Route, Routes } from "react-router-dom";
import { Navbar, Footer } from "../components";
import { HomePage, AboutPage, CartPage, FrecuentQuestions, LoginPage } from "../pages"
import { ProductList } from "../components/products/ProductList";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MercadoPagoStatus } from "../pages/MercadoPagoStatus";
import { PrivateRouter } from "./PrivateRouter";

export const AppRoutes = () => {

    const ScrollSection = () =>{
        const { hash } = useLocation();
        useEffect(()=>{
            if(hash){
                const element = document.querySelector(hash)
                if(element){
                    element.scrollIntoView({behavior: 'smooth'})
                }
            }
        },[hash])
        return null
    }

    return(
        <>
            <ScrollSection/>
            <Navbar/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/products" element={<ProductList/>}/>
                <Route path="/questions" element={<FrecuentQuestions/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route 
                    path="/cart" 
                    element={
                        //<PrivateRouter>
                            <CartPage/>
                        //</PrivateRouter>
                    }
                />
                <Route 
                    path="/mercadopago/status" 
                    element={
                        <PrivateRouter>
                            <MercadoPagoStatus/>
                        </PrivateRouter>
                    }
                />
            </Routes>
            <Footer/>
        </>
    )
}