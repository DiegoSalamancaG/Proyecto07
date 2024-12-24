import mongoose from "mongoose";

const { Schema, model} = mongoose;

const userSchema = new Schema(
    {
        nombre: {type: String, required: true, trim: true},
        correo: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            match: [/^\S+@\S+\.\S+$/, "Correo no válido"],
        },
        password: { type: String, required: true },
        resetPasswordToken: { type: String, default: null },
        resetPasswordExpires: { type: Date, default: null }
    },
    { timestamps: true }    
)

export const User = model("User", userSchema);