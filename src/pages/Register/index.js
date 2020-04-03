import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import api from '../../services/api'

export default function Register() {
    const [author, setAuthor] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            author,
            email,
            password,
        }

        try {
            const response = await api.post('register', data)

            localStorage.setItem('userName', author)

            history.push('/')

        } catch {
            alert(`Erro, tente novamente`)
        }
    }
    return (
        <div className="register-container">
            <div className="content">
                <section>

                    <h1>Cadastrar login</h1>
                    <p>Faça seu cadastro, entre na plataforma e gerencie suas tarefas.</p>

                </section>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        placeholder="Password"
                        value={password}
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                    />

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}