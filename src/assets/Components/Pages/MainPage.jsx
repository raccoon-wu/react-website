import React, { useState } from "react";
import '../../../index.css'
import './MainPage.css'
import { Link } from "react-router-dom";
import cover3D from "../../Images/3DCover.png";
import cover2D from "../../Images/2DCover.png";

function MainPage() {

  //a useState to track which button is being hovered, so text hover can appear
  const [hoveredButton, setHoveredButton] = useState(null);
  const [fadeOutImage, setFadeOutImage] = useState(null);
  console.log(hoveredButton);

  return (
    <>
      <div className="mainPageFlexbox">

      {/* <div className="backgroundImageDiv">
          {hoveredButton === '2D' && <img className="backgroundImageLeft" src={cover2D}/>}
          {hoveredButton === '3D' && <img className="backgroundImageRight" src={cover3D}/>}
          {hoveredButton !== '2D' && <img className="backgroundImageLeft fade-out" src={cover2D} />}
          {hoveredButton !== '3D' && <img className="backgroundImageRight fade-out" src={cover3D} />}


      </div> */}
      {/* Hovering over buttons changes background image */}
      <div className="backgroundImageDiv">
        {hoveredButton === '2D' && <img className="backgroundImageLeft" src={cover2D}/>}
        {hoveredButton === '3D' && <img className="backgroundImageRight" src={cover3D}/>}
        {fadeOutImage === '2D' && <img className="backgroundImageLeft fade-out" src={cover2D}/>}
        {fadeOutImage === '3D' && <img className="backgroundImageRight fade-out" src={cover3D}/>}
      </div>

          {/* {(hoveredButton !== '2D' && hoveredButton !== '3D') && (
        <div className="backgroundImageDiv">
          {hoveredButton === '2D' ? (
            <img className="backgroundImageLeft fade-out" src={cover2D} />
          ) : (
            <img className="backgroundImageRight fade-out" src={cover3D} />
          )}
        </div>
      )} */}

        <div className="mainPageReposition">
          <div className="mainPageButtonContainer">

              <Link to="/2DGallery">
                <button className="mainPageButton">
                    <img className="mainButtonImage" src="src/assets/Images/2DFont.svg"
                    onMouseEnter={()=> setHoveredButton('2D')}
                    onMouseLeave={()=> {setHoveredButton(null);  setFadeOutImage('2D'); 

                      //****
                      setTimeout(()=> {
                        setFadeOutImage(null);
                      }, 500);
                      //****
                      
                    }}/>
                </button>
              </Link>

              <Link to="/3DGallery">
                <button className="mainPageButton">
                    <img className="mainButtonImage" src="src/assets/Images/3DFont.svg"
                    onMouseEnter={()=> setHoveredButton('3D')}
                    onMouseLeave={()=> {setHoveredButton(null);  setFadeOutImage('3D');

                      //****
                      setTimeout(()=> {
                        setFadeOutImage(null);
                      }, 500);
                      //****

                    }}/>
                </button>
              </Link>

          </div>

          {hoveredButton === '2D' && 

          <div className="hoverTextDiv">
              <p className="hoverText">Illustrations, Concept Design (Character, Creature + Assets), Animation</p>
          </div>
          }

          {hoveredButton === '3D' && 
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
