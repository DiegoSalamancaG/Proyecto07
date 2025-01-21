import mongoose from "mongoose";

const { Schema, model } = mongoose;

//Schema categoria es para darle una categoria a los productos, ya sea, poleras, polerones, etc
const categoryProductSchema = new Schema({
    name: {
        type: String,
        required: [true, "El nombre de la categoría es obligatorio"],
        unique: true,
        trim: true,
        minlength: [3, "El nombre de la categoría debe tener al menos 3 caracteres"],
        maxlength: [50, "El nombre de la categoría no puede exceder los 50 caracteres"],
    },
    description: {
        type: String,
        trim: true,
        maxlength: [200, "La descripción no puede exceder los 200 caracteres"],
    },
}, { timestamps: true });

export const CategoryProduct = model("CategoryProduct", categoryProductSchema);
