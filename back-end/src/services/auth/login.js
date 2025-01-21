import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import { AuthError } from "../../errors/TypeErrors.js";
import { comparePassword } from "../../utils/auth/comparePassword.js";
import { User } from '../../models/user.js'

dotenv.config();

export const loginService = async (email, password) => {
    try {
        // Buscar usuario por correo electrónico
        const user = await User.findOne({ email });

        // Comparar contraseña
        const passwordMatch = user ? await comparePassword(password, user.password) : false;

        // Validar credenciales
        if (!user || !passwordMatch) {
            throw new AuthError(`Credencial inválida`);
        }

        // Generar token JWT
        const token = jwt.sign({ userId: user._id, role:user.role }, process.env.SECRET_KEY, { expiresIn: '1h' , algorithm: 'HS256'});
        console.log('Token generado:', token);
        console.log('Rol generado:', user.role);

        return { user, token };
    } catch (error) {
        console.error('Error en loginService:', error);
        throw new AuthError(`Login no autorizado`, error);
    }
};
