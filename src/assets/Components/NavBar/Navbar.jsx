import './Navbar.css'
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "../../Images/home_icon.png";

const Navbar = () => {
    const location = useLocation();

    return (
        <>
            <nav>
                {/* Left NavBar icon */}
                <div className='NavIcon'>
                    {location.pathname.toLowerCase() === "/3dpage" && <Link to="/"><img className='homeButton' src={homeIcon}></img></Link>}
                </div>

                {/* Right NavBar options */}
                <div className='NavOptions'>
                    {location.pathname === "/" && <p className = 'mainPageTitle'>AMY WU</p>}
                    {location.pathname.toLowerCase() === "/2Dpage" && <li>2D Page</li>}
                    {location.pathname.toLowerCase() === "/3dpage" &&
                        <>
                            <button>CHARACTERS</button>
                            <button>OBJECTS</button>
                            <button>ENVIRONMENT</button>
                        </>}
                </div>


            </nav>
        </>
    )
}

export default Navbar