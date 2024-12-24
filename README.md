# Proyecto 07:

Este proyecto es una aplicación Backend desarrollado en Node.js con características como registro de usuarios, inicio de sesión con JWT y manejo de roles. Ademas cuenta con una aplicación Frontend, la cual, 

---

## Características

- Registro de usuarios, con sus respectivas validaciones.
- Inicio de sesión con autenticación(JWT).
- Protección de rutas.
- Documentación de la API con Swagger.

---

## Tecnologías Utilizadas

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB, utilizando Mongoose
- **Herramientas:**
  - bcrypt para encriptar contraseñas
  - jsonwebtoken para manejo de tokens
  - Postman para pruebas

- **Frontend:**
  - Vite
- **Herramientas:**
  - useContext // useReducer, para manejar los carros de compra y inicio de sesiones
  - React-Router-Dom, para el manejo de rutas
  - react-error-boundary, para el manejo de errores
  

---

## Requisitos Previos

Antes de ejecutar este proyecto, asegúrate de tener instalado:

1. **Node.js**: [Descargar e instalar](https://nodejs.org/)
2. **MongoDB**: [Descargar e instalar](https://www.mongodb.com/try/download/community)
3. **PostManB**: [Descargar e instalar](https://www.postman.com/downloads/)

---

## Instalación

Sigue estos pasos para configurar el proyecto:

1. Clona este repositorio:

   ```bash
   git clone DiegoSalamancaG/Proyecto07

   ```

2. Entra en la carpeta del proyecto:

```bash
cd Proyecto07
```

3. Instalar dependencias en ambos proyectos, tanto en la carpeta "back-end" como en "front-end":

```bash
npm install
```

4. Configura las variables de entorno:
   Crea un archivo `.env` en la raíz del proyecto con los siguientes valores:

```bash back-end
MONGO_URL=
PORT=
SECRET_KEY=
MP_ACCESS_TOKEN=
```
Para el back end, debes confirgurar una conexion a mongoDB, proveer un puerto, ademas una clave secreta. Ademas, token de acceso el cual viene de tus credenciales de prueba de MercadoPago Dev

```bash front-end
VITE_MERCADOPAGO_PUBLIC_KEY=
```
Para el front end, debes proveer la llave publica, proveniente de tus credenciales de prueba de MercadoPago Dev


5.1. Inicia el servidor:

```bash
npm run dev
```
5.2. Inicia la aplicacion:

```bash
npm run dev
```
