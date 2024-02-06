import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <>
          <Header className="sticky top-0"/>
          <Outlet />
          <Footer />
    </>
  )
}

export default Layout
