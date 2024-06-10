import React, { useEffect, useState } from "react";
import { useLocation} from 'react-router-dom';
import './Renderer.css'


function Renderer({get2DPreset, set2DPreset, get3DPreset, set3DPreset}) {

  // *** Checks location of the current page, is working
  const location = useLocation();


  // *** Array to store what to display currently so that there is only one at all time
  const [presetToDisplay, setPresetToDisplay] = useState([]); // LEON: This variable needs to become a state, otherwise it won't update
  // let presetToDisplay = [];

  // *** Checks which page (2D or 3D) to determine if we should use 'get3DPreset' or 'get2DPreset'
  // *** Array.isArray checks if it is an array to avoid errors
  // *** Last check is error handler/reset

  // useEffect(() => {
    // if (location.pathname.toLowerCase() === "/3dgallery") {
    //   console.log(Array.isArray(get3DPreset));
    //   presetToDisplay = Array.isArray(get3DPreset) ? get3DPreset.map(preset => preset.images) : [];
    // } else if (location.pathname.toLowerCase() === "/2dgallery") {
    //   presetToDisplay = Array.isArray(get2DPreset) ? get2DPreset.map(preset => preset.images) : [];
    // } else if (location.pathname === "/") {
    //   presetToDisplay = [];

    // }}, [location.pathname, get2DPreset, get3DPreset]);


    // LEON: This one needed to change to accommodate the setPresetToDisplay setter method we made on line 13!
    useEffect(() => {
      if (location.pathname.toLowerCase() === "/3dgallery") {
        setPresetToDisplay(Array.isArray(get3DPreset) ? get3DPreset.map(preset => preset.images).flat() : []);
      } else if (location.pathname.toLowerCase() === "/2dgallery") {
        setPresetToDisplay(Array.isArray(get2DPreset) ? get2DPreset.map(preset => preset.images).flat() : []);
      } else if (location.pathname === "/") {
        setPresetToDisplay([]);
      }
    }, [location.pathname, get2DPreset, get3DPreset]);
  
    // *** Maps the images from the preset into <image><image> components
  const displayingImages = [];
  for (let i = 0; i < presetToDisplay.length; i++) {
		displayingImages.push(
			<img className="galleryDisplayImages" key={i} src={presetToDisplay[i]}></img>
		);
	}

  return (
    <>
      {location.pathname.toLowerCase() === "/3dgallery" && 
      <>
            <p>Page is 3D now</p>
            <div className="galleryDisplayDiv">{displayingImages}</div>
      </>
      }      

      {location.pathname.toLowerCase() === "/2dgallery" && 
      <>
            <p>Page is 222222D now</p>
            <div className="galleryDisplayDiv">{displayingImages}</div>
      </>
      }     
    </>
  );
}

export default Renderer;
