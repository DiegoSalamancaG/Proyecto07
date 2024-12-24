import { Preference } from 'mercadopago'
import configMP from '../config/mercadopagoConfig.js'

export const createPreference = async(req, res, next) => {
    try {
        const { cart } = req.body;

        //Estructurar los datos del carrito - Array
        const items = cart.map((product) => ({
            title: product.nombre,
            unit_price: Number(product.precio),
            quantity: Number(product.quantity),
            currency_id: "CLP"
        }));

        //Es el cuerpo de configuración de las preferencias de compra
        const body = {
            items,
            back_urls: {
                success:'http://localhost:5173/mercadopago/status?status=approved',
                failure:'http://localhost:5173/mercadopago/status?status=failure',
                pending:'http://localhost:5173/mercadopago/status?status=pending'
            },
            auto_return: 'approved'
        }

        const preference = new Preference(configMP);
        const response = await preference.create({ body })

        res.status(200).json({ id: response.id })
    } catch (error) {
        console.error(error)
        next(error)
    }
}