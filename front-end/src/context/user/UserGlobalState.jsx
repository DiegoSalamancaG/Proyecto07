import { useCallback, useEffect, useReducer } from 'react';
import { userReducer } from './userReducer';
import { UserContext } from './userContext';
import { registerUser, authenticate } from "../../services/userServices.js";


const estadoInicial = {
    user: null,
    token: null
}

export const UserProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(userReducer, estadoInicial);

    const fetchUser = useCallback(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        const token = localStorage.getItem('token');

        if(user && token) {
            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: { user, token }
            })
        }
    },[]);

    
    useEffect(() => {
        fetchUser();
    }, [fetchUser]);

    const register= async (user) => {
        try {
            const data= await registerUser(user);
            const { user, token } = data;

            if(user && token) {
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', token);

                dispatch({
                    type: 'REGISTER_SUCCESS',
                    payload: { user, token }
                })
            }else{
                throw new Error('Token o usuario no recibidos',error);
            } 
        }catch (error) 
        {
            throw new Error(`Error al registrar al usuario. Error: ${error}`)
        }
    }

    const login = async (credentials) => {
        try {
            const data = await authenticate(credentials);
            const { user, token } = data;

            if(user && token) {
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', token);

                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload: { user, token }
                })
            }else{
                throw new Error('Token o usuario no recibidos',error);
            }
        }catch (error) {
            throw new Error(`Error al autenticar al usuario. Error: ${error}`)
        }
    }

    const logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('token');

        dispatch({ type: 'LOGOUT' });
    }

    return (
        <UserContext.Provider 
        value={{ 
            user: state.user, 
            token: state.token, 
            register, 
            login, 
            logout }}>
            { children }
        </UserContext.Provider>
    )

}
