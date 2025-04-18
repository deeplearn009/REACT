import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../layout/Layout'
import Home from '../pages/home/Home'
import Contact from '../pages/contact/Contact'
import Blank from '../pages/blank/Blank'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout/>}>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Route>
            <Route path='*' element={<Blank/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router