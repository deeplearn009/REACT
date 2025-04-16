import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from '../pages/header/Header.jsx'
import Basket from '../pages/basket/Basket.jsx'
import Home from '../pages/home/Home.jsx'
const Router = () => {
  return (

    <BrowserRouter>
        <Header/>

        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/basket' element={<Basket/>}/>

        </Routes>

    </BrowserRouter>

  )
}

export default Router