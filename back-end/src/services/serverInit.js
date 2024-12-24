import { connectDB } from "../config/db.js";
import { InternalServerError } from "../errors/TypeErrors.js";

export const serverInit = async(app, port) => {
    try {
        console.log(`Verificando conexión con Mongo`);
        await connectDB()
        app.listen(port, async() => {
            console.log(`Servidor Corriendo en el puerto ${port}`);
            console.log(`http://localhost:${port}/api/users`)
            console.log(`http://localhost:${port}/api/products`)
        });
    } catch (error) {
        throw new InternalServerError(`Error al inicializar el Servidor en el puerto ${port}`, error);
    }
}