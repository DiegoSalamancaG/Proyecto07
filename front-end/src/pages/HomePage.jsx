//importar productList  y agregarlo al return
import { ProductList } from '../components/products/ProductList.jsx'
import { Banner } from '../components/Banner.jsx'

//ErrorBoundary
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorFallBack.jsx"



export const HomePage = () => {

    return (
        <>  
            <Banner/>
            <ErrorBoundary 
                fallback={ErrorFallback}
                onReset={()=>window.location.reload()}>
                <ProductList />
            </ErrorBoundary>
        </>
    )
}