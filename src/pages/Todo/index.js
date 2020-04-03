import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiPower, FiTrash2 } from 'react-icons/fi'
import api from '../../services/api'
import './styles.css'


export default function Todo() {
    const [task, setTask] = useState([])
    const userName = localStorage.getItem('userName')
    const history = useHistory()

    useEffect(() => {
        api.get('todos', {

        }).then(response => {
            setTask(response.data)
        })
    }, [])

    async function handleDeleteTask(id) {
        try {
            await api.delete(`todos/${id}`)
            setTask(task.filter(t => t.id !== id))

        } catch (err) {
            alert(`Erro ao deletar essa task, tente novamente.`)
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push('/')
    }

    return (
        <div className="profile-container">
            <header>
                <span>Bem vindo(a), {userName}</span>
                <Link className="button" to="/todo/new">Cadastrar nova Task</Link>
                <button type="button" onClick={handleLogout}>
                    <FiPower size={18} color="#e02041"></FiPower>
                </button>
            </header>
            <h1>Tasks cadastradas</h1>
            <ul>
                {task.map(t => (
                    <li key={t.id}>
                        <strong>NOME:</strong>
                        <p>{t.name}</p>

                        <strong>DESCRIÇÃO:</strong>
                        <p>{t.description}</p>

                        <strong>DATA INICIO:</strong>
                        <p>{t.datestart}</p>

                        <strong>DATA TERMINO:</strong>

                        <p>{t.dateend}</p>

                        <button type="button" onClick={() => handleDeleteTask(t.id)}>
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}