import { useState } from "react";
import { apiClient } from "../../services/userServices";
import { Wallet } from "@mercadopago/sdk-react";

export const MercadoPagoBtn = (cart, total, onPaymentSuccess) => {
    const [ preferenceId, setPreferenceId ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    const handlePreference = async () => {
        try {
            const {data} = await apiClient.post("/create-preference", {cart, total});
            setPreferenceId(data.id);
        } catch (error) {
            console.error("Error al generar la preferencia de pago", error);
        } finally{
            setLoading(true);
        }
    }

    return(
        <>
            <button 
                className="btn-payment" 
                onClick={handlePreference} 
                disabled={loading}
            >
                {loading ? "Cargando..." : "Pagar con MercadoPago"}
            </button>
            {preferenceId && (
                <Wallet
                    preferenceId={{preferenceId}}
                    onReady={() => console.log("Wallet component is ready")}
                    onError={(error) => console.error("Error on Wallet component", error)}
                    onPayment={(datails) => onPaymentSuccess(datails)}
                />
            )}
        </>
    )
}