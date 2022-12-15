import React, {useState} from 'react'
import './myMusic.css'
import Songs from './song/Songs'


const MyMusic = () => {

  const [status, setStatus ] = useState('songs')
  return (
    <div className="container">
      <div className="title"> My Music</div>
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