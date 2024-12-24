import axios from "axios";

//const API_URL = "http://localhost:3000/api";
const API_URL = "https://reqres.in/api";

export const apiClient = axios.create({
  baseURL: API_URL,
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    }, (error) => { return Promise.reject(error) }
);

export const registerUser = async(userData) => {
    try {
        const { data } = await apiClient.post('/user', userData)
        return data //Devuelve el id y token
    } catch (error) {
        throw new Error(`No pudimos registrar al usuario. ${error}`)
    }
}

export const authenticate = async(credentials) => {
    try {
        const { data } = await apiClient.post('/user/login', credentials)
        return data //Vuelve solo el token y datos del usuario
    } catch (error) {
        throw new Error(`Credenciales Invalidas. ${error}`);
    }
}