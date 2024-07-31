import React, { useEffect, useState } from "react";
import { useLocation} from 'react-router-dom';
import './Renderer.css'
import { presetsOf3DCharacters, presetOf3DObjects, presetOf3DEnvironments } from '../3DGalleryRenders/3DPresets.js';
import { presetsOf2DMinions, presetsOf2DCharacters, presetsOfConceptArt} from '../2DGalleryRenders/2DPresets.js';
import Hero2DWide from '../Images/2DCoverWide.png';
import Hero3DWide from '../Images/3DCoverWide.png';
import HeroCreature from '../Images/Creature_Hero.gif';
import arrowLeft from '../Images/Icons/arrow_left.png';
import arrowRight from '../Images/Icons/arrow_right.png';
import closeCross from '../Images/Icons/closeCross.png';

function Renderer({get2DPreset, set2DPreset, get3DPreset, set3DPreset}) {

  // *** Checks location of the current page, is working
  const location = useLocation();

  // *** Array to store what to display currently so that there is only one at all time
  const [presetToDisplay, setPresetToDisplay] = useState([]); 
  
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
          setPresetToDisplay(Array.isArray(get3DPreset) ? get3DPreset.map(preset => preset.images[0]).flat() : []);
        }
       
      } else if (location.pathname.toLowerCase() === "/2dgallery") {
        if (get2DPreset === presetsOfConceptArt){
          setPresetToDisplay(Array.isArray(get2DPreset) ? get2DPreset.map(preset => preset.images[0]).flat() : []);
        } else {setPresetToDisplay(Array.isArray(get2DPreset) ? get2DPreset.map(preset => preset.images).flat() : []);}
        
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
      onClick={() => handleImageClick(get3DPreset[i].id)}  loading="lazy"></img>
    );
  } else if(location.pathname.toLowerCase() === "/2dgallery"){
    displayingImages.push(
      <img className="galleryDisplayImages" key={i} src={presetToDisplay[i] }
      onClick={() => handleImageClick(get2DPreset[i].id)}  loading="lazy"></img>
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
            <img className={ j === modalImageIndex ? 'modalImagePreviewImages' : 'modalImagePreviewImagesDARK' } key={j} src={get3DPreset[modalImagePresetIndex].images[j]}  loading="lazy"></img>
          )
        }
      } else {
        modalPreviewImages.push(
          <img className='modalImagePreviewImages' key={0} src={get3DPreset[modalImagePresetIndex].images[0]}  loading="lazy"></img>
        )
      }

  } 

// 2D - Just need to display one so it's always the same
    if(location.pathname.toLowerCase() === "/2dgallery"){
      if(get2DPreset[modalImagePresetIndex].images.length > 1){
        for(let j = 0; j < get2DPreset[modalImagePresetIndex].images.length; j++){
          modalPreviewImages.push(
            <img className={ j === modalImageIndex ? 'modalImagePreviewImages' : 'modalImagePreviewImagesDARK' } key={j} src={get2DPreset[modalImagePresetIndex].images[j]}  loading="lazy"></img>
          )
        }
      } else {
        modalPreviewImages.push(
          <img className='modalImagePreviewImages' key={0} src={get2DPreset[modalImagePresetIndex].images[0]}  loading="lazy"></img>
        )
      // modalPreviewImages.push(
      //   <img className='modalImagePreviewImages' key={0} src={get2DPreset[modalImagePresetIndex].images[0]}  loading="lazy"></img>
      // )
    }
  }

//function for conditionally rendering an hero image only for the following presets
    const heroImage = [];
          if (get3DPreset === presetsOf3DCharacters){
              heroImage.push( <img className='heroDisplayImage' src={Hero3DWide}  loading="lazy"/>)
          }
          if (get2DPreset === presetsOf2DCharacters){
              heroImage.push( <img className='heroDisplayImage' src={Hero2DWide} loading="lazy"/>)
          }
          if (get2DPreset === presetsOf2DMinions){
            heroImage.push( <img className='heroDisplayImage' src={HeroCreature} loading="lazy"/>)
        }
    
