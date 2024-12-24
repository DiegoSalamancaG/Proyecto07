import { FormatError } from "../../errors/TypeErrors.js";

export const formatUserData = (data, imagen) => {
    try {
        const {
          nombre,
          correo,
          password
        } = data;
   
        return {
          nombre,
          correo,
          password
        };
   
        
    } catch (error) {
        throw new FormatError(`Error al formatear al usuario`, error)
    }
}