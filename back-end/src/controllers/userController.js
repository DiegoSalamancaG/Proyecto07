import { NotFoundError, ValidationError } from "../errors/TypeErrors.js";
import { User } from "../models/user.js"
import { updateUserImageService, updateUserService } from "../services/user/updateUser.js";

export const getAllUsers = async(req, res, next) => {
    try {
        const users = await User.find().select('-password');

        res.status(200).json({
            message: 'Usuarios encontrados con éxito',
            status: 200,
            data: users
        })
    } catch (error) {
        next(error)
    }
}

export const getUserById = async(req, res, next) => {
    try {
        const { id } = req.params;

        const user = await User.findOne({ _id: id, active:true}).select('-password');
        if(!user) throw new NotFoundError('El usuario no existe');

        res.status(200).json({
          message: "Usuario encontrado con éxito",
          status: 200,
          data: user,
        });
    } catch (error) {
        next(error)
    }
}

export const updateUser = async(req, res, next) => {
    try {
        const { id } = req.params;
        const userData = req.body;
        const user = await updateUserService(id, userData);

        if(!user) throw new NotFoundError(`Usuario no encontrado`);

        res.status(201).json({
          message: "Usuario actualizado con éxito",
          status: 201,
          data: user,
        });
    } catch (error) {
        next(error)
    }
}

export const updateUserImage = async (req, res, next) => {
    try {
        const { id } = req.params;

        if(req.file){ 
            imageUrl = buildFileUrl(req, req.file.filename, 'usuarios')
        } else {
            throw new ValidationError('No se ha súbido ninguna imagen');
        };

        const user = await updateUserImageService(id, imageUrl);
        if (!user) throw new NotFoundError(`Usuario no encontrado`);

        res.status(201).json({
          message: "Usuario actualizado con éxito",
          status: 201,
          data: user,
        });

    } catch (error) {
        next(error);
    }
}

export const deleteUser = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndUpdate({ _id: id, active: true }, { active: false }, { new: true }).select('-password -activo');

        if(!user) throw new NotFoundError(`Usuario no encontrado`);

        res.status(200).json({
          message: "Usuario eliminado con éxito",
          status: 200,
          data: user,
        });
    } catch (error) {
        next(error)
    }
}

export const restoreUser = async(req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findOneAndUpdate({ _id: id, active: false }, {active: true},{ new: true }).select('-password -activo');

        if(!user) throw new NotFoundError(`Usuario no encontrado`);

        res.status(200).json({
          message: "Usuario restaurado con éxito",
          status: 200,
          data: user,
        });
    } catch (error) {
        next(error)
    }
}