import { useState } from 'react'
import Header from './component/Header/Header';
import Footer from './component/Footer/Footer';
import { Outlet } from "react-router-dom"
import { GlobalStyle } from './utils/style/GlobalStyle';

import './App.css'

function App() {
  
  return (
    <>
      <GlobalStyle />
      <Header/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
