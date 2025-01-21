import mongoose from "mongoose";

const { Schema, model } = mongoose;

//Schema collection tiene como finalidad proveer una colecion a los productos, ya sea, temporadaVerano, invierno, o de alguna tematica que se desee agregar
const CollectionProductSchema = new Schema({
    name:{
        type: String,
        required: [true, "El nombre de la colección es obligatorio"],
        unique: true,
        trim: true,
        minlength: [3, "El nombre de la colección debe tener al menos 3 caracteres"],
        maxlength: [50, "El nombre de la colección no puede exceder los 50 caracteres"],
    },
    description:{
        type: String,
        trim: true,
        maxlength: [200, "La descripción no puede exceder los 200 caracteres"],
    },
}, { timestamps: true });

export const CollectionProduct = model("CollectionProduct", CollectionProductSchema);
