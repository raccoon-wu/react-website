import React, { useEffect, useState } from "react";
import { useLocation} from 'react-router-dom';
import './Renderer.css'
import { presetsOf3DCharacters, presetOf3DObjects, presetOf3DEnvironments } from '../3DGalleryRenders/3DPresets.js';
import { presetsOf2DMinions, presetsOf2DCharacters } from '../2DGalleryRenders/2DPresets.js';
import Cover2DWide from '../Images/2DCoverWide.png';
import Cover3DWide from '../Images/3DCoverWide.png';

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
          setPresetToDisplay(Array.isArray(get3DPreset) ? get3DPreset.map(preset => preset.images[0]).flat() : []);
        } else if (get3DPreset === presetOf3DObjects){
          setPresetToDisplay(Array.isArray(get3DPreset) ? get3DPreset.map(preset => preset.images[0]).flat() : []);
        } else if (get3DPreset === presetOf3DEnvironments){
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

        if(selectedImage){
          setmodalImagePresetIndex(get3DPreset.indexOf(selectedImage));
          setmodalImageIndex(0);
          setModalImage(selectedImage.images[0]);
        };
      };

      if(location.pathname.toLowerCase() === "/2dgallery"){
          const selectedImage = get2DPreset.find(p => p.id === currentImageId);

        if(selectedImage){
          setmodalImagePresetIndex(get2DPreset.indexOf(selectedImage));
          setmodalImageIndex(0);
          setModalImage(selectedImage.images[0]);
        };
      }
    }

    const handleImageExit = () => {
          setModalImage(null);
          setmodalImageIndex(0);
          setmodalImagePresetIndex(0);
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


//Stores the array of images to be displayed below the modal image
const modalPreviewImages = [];

// 3D - For Loop to iterate through every image in the selected object.image[index]
// else statement for 'environments' since there is only one image, so the for loop will not be triggered.  
    if(location.pathname.toLowerCase() === "/3dgallery"){
      if(get3DPreset[modalImagePresetIndex].images.length > 1){
        for(let j = 0; j < get3DPreset[modalImagePresetIndex].images.length; j++){
          modalPreviewImages.push(
            <img className='modalImagePreviewImages' key={j} src={get3DPreset[modalImagePresetIndex].images[j]}></img>
          )
        }
      } else {
        modalPreviewImages.push(
          <img className='modalImagePreviewImages' key={0} src={get3DPreset[modalImagePresetIndex].images[0]}></img>
        )
      }

  } 

// 2D - Just need to display one so it's always the same
    if(location.pathname.toLowerCase() === "/2dgallery"){
      modalPreviewImages.push(
        <img className='modalImagePreviewImages' key={0} src={get2DPreset[modalImagePresetIndex].images[0]}></img>
      )
    }

//function for conditionally rendering
    const heroImage = [];
          if (get3DPreset === presetsOf3DCharacters){
              heroImage.push( <img className='heroDisplayImage' src={Cover3DWide}/>)
          }
          if (get2DPreset === presetsOf2DCharacters){
              heroImage.push( <img className='heroDisplayImage' src={Cover2DWide}/>)
          }
  
          console.log(modalPreviewImages[1]);
    
    const
  return (
    <>
        <div className="mainFlexBox">
              <div className="heroDisplayDiv">
                {heroImage}
              </div>
              <div className="galleryDisplayDiv">{displayingImages}</div>   
        </div>

      {modalImage && (
        <>
        <div className="modalImageContainer" onClick={handleImageExit}>
            <div className="modalImageFlex">
              {/* Conditional text depending on which page it is */}
                <div className="modalImageText">
                {location.pathname.toLowerCase() === "/3dgallery" && 
                    <p>{get3DPreset[modalImagePresetIndex].name} Renders</p>
                }      

                {location.pathname.toLowerCase() === "/2dgallery" && 
                    <p>{get2DPreset[modalImagePresetIndex].name} Renders</p>
                }   
                </div>
              <img className='modalImage' src={modalImage} alt=""/>
                  <div className="modalImagePreview">
                    {modalPreviewImages}
                    
                  </div>
                  <p className="modalImageNumber">{modalImageIndex+1}/{modalPreviewImages.length}</p>
              </div>
        </div>
        </>
      )}
    </>
  );
}

export default Renderer;
