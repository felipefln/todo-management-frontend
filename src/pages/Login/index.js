import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import trelloLogo from '../../assets/trello-logo.png'

export default function Login() {
    const [author, setAuthor] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    async function handleLogin(e) {
        e.preventDefault();

        const data = {
            author,
            email,
            password
        }

        try {
            const response = await api.post('login', data)

            if (response.data.accesstoken) {
                history.push('/todo')

            } else {
                setAuthor('')
                setEmail('')
                setPassword('')
                alert(`Falha no login tente novamente`)
            }

        } catch (err) {
            alert(`Falha no login tente novamente`)
        }

    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={trelloLogo} alt="Todo Trello logo" />

                <form onSubmit={handleLogin}>

                    <input
                        required
                        placeholder="Author"
                        style={{ marginBottom: 50 }}
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />

                    <input
                        required
                        placeholder="Seu E-mail"
                        value={email}
                        type="e-mail"
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        required
                        placeholder="Sua Senha"
                        value={password}
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={30} color="1874CD" />
                        Não tenho cadastro
                    </Link>

                </form>
            </section>
        </div>
    )
}