//function for conditionally rendering text depending on which preset is chosen and which preset is chosen
    let modalText = " ";
          if (location.pathname.toLowerCase() === "/3dgallery"){
              if(get3DPreset === presetsOf3DCharacters){
                if(modalImageIndex === 0){modalText = get3DPreset[modalImagePresetIndex].name + " Reskinned Render";}
                if(modalImageIndex === 1){modalText = get3DPreset[modalImagePresetIndex].name + " Original Design";}
                if(modalImageIndex === 2){modalText = get3DPreset[modalImagePresetIndex].name + " Turnaround";}
                if(modalImageIndex === 3){modalText = get3DPreset[modalImagePresetIndex].name + " Wireframe";}
              }
              if(get3DPreset === presetOf3DObjects){
                  if(get3DPreset[modalImagePresetIndex].images.length === 4){
                if(modalImageIndex === 0){modalText = get3DPreset[modalImagePresetIndex].name + " Variation #1";}
                if(modalImageIndex === 1){modalText = get3DPreset[modalImagePresetIndex].name + " Variation #2";}
                if(modalImageIndex === 2){modalText = get3DPreset[modalImagePresetIndex].name + " Variation #3";}
                if(modalImageIndex === 3){modalText = get3DPreset[modalImagePresetIndex].name + " Wireframe";}
              } else {
                if(modalImageIndex === 0){modalText = get3DPreset[modalImagePresetIndex].name + " Variation #1";}
                if(modalImageIndex === 1){modalText = get3DPreset[modalImagePresetIndex].name + " Wireframe";}
              }
              }
              if(get3DPreset === presetOf3DEnvironments){
                modalText = get3DPreset[modalImagePresetIndex].name + " Render";
              }
          }

          if (location.pathname.toLowerCase() === "/2dgallery"){
            if(get2DPreset === presetsOfConceptArt){
              //Checks if the images[] array have more than 1 image in it for concept art
              if(get2DPreset[modalImagePresetIndex].images.length >= 1)
              { 
                //First index in images[] naming style
                if(modalImageIndex === 0){modalText = get2DPreset[modalImagePresetIndex].name + " Finallised Concept";}

                //Subsequent index naming style
                if(modalImageIndex > 0){
                  modalText = get2DPreset[modalImagePresetIndex].name + " Brainstorming";
                }
              }
            } else {modalText = get2DPreset[modalImagePresetIndex].name + " Illustration";}
          }

          console.log('preset is: '+modalImagePresetIndex);
          console.log('image index is: '+modalImageIndex);

//Setting up arrow keys for modal image for more visual clarity
          const leftArrowClick = () => {
            setmodalImageIndex(prevIndex => {
              const newIndex = prevIndex === 0 ? prevIndex : prevIndex - 1;
              if(location.pathname.toLowerCase() === "/3dgallery"){
              setModalImage(get3DPreset[modalImagePresetIndex].images[newIndex]);

              } else if(location.pathname.toLowerCase() === "/2dgallery"){
              setModalImage(get2DPreset[modalImagePresetIndex].images[newIndex]);
              }
              return newIndex;
            });
          }

          const rightArrowClick = () => {
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

          // const blurImagesDisplay = () => {

          // }

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
        <div className="modalImageContainer">
          <img className='modalImageClose' src={closeCross} onClick={handleImageExit}/>
            <div className="modalImageFlex">
              {/* Conditional text that changes depending on the image*/}
                <div className="modalImageText">
                  <p>{modalText}</p>
                </div>
              <img className='modalImage' src={modalImage} alt=""  loading="lazy"/>
                  <div className="modalImagePreview">
                    {modalPreviewImages}
                  </div>
                  <p className="modalImageNumber">{modalImageIndex+1}/{modalPreviewImages.length}</p>
                  <div className="arrowsContainer">
                    {modalImageIndex > 0 && 
                    (<img onClick={leftArrowClick} className="leftArrowImage" src={arrowLeft}/>)}
                    {modalImageIndex < modalPreviewImages.length-1 &&
                    (<img onClick={rightArrowClick} className="rightArrowImage" src={arrowRight}/>)}

                      
                  </div>
              </div>
        </div>
        </>
      )}
    </>
  );
}

export default Renderer;
