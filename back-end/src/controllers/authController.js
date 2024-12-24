import { loginService } from "../services/auth/login.js";
import { registerUser } from "../services/auth/register.js"
import { formatUserData } from "../utils/format/formatUser.js";

export const register = async(req, res, next) => {
    try {
        console.log(req.body)
        const userData = formatUserData(req.body)

        const user = await registerUser(userData);
        res.status(201).json({
            message: "Usuario Creado con éxito",
            status: 201,
            user: {
                id: user._id,
                name: user.nombre,
                email: user.correo
            },
        });
    } catch (error) {
        console.error('Error Interno en register', error)
        next(error);
    }
}

export const login = async(req, res, next) => {
    try {
        const { correo, password } = req.body;
        const { user, token } = await loginService(correo, password);

        res.status(202).json({
            message: "Usuario Logueado con éxito",
            status: 202,
            user: {
                id: user._id,
                name: user.nombre,
                email: user.correo
            },
            token
        })
    } catch (error) {
        console.error(error)
        next(error)
    }
}