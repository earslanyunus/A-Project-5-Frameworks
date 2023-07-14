/* @refresh reload */
import { render } from 'solid-js/web'
import { Route, Router, Routes } from "@solidjs/router";


import './index.css'
import App from './App'

const root = document.getElementById('root')

render(() => (
    <Router>
        <Routes>
            <Route path={'/'} component={App} />
        </Routes>
        </Router>


), root)
