import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "El nombre es obligatorio"],
      trim: true,
      minlength: [3, "El nombre debe tener al menos 3 caracteres"],
      maxlength: [50, "El nombre no puede superar los 50 caracteres"],
    },
    email: {
      type: String,
      required: [true, "El correo electrónico es obligatorio"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Correo no válido"],
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
      minlength: [8, "La contraseña debe tener al menos 8 caracteres"],
    },
    active: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: {
        values: ['user', 'admin'],
        message: "El rol debe ser 'user' o 'admin'",
      },
      default: 'user',
    },
    resetPasswordToken: {
      type: String,
      default: null,
    },
    resetPasswordExpires: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);

// Middleware para manejar errores de índice único
userSchema.post("save", function (error, doc, next) {
  if (error.name === "MongoServerError" && error.code === 11000) {
    next(new Error("El correo electrónico ya está registrado."));
  } else {
    next(error);
  }
});

// Método de eliminación lógica
userSchema.methods.softDelete = async function () {
  if (!this.active) {
    throw new Error("El usuario ya está desactivado");
  }
  this.active = false;
  await this.save();
};

// Índices
userSchema.index({ active: 1, email: 1 });

// Excluir campos sensibles al convertir a JSON
userSchema.set('toJSON', {
  transform: (doc, ret) => {
    delete ret.password;
    delete ret.__v;
    return ret;
  },
});

// Hook para filtrar usuarios inactivos en consultas
userSchema.pre(/^find/, function () {
  this.where({ active: true });
});

export const User = model("User", userSchema);
