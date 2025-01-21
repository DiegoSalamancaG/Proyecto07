export const verifyAdmin = (req, res, next) => {
    try {
        // Verificar si el usuario está autenticado
        if (!req.user) {
            return res
                .status(401)
                .json({ error: "No autenticado: inicie sesión para continuar" });
        }
  
        // Verificar si el usuario tiene el rol de administrador
        if (req.user.role !== "admin") {
            return res
                .status(403)
                .json({ error: "Acceso denegado: se requieren permisos de administrador" });
        }
  
        // Si todo está bien, continua
        next();
    } catch (error) {
        console.error("Error en el middleware de verificación de administrador:", error);
        res.status(500).json({ error: "Error inesperado en la verificación de administrador" });
    }
  };
  