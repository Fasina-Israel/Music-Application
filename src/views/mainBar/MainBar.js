import React from 'react'
import SideBar from '../sideBar/SideBar'
import { Outlet } from 'react-router-dom';

const MainBar = () => {
  return (
    <>
    <div style={{ display: 'flex', flexDirection: 'row'}}>
    <SideBar/>
    <div className="outlet" 
          style={{ 
            backgroundColor: '#edeeee', 
            padding: '0px 5px', 
            height: '100vh', 
            width: '100%' 
            }}
            >
            <Outlet />
    </div>
    </div>
    </>
  )
}

export default MainBar