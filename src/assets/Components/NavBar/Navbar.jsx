import React , { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

const NavBar = ({ presetState, setPresetState }) => {
  const location = useLocation();

  const handlePresetSet = (value) => { setPresetState(value); };

  return (
    <div className='navBarDiv'>
      {/* For Main page */}
      {location.pathname.toLowerCase() === "/" && 
        <p>AM NAVBAR</p>
      }
          
      {/* For 3D page */}
      {location.pathname.toLowerCase() === "/3dgallery" && 
      <>
        <button onClick={() => handlePresetSet('presetsOf3DCharacters')}>Characters</button>
        <button onClick={() => handlePresetSet('presetsOf3DObjects')}>Objects</button>
        <button onClick={() => handlePresetSet('presetsOf3DEnvironments')}>Environments</button>
      </>
      }      

      {/* For 2D page */}
      {location.pathname.toLowerCase() === "/2dgallery" && 
      <>
        <button onClick={() => handlePresetSet('2DCharacters')}>Characters</button>
        <button onClick={() => handlePresetSet('2DCreatures')}>Creatures</button>
        <button onClick={() => handlePresetSet('2DConceptDesign')}>Concept Design</button>
      </>
      }       
    </div>
  );
};

export default NavBar;
