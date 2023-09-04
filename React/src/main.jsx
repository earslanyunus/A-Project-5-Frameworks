import React, { Children } from 'react'
import { supabase } from './supabase/client.js'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MoviesPage from './view/MoviesPage.jsx'
import DetailLayout from './view/DetailLayout.jsx'
import LoginPage from './view/LoginPage.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import Signup from "./view/Signup.jsx";
import Detail_movie from "./view/Detail_movie.jsx";
import Detail_person from "./view/Detail_person.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
   
  },
  {
    path:'detail',
    element: <DetailLayout/>,
    children:[
      {
        path:'movies',
        element: <MoviesPage/>,
      },
      {
      path:'movie/:id',
        element:<Detail_movie/>
      },
      {
        path:'person/:id',
        element:<Detail_person/>
      }
    ]
  },
  {
    path:'login',
    element:<LoginPage/>
  },
  {
    path:'signup',
    element:<Signup/>
  },

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
)
