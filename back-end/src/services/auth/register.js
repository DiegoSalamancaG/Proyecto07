import { AuthError } from "../../errors/TypeErrors.js";
import { User } from "../../models/user.js";
import { hashPassword } from "../../utils/auth/hashPassword.js";

export const registerUser = async(userData) => {
    try {
        const { name, email, password, role } = userData;

        // Validar datos
        if (!name || !email || !password) {
            return res.status(400).json({ 
                message: "Todos los campos son obligatorios", 
                status: 400 
            });
        }

        // Validar email repetido
        const existEmail = await User.findOne({ email });
        if (existEmail) {
            return res.status(409).json({ 
                message: "El correo electrónico ya está registrado", 
                status: 409 
            });
        }

        // Hash de la contraseña
        const hashedPassword = await hashPassword(password);

        // Crear usuario
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            role: role || "user",
        });

        // Guardar nuevo usuario
        await newUser.save();

        // Retornar el usuario creado sin la contraseña
        // res.status(201).json({
        //     message: "Usuario creado exitosamente",
        //     status: 201,
        //     data: { id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.role },
        // });
        
        // Devolver el usuario creado
        return newUser;

    } catch (error) {
        throw new AuthError("Error al crear nuevo usuario", error);
    }
};
