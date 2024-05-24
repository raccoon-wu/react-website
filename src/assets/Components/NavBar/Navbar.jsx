import './Navbar.css'
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import homeIcon from "../../Images/home_icon.png";

const Navbar = () => {
    const location = useLocation();

    return (
        <>        <nav>
            {/* Icons rendering */}
            {location.pathname.toLowerCase() === "/3dpage" && <Link to="/"><img className='homeButton' src={homeIcon}></img></Link>}


            {/* NavBar content rendering */}

                    {location.pathname === "/" && <li className='mainPageTitle'>AMY WU</li>}
                    {location.pathname.toLowerCase() === "/2Dpage" && <li>2D Page</li>}
                    {location.pathname.toLowerCase() === "/3dpage" && 
                    <div className='Nav3DOptions'>
                            <button>CHARACTERS</button>
                            <button>OBJECTS</button>
                            <button>ENVIRONMENT</button>
                    </div>
                    }

        </nav>
    </>
    )
}

export default Navbar