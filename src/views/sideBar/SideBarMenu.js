import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBarMenu = ({ text, pic, path }) =>{
  
  return(
    <NavLink to={path} className="nav-link">
      <div className='link'>
          <div style={{ marginRight: "20px" }}><img src={pic} alt="pic" /></div>
          <div color="#000" fontSize="20px" marginLeft="10px" justifyContent="center" alignItems="left">
            {text}
          </div>
      </div>
    </NavLink>
  )

}

export default SideBarMenu;