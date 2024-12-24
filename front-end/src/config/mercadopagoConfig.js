import { initMercadoPago } from "@mercadopago/sdk-react";

if(!window.MercadopagoInitialized){
  initMercadoPago(
    import.meta.env.VITE_MERCADOPAGO_PUBLIC_KEY,
    {locale: 'es-CL'}
  );
  window.MercadopagoInitialized = true;
}