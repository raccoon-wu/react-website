import React, { useCallback, useState } from "react";
import '../../../index.css'
import './MainPage.css'
import { Link } from "react-router-dom";
import cover3D from "../../Images/3DCover.png";
import cover2D from "../../Images/2DCover.png";

function MainPage() {

  //a useState to track which button is being hovered, so text hover can appear
  const [backgroundImage, setBackgroundImage] = useState(null);

  return (
    <>
      <div className="mainPageFlexbox">

      {/* Hovering over buttons changes background image */}
      <div className="backgroundImageDiv">
      {/* Conditional classnames to change opacity, depending on the buttons state*/}
        <img className={backgroundImage === '2D' ? 'backgroundImageLBright':'backgroundImageL'} src={cover2D}/>
        <img className={backgroundImage === '3D' ? 'backgroundImageRBright':'backgroundImageR'} src={cover3D}/>


      </div>

        <div className="mainPageReposition">
          <div className="mainPageButtonContainer">

              <Link to="/2DGallery">
                <button className="mainPageButton">
                    <img className="mainButtonImage" src="src/assets/Images/2DFont.svg"
                    onMouseEnter={()=> {
                      setBackgroundImage('2D');
                    }}
                    onMouseLeave={()=> {
                      setBackgroundImage('');
                    }}/>
                </button>
              </Link>

              <Link to="/3DGallery">
                <button className="mainPageButton">
                    <img className="mainButtonImage" src="src/assets/Images/3DFont.svg"
                    onMouseEnter={()=> {
                      setBackgroundImage('3D');
                    }}
                    onMouseLeave={()=> {
                      setBackgroundImage('');
                    }}/>
                </button>
              </Link>

          </div>

          {backgroundImage === '2D' && 
          <div className="hoverTextDiv">
              <p className="hoverText">Illustrations, Concept Design (Character, Creature + Assets), Animation</p>
          </div>
          }

          {backgroundImage === '3D' && 
          <div className="hoverTextDiv">
              <p className="hoverText">Low Poly Modelling, High Poly Sculpting, Texture Painting, Animation + fx</p>
          </div>
          }          

          </div>
      </div>
    </>
  );
}
export default MainPage;

// import './index.css'
// import './MainPage.css'
// import Navbar from './assets/Components/NavBar/Navbar.jsx';
// import { Link } from "react-router-dom";

// function handleMouseEnter(event, text) {
//   const target = event.target;
//   const div = document.querySelector('.hoverText');
//   div.textContent = text;
// }

// function handleMouseLeave(event) {
//   const target = event.target;
//   const div = document.querySelector('.hoverText');
//   div.textContent = '';
// }

// function App() {
//   return (
//     <>

//       <div className='mainPageColor'>
//       <Navbar />
//         <div className='pageContainer'>
//           <div className='frontPageContainer'>
//             <Link to="/2Dpage"><img
//               className="frontPageSelection"
//               src="src/assets/Images/2DFont.svg"
//               onMouseEnter={(e) => handleMouseEnter(e, 'Illustrations, Concept Design (Character, Creature + Assets), Animation')}
//               onMouseLeave={handleMouseLeave}
//             /></Link>
//             <Link to="/3Dpage"><img
//               className="frontPageSelection"
//               src="src/assets/Images/3DFont.svg"
//               onMouseEnter={(e) => handleMouseEnter(e, 'Low Poly Modelling, High Poly Sculpting, Texture Painting, Animation + fx')}
//               onMouseLeave={handleMouseLeave}
//             /></Link>
//           </div>
//         </div>
//         <div className="hoverText"></div>
//       </div>
//     </>
//   );
// }

// export default App
