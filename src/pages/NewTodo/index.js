import React, { useState } from 'react';

import './styles.css'
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

export default function NewTodo() {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [datestart, setDatestart] = useState('')
    const [dateend, setDateend] = useState('')
    const history = useHistory()

    async function handleNewTodo(e) {
        e.preventDefault();

        const data = {
            name,
            description,
            datestart,
            dateend
        }
        try {
            await api.post('todos', data)

            history.push('/todo')
        } catch (err) {
            alert(`Erro ao cadastrar nova task`)
        }
    }

    return (
        <div className="new-todo">
            <div className="content">
                <section>

                    <h1>Cadastrar nova task</h1>
                    <p>Descreva sua task detalhadamento juntamente com as data de inicio e de termino da task</p>

                    <Link to="/todo" className="back-link">
                        <FiArrowLeft size={16} color="1874CD" />
                        Voltar para Home
                        </Link>
                </section>
                <form onSubmit={handleNewTodo}>
                    <input
                        required
                        placeholder="Nome da Task"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <textarea
                        required
                        placeholder="Descrição"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />

                    <input
                        required
                        placeholder="Data Início"
                        value={datestart}
                        type="date"
                        onChange={e => setDatestart(e.target.value)}
                    />

                    <input
                        required
                        placeholder="Data Termino"
                        value={dateend}
                        type="date"
                        onChange={e => setDateend(e.target.value)}
                    />
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}