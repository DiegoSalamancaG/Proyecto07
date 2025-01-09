export const verifyAdmin = (req, res, next) => {
  try {
      // Verificar que el usuario esté autenticado y tenga el rol de administrador
      if (!req.user || req.user.role !== "admin") {
          return res
              .status(403)
              .json({ error: "Acceso denegado: requiere permisos de administrador" });
      }

      // Si el usuario es administrador, continúa con la solicitud
      next();
  } catch (error) {
      next(error);
  }
};

  