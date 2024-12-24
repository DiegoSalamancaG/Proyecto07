import mongoose from "mongoose";
import { REGEX_URI } from "../utils/constant/regex.js";

const { Schema, model } = mongoose;

const productSchema = new Schema({
    nombre: { 
        type: String, 
        required: true, 
        trim: true,
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
        maxlength: [100, 'El nombre no puede exceder los 100 caracteres']
    },
    descripcion: { 
        type: String, 
        required: true, 
        trim: true,
        minlength: [10, 'La descripción debe tener al menos 10 caracteres']
    },
    precio: {
        type: Number,
        required: true,
        min: [0, 'El precio debe ser mayor de 0']
    },
    stock: {
        type: Number,
        required: true,
        min: [0, 'El stock debe ser mayor o igual a 0']
    },
    imagen: {
        type: String, 
        trim: true,
        default: '',
        validate: {
            validator: (value) => REGEX_URI.test(value) || value === '',
            message: 'URL de la imagen no válida'
        }
    },
    tallas: {
        type: [String], // Array de strings
        enum: ['S', 'M', 'L', 'XL'], // Valores permitidos
        validate: {
            validator: (value) => value.length > 0,
            message: 'Debe haber al menos una talla disponible'
        },
        required: true // Campo obligatorio
    },
    oferta: {
        activo: {
            type: Boolean,
            default: false // Por defecto, el producto no está en oferta
        },
        descuento: {
            type: Number,
            min: [0, 'El descuento no puede ser menor a 0'],
            max: [40, 'El descuento no puede ser mayor a 40%'],
            validate: {
                validator: function (value) {
                    return this.oferta.activo ? value > 0 : true;
                },
                message: 'Debe proporcionar un descuento válido si la oferta está activa'
            },
            default: 0 // Por defecto, sin descuento
        }
    }
}, { timestamps: true });

export const Product = model('Product', productSchema);
