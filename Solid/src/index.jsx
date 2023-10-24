/* @refresh reload */
import { render } from 'solid-js/web'
import { Route, Router, Routes } from "@solidjs/router";


import './index.css'
import App from './App'
import Detaillayout from './view/DetailLayout';
import Detail_movie from './view/Detail_movie';
import Detail_person from './view/Detail_person';

const root = document.getElementById('root')

render(() => (
    <Router>
        <Routes>
            <Route path={'/'} component={App} />
            <Route path={'/detail'} component={Detaillayout} >
                    <Route path={'/movie/:id'} component={Detail_movie}/>
                    <Route path={'/person/:id'} component={Detail_person}/>

            </Route>
        </Routes>
        </Router>


), root)
