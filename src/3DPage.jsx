import './3DPage.css'
import React, { useEffect, useState } from "react";

import CoverImage3D from './assets/Images/3DCoverWide.png';
import leftArrow from './assets/Images/arrow_button_left.png';
import rightArrow from './assets/Images/arrow_button_right.png';

import * as GalleryImages from './assets/3DGalleryRenders/imageExport';
import Navbar from './assets/Components/NavBar/Navbar';

function ThreeDCollection(){
	const presets = [
		{id:4, name:'Necromancer Female', images:[GalleryImages.NF_1,GalleryImages.NF_2,GalleryImages.NF_4,GalleryImages.NF_3]},
		{id:3, name:'Necromancer Male', images:[GalleryImages.NM_1,GalleryImages.NM_2,GalleryImages.NM_3,GalleryImages.NM_4]},
		{id:1, name:'Assasin Female', images:[GalleryImages.AF_1,GalleryImages.AF_2,GalleryImages.AF_3,GalleryImages.AF_4]},
		{id:2, name:'Assasin Male', images:[GalleryImages.AM_1,GalleryImages.AM_2,GalleryImages.AM_3,GalleryImages.AM_4]},
		{id: 6, name: 'Mercenary Male', images: [GalleryImages.MeM_1, GalleryImages.MeM_2, GalleryImages.MeM_3, GalleryImages.MeM_4] },
		{id: 5, name: 'Mercenary Female', images: [GalleryImages.MeF_1, GalleryImages.MeF_2, GalleryImages.MeF_3, GalleryImages.MeF_4] }
	];
	
	//An array to store the names of the first image of each object
	const displayImages = presets.map(presets => presets.images[0]);
	
	//Tracks currently selected object in the presets array
	const [presetIndex, setPresetIndex] = useState(0);

	//Tracks currently displayed image within the selected presets' images array
    const [imageIndex, setImageIndex] = useState(0);
	
	//Click on an image to enlarge it in a modal form
	const [modalImage, setModalImage] = useState(null);

	const handleClick = (presetId) => {
		const selectedPreset = presets.find(p => p.id === presetId);
		console.log("Selected Preset:", selectedPreset);

		if (selectedPreset) {
			setPresetIndex(presets.indexOf(selectedPreset)); // Find the index of the selected preset
        	setImageIndex(0); // Reset image index when a new preset is clicked
			setModalImage(selectedPreset.images[0]); // Accessing the images property of the selectedPreset
		}
	};

	//Closing the modal image
	const handleClose = () => {
        setModalImage(null);
    };

	//An array to hold the JSX Elements
	const imageElements = [];

	//Making an <img> component for every element in the array for the gallery display
	for (let i=0; i<displayImages.length;i++)
		{
			imageElements.push(
				<img className = "images" 
				key={i} 
				src={displayImages[i]}
				onClick={() => handleClick(presets[i].id)}
				></img>
			);
		}

	
		// Cycle through the .images[index] with arrow keys
		useEffect(() => {
			const handleKeyDown = (event) => {
				if (event.key === "ArrowLeft") {
					setImageIndex(prevIndex => 
						{
							const newIndex = prevIndex === 0 ? prevIndex : prevIndex - 1;		//checks if prevIndex = 0? if 'true' : if 'false'
							setModalImage(presets[presetIndex].images[newIndex]);				//updates Modal, the 'display' image
							return newIndex;													//returns newIndex so the previous line will update correctly
						});
					
				} else if (event.key === "ArrowRight") {
					setImageIndex(prevIndex => {
							const newIndex = prevIndex === presets[presetIndex].images.length - 1 ? prevIndex : prevIndex + 1;
							setModalImage(presets[presetIndex].images[newIndex]);
							return newIndex;
					});
				}
			};
	
			// Add event listener for keydown
			document.body.addEventListener('keydown', handleKeyDown);
	
			// Cleanup the event listener on component unmount
			return () => {
				document.body.removeEventListener('keydown', handleKeyDown);
			};
		}, [presetIndex, presets]);

		//Cycle through the .images[index] with <- and -> arrow buttons
		const leftArrowClick = () => {
			setImageIndex(prevIndex => {
			const newIndex = prevIndex === 0 ? prevIndex : prevIndex - 1;
			setModalImage(presets[presetIndex].images[newIndex]);
			return newIndex;
			});
		};

		const rightArrowClick = () => {
			setImageIndex(prevIndex => {
				const newIndex = prevIndex === presets[presetIndex].images.length - 1 ? prevIndex : prevIndex + 1;
				setModalImage(presets[presetIndex].images[newIndex]);
				return newIndex;
			});
		};

	return(
        <>
		{/* Gallery images display */}
			<div className="backgroundColor">
				<Navbar/>
				<div>
					<img className="displayImage3D" src={CoverImage3D}></img>
						<div className="galleryContainer">
								{imageElements}
						</div>

		{/* Modal image display and interaction */}
				
				{modalImage && (
				<>
				<div className='arrowButtonsContainer'>
					{imageIndex > 0 && (
						<button className='leftArrowButton' onClick={leftArrowClick}>
							<img src = {leftArrow} className='arrowButtonImage'></img>
						</button>
					)}
					
					{imageIndex < presets[presetIndex].images.length - 1 && ( 
						<button className='rightArrowButton' onClick={rightArrowClick}>
							<img src = {rightArrow} className='arrowButtonImage'></img>
						</button>
					)}

				</div>
						<div className='greyOverlay' onClick={handleClose}></div>
						<div className='enlargedImageContainer'>
							<img className='enlargedImage' src={modalImage}></img>
				</div>
				</>
			)}
				</div>
			</div>

		
			
        </>
    );
}

export default ThreeDCollection;