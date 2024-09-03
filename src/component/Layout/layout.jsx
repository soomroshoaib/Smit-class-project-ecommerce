import React from 'react'
import Navber from '../Navbar/Navber'
import Footer from '../footer/footer'

const Layout = ({children}) => {
  return (
    <div>
        <Navber/>
        <div className='content'>
            {children}
        </div>
    <Footer />
    </div>
  )
}

export default Layout
