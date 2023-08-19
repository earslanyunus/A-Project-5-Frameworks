import '@builder.io/qwik/qwikloader.js'

import { render } from '@builder.io/qwik'
import { App } from './app.jsx'
import './index.css'
import page from 'page'
console.log(page)

render(document.getElementById('app'), page())
