import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import './style.css'
import App from './App.vue'
import Home from '../src/views/Home.vue'
import DetailMovie from '../src/views/DetailMovie.vue'
import DetailPerson from '../src/views/DetailPerson.vue'
import DetailSeries from '../src/views/DetailSeries.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/detail/movie/:id', component:DetailMovie  },
    { path: '/detail/person/:id', component:DetailPerson  },
    { path: '/detail/tv/:id', component:DetailSeries  },

  ]

  const router = createRouter({
    history: createWebHistory(),
    routes, 
  })


  const app = createApp(App)

  app.use(router)
  
  app.mount('#app')
