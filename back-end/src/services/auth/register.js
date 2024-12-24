import { AuthError } from "../../errors/TypeErrors.js";
import { User } from "../../models/user.js";
import { hashPassword } from "../../utils/auth/hashPassword.js"

export const registerUser = async({nombre, correo, password}) => {
    try {
        const hashedPassword = await hashPassword(password);

        const user = await User.create({
            nombre,
            correo,
            password: hashedPassword
        });

        return user
    } catch (error) {
        throw new AuthError('No pudimos registrar los datos del Usuario', error)
    }
} 