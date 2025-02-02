import React from 'react'
import Headers from './Header.jsx'
import Footer from './Footer'
import Hero from '../Pages/Hero'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div>
      <Headers />
      <Outlet />
      <Footer/>
      
    </div>
  )
}

export default Body
