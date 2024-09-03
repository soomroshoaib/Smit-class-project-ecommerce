
import React from 'react'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Dashboard from "../src/pages/admin/dashboard"
import Error from './pages/nopage/Error'

const App = () => {
  return (
    <div>
     <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Order' element={<Order />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/*' element={<Error />} />
        
      </Routes>
     </Router>
    </div>
  )
}

export default App
