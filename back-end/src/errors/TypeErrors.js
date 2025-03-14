import { CustomError } from "./CustomError.js";

export class ValidationError extends CustomError {
  constructor(message, details) {
    super(message || "Error de Validación", 400, details);
  }
}

export class DataBaseError extends CustomError {
  constructor(message, details) {
    super(message || "Error en la comunicación con la Base de datos", 500, details);
  }
}

export class NotFoundError extends CustomError {
  constructor(message, details, entity) {
    super(message || `${entity} No Encontrado`, 404, details);
  }
}

export class UploadFilesError extends CustomError {
    constructor(message, details) {
        super(message || "Error al subir archivos", 500, details);
    }
}

export class AuthError extends CustomError {
    constructor(message, details) {
        super(message || "Error al manipular datos de autenticación",  500, details)
    }
}

export class FileServiceError extends CustomError {
    constructor(message, details) {
        super(message || `Error al manipular o generar los archivos`, 500, details)
    }
}

export class FormatError extends CustomError {
    constructor(message, details) {
        super(message || 'Error al formatear los datos', 500, details)
    }
}

export class MailServiceError extends CustomError {
    constructor(message, details) {
        super(message || 'Error en el servicio de email', 500, details)  
    }
}

export class InternalServerError extends CustomError {
  constructor(message, details) {
    super(message || "Error interno del Servidor", 500, details);
  }
}
