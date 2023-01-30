import React from 'react'
import { Outlet } from 'react-router-dom'
import {NavBar} from "../components"
const RootLayout = () => {
  return (
    <>
    <NavBar />
    <Outlet/>
    </>
    
    )
}

export default RootLayout