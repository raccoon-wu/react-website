import React, { useEffect, useState } from "react";
import { useLocation} from 'react-router-dom';
import './Renderer.css'
import { presetsOf3DCharacters, presetOf3DObjects, presetOf3DEnvironments } from '../3DGalleryRenders/3DPresets.js';

function Renderer({get2DPreset, set2DPreset, get3DPreset, set3DPreset}) {

  // *** Checks location of the current page, is working
  const location = useLocation();


  // *** Array to store what to display currently so that there is only one at all time
  const [presetToDisplay, setPresetToDisplay] = useState([]); // LEON: This variable needs to become a state, otherwise it won't update
  
  //Tracks selected object in the preset
  const [modalImagePresetIndex, setmodalImagePresetIndex] = useState(0);

  //Tracks index of currently displayed image
  const [modalImageIndex, setmodalImageIndex] = useState(0);

  // state stores ???
  const [modalImage, setModalImage] = useState(null);

  // *** Checks which page (2D or 3D) to determine if we should use 'get3DPreset' or 'get2DPreset'
  // *** Array.isArray checks if it is an array to avoid errors
  // *** Last check is error handler/reset
    useEffect(() => {
      if (location.pathname.toLowerCase() === "/3dgallery") {
        //Conditional rendering depending on which preset is chosen
        if (get3DPreset === presetsOf3DCharacters){
          console.log('Character is selected');
          setPresetToDisplay(Array.isArray(get3DPreset) ? get3DPreset.map(preset => preset.images[0]).flat() : []);
        } else if (get3DPreset === presetOf3DObjects){
          console.log('Object is selected');
          setPresetToDisplay(Array.isArray(get3DPreset) ? get3DPreset.map(preset => preset.images[0]).flat() : []);
        } else if (get3DPreset === presetOf3DEnvironments){
          console.log('Environment is selected');
          setPresetToDisplay(Array.isArray(get3DPreset) ? get3DPreset.map(preset => preset.images).flat() : []);
        }
       
      } else if (location.pathname.toLowerCase() === "/2dgallery") {
        setPresetToDisplay(Array.isArray(get2DPreset) ? get2DPreset.map(preset => preset.images).flat() : []);
      } else if (location.pathname === "/") {
        setPresetToDisplay([]);
      }
    }, [location.pathname, get2DPreset, get3DPreset]);
  

    // Opening and closing the modal image
    const handleImageClick = (currentImageId) => {
      if(location.pathname.toLowerCase() === "/3dgallery"){
      const selectedImage = get3DPreset.find(p => p.id === currentImageId);
      console.log('Selected preset id is: ' + currentImageId);

        if(selectedImage){
          setmodalImagePresetIndex(get3DPreset.indexOf(selectedImage));
          setmodalImageIndex(0);
          setModalImage(selectedImage.images[0]);
          console.log('modal is ' + modalImage);
        };
      };

      if(location.pathname.toLowerCase() === "/2dgallery"){
          const selectedImage = get2DPreset.find(p => p.id === currentImageId);
      console.log('Selected preset id is: ' + currentImageId);

        if(selectedImage){
          setmodalImagePresetIndex(get2DPreset.indexOf(selectedImage));
          setmodalImageIndex(0);
          setModalImage(selectedImage.images[0]);
          console.log('modal is ' + modalImage);
        };
      }
    }

    const handleImageExit = () => {
          setModalImage(null);
    }

    useEffect(()=> {
        const handleKeyDown = (event) => {
          if(event.key === "ArrowLeft"){
              setmodalImageIndex( prevIndex => {
                  const newIndex = prevIndex === 0 ? prevIndex : prevIndex - 1;
                  if(location.pathname.toLowerCase() === "/3dgallery"){
                  setModalImage(get3DPreset[modalImagePresetIndex].images[newIndex]);
                  } else if(location.pathname.toLowerCase() === "/2dgallery"){
                  setModalImage(get2DPreset[modalImagePresetIndex].images[newIndex]);
                  }
                  return newIndex;
              });
          } else if (event.key === "ArrowRight"){
            setmodalImageIndex( prevIndex => {
              
                if(location.pathname.toLowerCase() === "/3dgallery"){
                  const newIndex = prevIndex === get3DPreset[modalImagePresetIndex].images.length - 1 ? prevIndex : prevIndex + 1;
                setModalImage(get3DPreset[modalImagePresetIndex].images[newIndex]);
                return newIndex;
                } else if(location.pathname.toLowerCase() === "/2dgallery"){
                  const newIndex = prevIndex === get2DPreset[modalImagePresetIndex].images.length - 1 ? prevIndex : prevIndex + 1;
                setModalImage(get2DPreset[modalImagePresetIndex].images[newIndex]);
                return newIndex;
                }

          });
          }
        };

        // Add event listener for keydown
			document.body.addEventListener('keydown', handleKeyDown);
	
			// Cleanup the event listener on component unmount
			return () => {
				document.body.removeEventListener('keydown', handleKeyDown);
			};

    }), [modalImagePresetIndex];



    // Maps the images from the preset into <image><image> components
  const displayingImages = [];
  
  // for (let i = 0; i < presetToDisplay.length; i++) {
	// 	displayingImages.push(
	// 		<img className="galleryDisplayImages" key={i} src={presetToDisplay[i]}
  //     onClick={() => handleImageClick(get3DPreset[i].id)}></img>
	// 	);
	// }


  for (let i = 0; i < presetToDisplay.length; i++) {
    if(location.pathname.toLowerCase() === "/3dgallery"){
    displayingImages.push(
      <img className="galleryDisplayImages" key={i} src={presetToDisplay[i]}
      onClick={() => handleImageClick(get3DPreset[i].id)}></img>
    );
  } else if(location.pathname.toLowerCase() === "/2dgallery"){
    displayingImages.push(
      <img className="galleryDisplayImages" key={i} src={presetToDisplay[i]}
      onClick={() => handleImageClick(get2DPreset[i].id)}></img>
    );
  }
};
    
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

      {modalImage && (
        <>
        <div className="modalImageContainer" onClick={handleImageExit}>
        <img className='modalImage' src={modalImage} alt=""/>
        </div>
        </>
      )}
    </>
  );
}

export default Renderer;
