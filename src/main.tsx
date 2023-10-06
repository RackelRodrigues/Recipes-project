import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import{RouterProvider, createBrowserRouter}from 'react-router-dom'
import  Bythename  from './pag1/Bythename'
import  Byletter  from './pag2/byletter'
import  {ByIngredients}  from './pag3/byingredients'
import ErrorPage from './errorpage.tsx'
import  App from './App'
import  Header from './header/header.jsx'



const router = createBrowserRouter ([
  {
    path:"/",
    element: <Header/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/by-name",
    element: <Bythename/>,
    errorElement: <ErrorPage/>
  },
  { path: "/by-letter",
    element: <Byletter/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/By-ingredients",
    element: <ByIngredients/>,
    errorElement: <ErrorPage/>
  },
  
  
]);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
