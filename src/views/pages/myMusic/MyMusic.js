import React, {useState} from 'react'
import Songs from './song/Songs'
import './myMusic.css';


const MyMusic = () => {
  const [status, setStatus ] = useState('songs')
  return (
    <div className="music-container">
      <div className="title"> My music</div>
      <div className="header">
        <div className="header-text" onClick={()=>setStatus('songs')}>
          Songs
        </div>
        <div className="header-text" onClick={()=>setStatus('artists')}>
          Artists
        </div>
        <div className="header-text" onClick={()=>setStatus('albums')}>
          Albums
        </div>
      </div>
      <div className="line">
          <hr />
      </div>
      {status === "songs" ? <Songs />:''}
      
    </div>
  )
}

export default MyMusic