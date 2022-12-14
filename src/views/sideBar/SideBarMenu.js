import React, {useState} from 'react';

const SideBarMenu = ({ text, pic }) =>{
  return(
    <div style={{ justifyContent: 'left', 
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
  )

}

export default SideBarMenu;