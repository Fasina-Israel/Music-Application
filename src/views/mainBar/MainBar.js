import React, {useState} from 'react';
import SideBar from '../sideBar/SideBar'
import { Outlet } from 'react-router-dom';
import MyMusic from '../pages/myMusic/MyMusic';
import './mainbar.css';
import NowPlaying from '../pages/nowPlaying/NowPlaying';
import PlayList from '../pages/playList/PlayList';
import RecentPlays from '../pages/recentPlays/RecentPlays';

const MainBar = () => {
    const [ status, setStatus ] = useState('music')
  return (
    <>
    <div className="mainbar-container" style={{ display: 'flex', flexDirection: 'row', width: '100vw', height: '100vh'}}>
    <SideBar setStatus={setStatus}/>
    <div className="outlet" 
          style={{ 
            backgroundColor: '#fff', 
            padding: '0px 0px', 
            height: '100vh', 
            width: '100%' 
            }}
            >
            <Outlet status={status}/>
            
    </div>
    
   
    </div>
    </>
  )
}

export default MainBar