import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MoviesPage from './view/MoviesPage.jsx'
import DetailLayout from './view/DetailLayout.jsx'


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
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
