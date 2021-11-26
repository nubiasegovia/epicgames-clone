import styled from "styled-components";
import { useState } from 'react';
import axios from 'axios';
import EpicGamesWhiteLogo from "../../../assets/img/epicgames-whitelogo.png"

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        
        const login = {
            email: email,
            password: password
        }

        axios.post('/auth/login', login)
        .then(response => {
            const token = response.data.token;
            localStorage.setItem('token', token)
        })
    }

    return (
        <div className='wrapper'>
            <img src={EpicGamesWhiteLogo} alt="Epic Games logo" />
            <h3>Fazer login com uma conta da Epic Games</h3>
            <div className="login-container">
                <form className='login-form' onSubmit={handleSubmit}>

                    <input type='text' placeholder='Endereço de e-mail' required onChange={event => setEmail(event.target.value)}/>

                    <input type='password' placeholder='Senha' onChange={event => setPassword(event.target.value)} />

                    <div className='login-ok'>
                        <a href='!#'>
                            <span>Esqueceu sua senha</span>
                        </a>
                        <input type='submit' value='Entre na sua conta agora' />
                    </div>
                </form>
                <div className='creat-account'>
                    <span>Não tem uma conta da Epic Games?</span>
                    <a className='btn-create' href='/register'>Cadastrar</a>
                </div>
            </div>
        </div>
    )


}

export default Login; 