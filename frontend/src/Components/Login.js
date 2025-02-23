import React, {useState} from 'react';
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            user:user,
            password:password,
            loggedin: true,
        })
        );
    };

    return (
        <div className='login'>
            <form className='login__form' onSubmit={(e) => handleSubmit(e)}>
                <h1>Login Here</h1>
                <input
                    type="user"
                    placeholder="Usuário"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Senha"
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit' className='submit__btn'>Submit</button>
            </form>
        </div>
    )
}

export default Login;