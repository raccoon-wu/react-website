import React , { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
  const location = useLocation();

  return (
    <>
      <div className='navBarDiv'>
        
      {/* For Main page */}
          {location.pathname.toLowerCase() === "/" && 
            <p>AM NAVBAR</p>
          }
          
      {/* For 3D page */}
      {location.pathname.toLowerCase() === "/3dgallery" && 
      <>
            <button>Characters</button>
            <button>Objects</button>
            <button>Environments</button>
      </>
      }      

      {/* For 2D page */}
      {location.pathname.toLowerCase() === "/2dgallery" && 
      <>
            <button>Characters</button>
            <button>Creatures</button>
            <button>Concept Design</button>
      </>
      }       
      </div>
    </>
  );
}

export default NavBar;