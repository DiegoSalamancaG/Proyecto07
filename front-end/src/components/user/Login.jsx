import { useState, useContext } from 'react';
import { UserContext } from '../../context/user/userContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Login = () => {
    const login = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        
        try {
            await login({email, password});
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    }


    return (
        <div className="container-login">
            <h2>Iniciar Sesión</h2>

            <div className='form-container'>
                <form onSubmit={handleLogin}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input 
                            type="email" 
                            className="form-email" 
                            id="email" 
                            name="email"
                            placeholder='Ingresa tu email'
                            value={email} 
                            onChange={(e)=>{setEmail(e.target.value)}} 
                            required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input 
                            type="password" 
                            className="form-password" 
                            id="password" 
                            name="password"
                            placeholder='Ingresa tu contraseña'
                            value={password} 
                            onChange={(e)=>{setPassword(e.target.value)}}
                            required/>
                    </div>
                    <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                </form>
            </div>
            <div>
                {error && <p>{error}</p>}
            </div>
            <Link to="/register">Register</Link>
        </div>
    )
}