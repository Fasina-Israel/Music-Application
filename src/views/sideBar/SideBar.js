import React from 'react'
import { useState } from 'react'
import './sideBar.css'
import list from './../../assets/List.svg'
import products from './../../assets/products.svg'
import settings from './../../assets/settings.svg'
import logout from './../../assets/logout.svg'
import home from './../../assets/Home.svg'
import SideBarMenu from './SideBarMenu'
import {CiSearch} from  "react-icons/ci";

const SideBar = ({setStatus}) => {

    const [size, setSize] = useState(300)
    const header = {
        height: "40px",
        width: "200px",
        color: "#000",
        fontFamily: 'Roboto',
        fontSize: "40px",
        alignItems: " left",
        justifyContents: "left",
        margin: "20px",
        display: `${size === 300 ? "hidden" : size === 100}px`
    }

    const Search =()=>{
        return(
            <>
                <input className="search" onChange=""  value="" name="" placeholder="Search" />
                <img src={CiSearch} alt=""/>
            </>
        )
    }

    return (
            <>
            <div className="containers">
                <div style={header} className="header">
                    {size === 300 ? <Search/>: ""}
                </div>
                <div className="sidebar">
                    <SideBarMenu text={size === 300 ? "My music" : " "} pic={home} path="./my-music" />
                    <SideBarMenu text={size === 300 ? "Recent plays" : " "} pic={list} path="./recent-Plays" />
                    <SideBarMenu text={size === 300 ? "Now playing" : " "} pic={products} path="./now-playing" />
                    <SideBarMenu text={size === 300 ? "Playlists" : " "} pic={settings} path="./playlist" />
                    <SideBarMenu text={size === 300 ? "Logout" : " "} pic={logout} path="./logout" />   
                    <hr className= "sideBar-line"/>
                    <SideBarMenu style={{ marginTop: '100px'}} text={size === 300 ? "Settings" : " "} pic={settings} path="./settings"/> 
                     
                </div>
        </div>
        </>
    )
}

export default SideBar;
