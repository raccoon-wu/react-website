import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
  const location = useLocation();
  const [toggleRenderer, setToggleRenderer] = useState('');

  const handleRenderSet = (value) =>  { setToggleRenderer(value); };

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
            <button onClick={() => handleButtonClick('Characters')}>Characters</button>
            <button onClick={() => handleButtonClick('Objects')}>Objects</button>
            <button onClick={() => handleButtonClick('Characters')}>Environments</button>
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

// import './Navbar.css'
// import homeIcon from './homeIcon.png'

// const Navbar = () => {
//     return (
//         <nav>
//             <img className='homeButton' src={homeIcon}></img>
//             <ul>
//                 <li>AMY WU</li>
//             </ul>
//         </nav>

//     )
// }

// export default Navbar