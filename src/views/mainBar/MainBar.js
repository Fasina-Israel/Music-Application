import React from 'react'
import SideBar from '../sideBar/SideBar'
import { Outlet } from 'react-router-dom';

const MainBar = () => {
  return (
    <>
    <SideBar/>
    <Outlet />
    </>
  )
}

export default MainBar