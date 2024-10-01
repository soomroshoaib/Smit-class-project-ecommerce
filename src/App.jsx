
import React from 'react'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Order from './pages/order/Order'
import Cart from './pages/cart/Cart'
import Dashboard from "../src/pages/admin/dashboard"
import Error from './pages/nopage/Error';
import MyState from './context/data/myState'
import Productinfo from './pages/Productinfo/Productinfo'


const App = () => {
  return (
    <div>
    
      <MyState>
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order' element={<Order />} />
        <Route path='/Cart' element={<Cart />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/productinfo/:id' element={<Productinfo />} />
        <Route path='/*' element={<Error />} />
        
        
      </Routes>
    
     </MyState>
    </div>
  )
}

export default App
