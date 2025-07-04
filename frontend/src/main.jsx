import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import App from './App.jsx'

import Wilderness from './view/Wilderness/Wilderness.jsx';
import MyGarden from './view/MyGarden/MyGarden.jsx';
import Profile from './view/Profile/Profile.jsx';

import HomePage from './view/HomePage/HomePage.jsx';
import Register from './view/Register/Register.jsx';
import Login from './view/Login/Login.jsx';
import NotFound from './view/NotFound/NotFound.jsx';
import Informations from './view/Informations/Informations.jsx';

const router = createBrowserRouter([
  {
    element: <App/>,
    children: [
      { path: "/", element: <HomePage />},
      { path: "/register", element: <Register />},
      { path: "/login", element:<Login />},
      { path: "/wilderness", element: <Wilderness />},
      { path: "/mygarden", element: <MyGarden />},
      { path: "/profile", element: <Profile />},
      { path: "/informations", element: <Informations />},
      { path: "*", element: <NotFound />}

    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
