import { InternalServerError } from "../../errors/TypeErrors.js";
import { Product } from "../../models/product.js"

export async function updateProductImageService(id, imageUrl) {
    try {
        const product = await Product.findOneAndUpdate({ _id: id, activo: true }, { imagen: imageUrl }, { new: true }).select("-password -activo");
        return product;
    } catch (error) {
        throw new InternalServerError("Error al procesar el servicio de actualización de product", error);
    }
}