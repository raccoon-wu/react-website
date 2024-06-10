import React , { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

import { presetsOf3DCharacters, presetOf3DObjects, presetOf3DEnvironments } from '../../3DGalleryRenders/3DPresets.js';
import { presetsOf2DMinions, presetsOf2DCharacters } from '../../2DGalleryRenders/2DPresets.js';

const NavBar = ({get2DPreset, set2DPreset, get3DPreset, set3DPreset}) => {
  const location = useLocation();
  
  useEffect(()=> {console.log('2D is ' + get2DPreset + '3D is ' + get3DPreset);}, [get2DPreset,get3DPreset]);
  
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
    </>
  );
}

export default NavBar;