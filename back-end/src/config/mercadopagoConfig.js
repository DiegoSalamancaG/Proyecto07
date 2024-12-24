import { MercadoPagoConfig } from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config();

const configMP = new MercadoPagoConfig({
    accessToken: process.env.MP_ACCESS_TOKEN,
    options: { sandbox: true }
});

export default configMP;