import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Register from './pages/Register'
import Login from './pages/Login'
import Todo from './pages/Todo'
import NewTodo from './pages/NewTodo'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/todo" exact component={Todo}></Route>
                <Route path="/todo/new" component={NewTodo}></Route>
            </Switch>
        </BrowserRouter>
    )
}