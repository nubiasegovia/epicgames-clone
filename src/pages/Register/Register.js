import { useState } from 'react';
import axios from 'axios';

function Register () {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: name,
            email: email,
            nickname: nickname,
            password: password,
            passwordConfirmation: passwordConfirmation
        }
        
        axios.post('/user/register', user)
        .then(response => console.log(response))
    }

    return(

        <div className='Register'>
            <div className='container'>
                <h2>Cadastrar</h2>

                <form className='register-form' onSubmit={handleSubmit}>
                    <label>Nome</label>
                    <input type='text' required onChange={event => setName(event.target.value)}/>

                    <label>Nome de exibição</label>
                    <input type='text' required onChange={event => setNickname(event.target.value)} />

                    <label>Endereço de E-mail</label>
                    <input type='email' required onChange={event => setEmail(event.target.value)} />

                    <label>Senha</label>
                    <input type='password' required onChange={event => setPassword(event.target.value)} />

                    <label>Cofirmar senha</label>
                    <input type='password' required onChange={event => setPassword(event.target.value)} />

                    <div className='terms'>
                        <input type='checkbox' />
                        <label>Quero receber notícias, pesquisas e ofertas especiais da Epic Games</label>
                        
                        <input type='checkbox' required />
                        <label>Eu li e concordo com os <a href='https://www.epicgames.com/site/pt-BR/tos?lang=pt-BR'>termos de serviço</a></label>
                    </div>
                    <div className='register-btn'>
                        <input type='submit' value='Continuar' />
                    </div>
                </form>

                <a href='https://www.epicgames.com/site/pt-BR/privacypolicy?lang=pt-BR'>Política de Privacidade</a>

                <div className='return'>
                    <p>Possui uma conta da Epic Games? <a href='/login'>Entrar</a></p>
                    <p>Voltar para a <a href='/'>loja</a></p>
                </div>
            </div>
        </div>

    )

}
