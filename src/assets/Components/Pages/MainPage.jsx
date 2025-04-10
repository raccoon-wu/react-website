import React, { useState, useEffect  } from "react"; 
import '../../../index.css'; 
import { Link } from "react-router-dom"; 
// import cover3D from "../../Images/3DCover.png"; 
// import cover2D from "../../Images/2DCover.png";  
import cover3DBlur from "../../Images/3DCoverBlur.png"; 
import cover2DBlur from "../../Images/2DCoverBlur.png";  
import useWindowSize from './WindowSize.jsx';
import sparkle2D from '../../Images/2DSparkle.png';  
import sparkle3D from '../../Images/3DSparkle.png';  
import twoDFont from '../../../assets/Images/2DFont.svg'; // Import the SVG image
import threeDFont from '../../../assets/Images/3DFont.svg'; // Import the SVG image
import './MainPage.css' 
 
function MainPage() { 
  const { width } = useWindowSize();
  const isMobile = width <= 480; 
 
  // a useState to track which button is being hovered, so text hover can appear 
  const [backgroundImage, setBackgroundImage] = useState(null); 
  // const [highResLoaded, setHighResLoaded] = useState({
  //   cover2D: false,
  //   cover3D: false
  // });
  const [cover2D, setCover2D] = useState(cover2DBlur);
  const [cover3D, setCover3D] = useState(cover3DBlur);
  // useEffect(() => {
  //   const img2D = new Image();
  //   const img3D = new Image();

  //   img2D.src = cover2D;
  //   img3D.src = cover3D;

  //   img2D.onload = () => setHighResLoaded(prevState => ({ ...prevState, cover2D: true }));
  //   img3D.onload = () => setHighResLoaded(prevState => ({ ...prevState, cover3D: true }));
  // }, []);
  useEffect(() => {
    // Load high-resolution images dynamically
    const loadImages = async () => {
      try {
        const cover2DImage = await import('../../Images/2DCover.webp');
        const cover3DImage = await import('../../Images/3DCover.webp');

        setCover2D(cover2DImage.default);
        setCover3D(cover3DImage.default);
      } catch (error) {
        console.error('Error loading images:', error);
      }
    };

    loadImages();
  }, []);
  return ( 
    <> 
      {isMobile ? (  
        // Mobile Main Page
        <> 
        <div className="mobileFlexBox">  
            <Link className='mobileLink' to="/2DGallery"><div className="mobileMainButtons2D">
                <div className="mobileButtonsTextDiv">
                  <p className="mobileButtonsTitle">2D GALLERY</p>
                  <p className="mobileButtonsDescription">Illustrations, Concept Design (Character, Creature + Assets), Animation</p>
                </div>
              </div></Link>
            <Link className='mobileLink' to="/3DGallery"><div className="mobileMainButtons3D">
                <div className="mobileButtonsTextDiv">
                    <p className="mobileButtonsTitle">3D GALLERY</p>
                    <p className="mobileButtonsDescription">Low Poly Modelling, High Poly Sculpting, Texture Painting, Animation + fx</p>
                </div>
              </div></Link>
        </div> 
        </> 
      ) : (
        // Desktop Main Page
        <div className="mainPageFlexbox"> 
          {/* Hovering over buttons changes background image */} 
          <div className="backgroundImageDiv"> 
            {/* Conditional classnames to change opacity, depending on the buttons state */} 
            {/* <img className={backgroundImage === '2D' ? 'backgroundImageLBright' : 'backgroundImageL'} src={cover2D}/>
            <img className={backgroundImage === '2D' ? 'sparkle2D' : 'sparkle2DDim'} src={sparkle2D}/> 
            <img className={backgroundImage === '3D' ? 'backgroundImageRBright' : 'backgroundImageR'} src={cover3D}/>
            <img className={backgroundImage === '3D' ? 'sparkle3D' : 'sparkle3DDim'} src={sparkle3D}/>   */}
                        <img 
              className={backgroundImage === '2D' ? 'backgroundImageLBright' : 'backgroundImageL'} 
              // src={highResLoaded.cover2D ? cover2D : cover2DBlur} 
              src={cover2D}
            />
            <img 
              className={backgroundImage === '2D' ? 'sparkle2D' : 'sparkle2DDim'} 
              src={sparkle2D} 
            /> 
            <img 
              className={backgroundImage === '3D' ? 'backgroundImageRBright' : 'backgroundImageR'} 
              // src={highResLoaded.cover3D ? cover3D : cover3DBlur} 
              src={cover3D}
            />
            <img 
              className={backgroundImage === '3D' ? 'sparkle3D' : 'sparkle3DDim'} 
              src={sparkle3D} 
            />  
          </div> 
 
          <div className="mainPageReposition"> 
            <div className="mainPageButtonContainer"> 
              <Link to="/2DGallery"> 
                <button className="mainPageButton"> 
                  <img 
                    className="mainButtonImage" 
                    src={twoDFont} 
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
                    src={threeDFont}
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


