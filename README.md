# 🛒 Aplicación Ecommerce

Una aplicación web desarrollada con [React](https://reactjs.org/) y [Vite](https://vitejs.dev/). Este proyecto sirve como base para construir interfaces modernas, rápidas y modulares utilizando las últimas herramientas del ecosistema JavaScript.

## ✨ Estado del Proyecto

Este proyecto está en constante mejora. Se están añadiendo funcionalidades como inicio de sesión, carrito de compras, optimización del rendimiento y una mejor experiencia de usuario.

### 🔮 Futuras Actualizaciones

- Panel de administración
- Filtros avanzados para búsqueda de productos
- Integración de pasarelas de pago
- Perfiles de usuario (cliente/admin) con inicio de sesión

## 🚀 Tecnologías Usadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/)
- [MongoDB](https://www.mongodb.com/)
- [Postman](https://www.postman.com/)
- CSS
- [Axios](https://axios-http.com/)

## 🛠 Instalación

Clona el repositorio:

```bash
git clone https://github.com/DiegoSalamancaG/Proyecto07
cd Proyecto07
```

Este proyecto incluye tanto el frontend como el backend en carpetas separadas. Ambos son totalmente funcionales. También puedes utilizar la [FakeStoreAPI](https://fakestoreapi.com/) para pruebas rápidas en el frontend.

### Instalación del Frontend

```bash
cd front-end
npm install
npm run dev
```

Abre tu navegador en: `http://localhost:5173`

## 🌐 Despliegue

Puedes desplegar esta aplicación fácilmente en plataformas como [Vercel](https://vercel.com/).

### Instalación del Backend

```bash
cd back-end
npm install
```
Configura tus variables de entorno en un archivo `.env`. Asegúrate de incluir datos como la URI de conexión a MongoDB y claves necesarias.

Ejemplo básico de `.env`:

```
PORT=5000
MONGODB_URL=mongodb+srv://usuario:contraseña@cluster.mongodb.net/nombreDB
SECRET_KEY=tu_clave_secreta
```

Luego ejecuta el servidor:

```bash
npm run dev
```

El backend estará corriendo por defecto en: `http://localhost:5000`

## 📄 Licencia

Este proyecto está licenciado bajo la MIT License.
