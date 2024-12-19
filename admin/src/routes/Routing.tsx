import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Category, Dashboard, Orders, Products } from '../screen'

export function Routing() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/category' element={<Category/>}/>
    </Routes>
    </>
  )
}

 