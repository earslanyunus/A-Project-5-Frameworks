import React from 'react'
import Navbar from '../components/common/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer'

const DetailLayout = () => {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>

    )
}

export default DetailLayout