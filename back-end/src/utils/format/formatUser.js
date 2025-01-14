import { FormatError } from "../../errors/TypeErrors.js";

export const formatUserData = (data) => {
    try {
        const {
          name,
          email,
          password
        } = data;
   
        return {
          name,
          email,
          password
        };
   
        
    } catch (error) {
        throw new FormatError(`Error al formatear al usuario`, error)
    }
}