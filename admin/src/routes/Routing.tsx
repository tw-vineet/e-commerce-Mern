import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Category, Customers, Dashboard, Inbox, Orders, Products, Reports } from '../screen'

export function Routing() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/inbox' element={<Inbox/>}/>
        <Route path='/reports' element={<Reports/>}/>
        <Route path='/customers' element={<Customers/>}/>
    </Routes>
    </>
  )
}

 