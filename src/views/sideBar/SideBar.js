import React from 'react'
import { useState } from 'react'
import './SideBar.css'
import list from './../../assets/List.svg'
import products from './../../assets/products.svg'
import settings from './../../assets/settings.svg'
import logout from './../../assets/logout.svg'
import home from './../../assets/Home.svg'
import SideBarMenu from './SideBarMenu'
import switches from './../../assets/switches.svg'
import {CiSearch} from  "react-icons/ci";

const SideBar = () => {

    const [size, setSize] = useState(300)

    const handleClick = () => {
        size === 300 ? setSize(130) : setSize(300)
        console.log("reduce the size");
    }

    const contain ={
        background: "#e6e6e6",
        borderLine: "black"
    }

    const divStyle = {
        background: "#edeeee",
        width: `${size}px`,
        height: '100vh',
        zIndex: '-1',
        
    }

    const header = {
        height: "40px",
        width: "30px",
        color: "#000",
        fontFamily: 'Roboto',
        fontSize: "40px",
        alignItems: " left",
        justifyContents: "left",
        marginTop: "0px",
        marginBottom: "40px",
        marginLeft: "20px",
        display: `${size === 300 ? "hidden" : size === 100}px`
    }

    const btn = {
        width: "30px",
        height: "30px",
        borderRadius: "100%",
        zIndex: "2",
        position: "absolute",
        cursor: "pointer",
        top: "10%",
        left: `${size === 300 ? 21 : 8}%`
    }


    const space = {
        marginTop: "0px",
    }

    const Search =()=>{
        return(
            <>
                <input style={{ height: '30px', width: '250px', backgroundColor: "#f2f2f2", border: 'none', padding: '5px'}} placeholder="Search" />
                <img src={CiSearch} alt=""/>
            </>
        )
    }

    return (
        <div  style={contain}>
            <div style={divStyle}>
                <div style={header}>
                    {size === 300 ? <Search/>: ""}
                </div>

                <div className="sidebar" style={{ justifyContent: 'center',
                                            alignItems: 'center', 
                                            display: 'flex', 
                                            flexDirection: 'column'
                                            }}
                                            >
                    <SideBarMenu text={size === 300 ? "My music" : " "} pic={home} />
                    <SideBarMenu text={size === 300 ? "Recent plays" : " "} pic={list} />
                    <SideBarMenu text={size === 300 ? "Now playing" : " "} pic={products} />

                    <div style={space}>
                        <SideBarMenu text={size === 300 ? "Playlists" : " "} pic={settings} />
                        <SideBarMenu text={size === 300 ? "Logout" : " "} pic={logout} />
                    </div>
                </div>

            </div>
            {/* <img src={switches} style={btn} onClick={handleClick} alt=""></img> */}
        </div>
    )
}

export default SideBar;
