import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBarMenu = ({ text, pic, path }) =>{
  
  return(
    <NavLink to={path} className="link">
      <div style={{ 
              justifyContent: 'left', 
              alignItems:'left', 
              backgroundColor: "#edeeee", 
              color:'#000', 
              marginBottom:'20px',
              display: 'flex',
              flexDirection: 'row',
              width: '250px',
              fontSize: '15px',
              fontWeight: 'normal',
              cursor: 'pointer',
              hover: { backgroundColor: '#0d9b48' }
              }}
              >
          <div style={{ marginRight: "20px" }}><img src={pic} alt="pic" /></div>
          <div color="#000" fontSize="20px" marginLeft="10px" justifyContent="center" alignItems="left">
            {text}
          </div>
      </div>
    </NavLink>
  )

}

export default SideBarMenu;