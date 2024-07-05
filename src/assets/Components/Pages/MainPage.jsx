import React, { useState } from "react"; 
import '../../../index.css'; 
import { Link } from "react-router-dom"; 
import cover3D from "../../Images/3DCover.png"; 
import cover2D from "../../Images/2DCover.png"; 
import cover3D_mobile from '../../Images/Mobile3DCover.png'; 
import cover2D_mobile from '../../Images/Mobile2DCover.png'; 
import useWindowSize from './WindowSize.jsx';  
import './MainPage.css' 
 
function MainPage() { 
  const { width } = useWindowSize(); 
  const isMobile = width <= 960; 
 
  // a useState to track which button is being hovered, so text hover can appear 
  const [backgroundImage, setBackgroundImage] = useState(null); 
  console.log(isMobile); 
  return ( 
    <> 
      {isMobile ? (  
        <> 
        <div className="mobileFlexBox">  
          {/* <Link to="/2DGallery"><button className="mobileFrontButton"> */} 
            <img className='mobileFrontImage' src={cover2D_mobile}/> 
            {/* </button></Link> */} 
          {/* <Link to="/3DGallery"><button className="mobileFrontButton"> */} 
            <img className='mobileFrontImage' src={cover3D_mobile}/> 
            {/* </button></Link> */} 
        </div> 
        </> 
      ) : ( 
        <div className="mainPageFlexbox"> 
          {/* Hovering over buttons changes background image */} 
          <div className="backgroundImageDiv"> 
            {/* Conditional classnames to change opacity, depending on the buttons state */} 
            <img className={backgroundImage === '2D' ? 'backgroundImageLBright' : 'backgroundImageL'} src={cover2D} alt="2D Cover" /> 
            <img className={backgroundImage === '3D' ? 'backgroundImageRBright' : 'backgroundImageR'} src={cover3D} alt="3D Cover" /> 
          </div> 
 
          <div className="mainPageReposition"> 
            <div className="mainPageButtonContainer"> 
              <Link to="/2DGallery"> 
                <button className="mainPageButton"> 
                  <img 
                    className="mainButtonImage" 
                    src="src/assets/Images/2DFont.svg" 
                    alt="2D Gallery" 
                    onMouseEnter={() => { 
                      setBackgroundImage('2D'); 
                    }} 
                    onMouseLeave={() => { 
                      setBackgroundImage(null); 
                    }} 
                  /> 
                </button> 
              </Link> 
 
              <Link to="/3DGallery"> 
                <button className="mainPageButton"> 
                  <img 
                    className="mainButtonImage" 
                    src="src/assets/Images/3DFont.svg" 
                    alt="3D Gallery" 
                    onMouseEnter={() => { 
                      setBackgroundImage('3D'); 
                    }} 
                    onMouseLeave={() => { 
                      setBackgroundImage(null); 
                    }} 
                  /> 
                </button> 
              </Link> 
            </div> 
 
            {backgroundImage === '2D' && ( 
              <div className="hoverTextDiv"> 
                <p className="hoverText">Illustrations, Concept Design (Character, Creature + Assets), Animation</p> 
              </div> 
            )} 
 
            {backgroundImage === '3D' && ( 
              <div className="hoverTextDiv"> 
                <p className="hoverText">Low Poly Modelling, High Poly Sculpting, Texture Painting, Animation + fx</p> 
              </div> 
            )} 
          </div> 
        </div> 
      )} 
    </> 
  ); 
} 
 
export default MainPage; 
