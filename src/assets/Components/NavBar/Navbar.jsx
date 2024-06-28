import React , { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

import { presetsOf3DCharacters, presetOf3DObjects, presetOf3DEnvironments } from '../../3DGalleryRenders/3DPresets.js';
import { presetsOf2DMinions, presetsOf2DCharacters } from '../../2DGalleryRenders/2DPresets.js';
import moreIcon from '../../Images/Icons/moreIcon.svg';
const NavBar = ({get2DPreset, set2DPreset, get3DPreset, set3DPreset}) => {
  const location = useLocation();

  return (
    <>
    <div className='navBarFlexBox'>
      <div className='navBarLeftButton'><img className='navBarLeftImage' src={moreIcon}/></div>
      <div className='navBarDiv'>
      
      {/* For Main page */}
          {location.pathname.toLowerCase() === "/" && 
            <p className='NavBarTextFrontPage'>AMY YI WU</p>
          }
          
      {/* For 3D page */}
      {location.pathname.toLowerCase() === "/3dgallery" && 
      <>
            <button onClick={()=>set3DPreset(presetsOf3DCharacters)}>Characters</button>
            <button onClick={()=>set3DPreset(presetOf3DObjects)}>Objects</button>
            <button onClick={()=>set3DPreset(presetOf3DEnvironments)}>Environments</button>
      </>
      }      

      {/* For 2D page */}
      {location.pathname.toLowerCase() === "/2dgallery" && 
      <>
            <button onClick={()=>set2DPreset(presetsOf2DCharacters)}>Characters</button>
            <button onClick={()=>set2DPreset(presetsOf2DMinions)}>Creatures</button>
      </>
      }
      </div>
      </div>
    </>
  );
}

export default NavBar;