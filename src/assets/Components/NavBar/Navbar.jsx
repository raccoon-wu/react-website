import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

import { presetsOf3DCharacters, presetOf3DObjects, presetOf3DEnvironments } from '../../3DGalleryRenders/3DPresets.js';
import { presetsOf2DMinions, presetsOf2DCharacters, presetsOfConceptArt} from '../../2DGalleryRenders/2DPresets.js';
import backButton from '../../Images/Icons/home_icon.png';

const NavBar = ({get2DPreset, set2DPreset, get3DPreset, set3DPreset}) => {
  const location = useLocation();

  return (
    <>
    <div className='navBarFlexBox'>
        <div className='navBarLeftButton'>
          {location.pathname.toLowerCase() === "/2dgallery" && 
            <Link to="/"><img className='navBarLeftImage' src={backButton}/></Link>
          }

          {location.pathname.toLowerCase() === "/3dgallery" && 
            <Link to="/"><img className='navBarLeftImage' src={backButton}/></Link>
          }
        </div>
        

      <div className='navBarDiv'>
      
      {/* For Main page */}
      {location.pathname.toLowerCase() === "/" && 
      <p className='NavBarTextFrontPage'>AMY YI WU</p>
      }
          
      {/* For 3D page */}
      {/* className = { x === y ? a : '' } sets up conditional rendering for className, it only triggers 'a' if it is true otherwise is empty*/}
      {location.pathname.toLowerCase() === "/3dgallery" && 
      <>
        <div className='galleryOptionsDiv'>
            <button className={get3DPreset === presetsOf3DCharacters ? 'selectHighlight' : 'buttonNavbar'} onClick={()=>set3DPreset(presetsOf3DCharacters)}>Characters</button>
            <button className={get3DPreset === presetOf3DObjects ? 'selectHighlight' : 'buttonNavbar'}  onClick={()=>set3DPreset(presetOf3DObjects)}>Objects</button>
            <button className={get3DPreset === presetOf3DEnvironments ? 'selectHighlight' : 'buttonNavbar'}   onClick={()=>set3DPreset(presetOf3DEnvironments)}>Environments</button>
        </div>
      </>
      }      

      {/* For 2D page */}
      {location.pathname.toLowerCase() === "/2dgallery" && 
      <>
        <div className='galleryOptionsDiv'>
            <button className={get2DPreset === presetsOf2DCharacters ? 'selectHighlight' : 'buttonNavbar'} onClick={()=>set2DPreset(presetsOf2DCharacters)}>Characters</button>
            <button className={get2DPreset === presetsOf2DMinions ? 'selectHighlight' : 'buttonNavbar'} onClick={()=>set2DPreset(presetsOf2DMinions)}>Creatures</button>
            <button className={get2DPreset === presetsOfConceptArt ? 'selectHighlight' : 'buttonNavbar'} onClick={()=>set2DPreset(presetsOfConceptArt)}>Concept Art</button>
        </div>
      </>
      }
      </div>
      </div>
    </>
  );
}

export default NavBar;