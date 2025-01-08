import mongoose from "mongoose";
import { REGEX_URI } from "../utils/constant/regex.js";

const { Schema, model } = mongoose;

const productSchema = new Schema({
    name: { 
        type: String, 
        required: true, 
        trim: true,
        minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
        maxlength: [100, 'El nombre no puede exceder los 100 caracteres'],
    },
    description: { 
        type: String, 
        required: true, 
        trim: true,
        minlength: [10, 'La descripción debe tener al menos 10 caracteres'],
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'El precio debe ser mayor de 0'],
    },
    stock: {
        type: Number,
        required: true,
        min: [0, 'El stock debe ser mayor o igual a 0'],
    },
    imagen: {
        type: String,
        trim: true,
        default: '',
        validate: {
            validator: (value) => !value || REGEX_URI.test(value),
            message: 'URL de la imagen no válida',
        },
    },
    //categoria hará referencia a si son poleras, polerones, etc
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: [true, "La categoria es  obligatoria"]
    },
    collection:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Collection",
        required: false,
    },
    size: {
        type: [String],
        enum: ['S', 'M', 'L', 'XL'],
        validate: {
            validator: (value) => value.length > 0 && new Set(value).size === value.length,
            message: 'Las tallas deben ser únicas y al menos una debe estar disponible',
        },
        required: true,
    },
    sale: {
        active: {
            type: Boolean,
            default: false,
        },
        discount: {
            type: Number,
            min: [0, 'El descuento no puede ser menor a 0'],
            max: [40, 'El descuento no puede ser mayor a 40%'],
            validate: {
                validator: function (value) {
                    return this.sale.active ? value > 0 : true;
                },
                message: 'Debe proporcionar un descuento válido si la oferta está activa',
            },
            default: 0,
        },
    },
}, { timestamps: true });

// Middleware para validar stock y ofertas
productSchema.pre('save', function (next) {
    if (this.stock === 0 && this.sale.active) {
        throw new Error('Un producto sin stock no puede estar en oferta.');
    }
    if (!this.sale.active) {
        this.sale.discount = 0;
    }
    next();
});

// Índices
productSchema.index({ name: 1 });
productSchema.index({ category: 1 }); // Índice para categoría
productSchema.index({ collection: 1 }); 
productSchema.index({ 'sale.active': 1 });

// Ocultar campos internos
productSchema.set('toJSON', {
    transform: (doc, ret) => {
        delete ret.__v;
        return ret;
    },
});

export const Product = model('Product', productSchema);
