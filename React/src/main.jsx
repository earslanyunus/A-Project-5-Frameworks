import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MoviesPage from './view/MoviesPage.jsx'
import DetailLayout from './view/DetailLayout.jsx'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
import Detail_movie from "./view/Detail_movie.jsx";
import Detail_person from "./view/Detail_person.jsx";
import Detail_series from "./view/Detail_series.jsx";
import { SearchPage } from './view/SearchPage.jsx'

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
      },
      {
        path:'series/:id',
        element:<Detail_series/>
      }
    ]
  },
  {
    path:'search/:category/:text',
    element:<SearchPage/>
  }

])



ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
)
