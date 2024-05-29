import './3DPage.css'
import React, { useEffect, useState } from "react";

import CoverImage3D from './assets/Images/3DCoverWide.png';
import leftArrow from './assets/Images/arrow_button_left.png';
import rightArrow from './assets/Images/arrow_button_right.png';

import * as GalleryImages from './assets/3DGalleryRenders/Characters/imageExport';
import Navbar from './assets/Components/NavBar/Navbar';

function ThreeDCollection(){
	const presetsOfCharacters = [
		{id:4, name:'Eldritch Witch', images:[GalleryImages.NF_1,GalleryImages.NF_2,GalleryImages.NF_4,GalleryImages.NF_3]},
		{id:3, name:'Eldritch Warlock', images:[GalleryImages.NM_1,GalleryImages.NM_2,GalleryImages.NM_3,GalleryImages.NM_4]},
		{id:1, name:'Desert Tribes Assassin Female', images:[GalleryImages.AF_1,GalleryImages.AF_2,GalleryImages.AF_3,GalleryImages.AF_4]},
		{id:2, name:'Desert Tribes Assassin Male', images:[GalleryImages.AM_1,GalleryImages.AM_2,GalleryImages.AM_3,GalleryImages.AM_4]},
		{id: 6, name: 'Dark Woods Warrior', images: [GalleryImages.MeM_1, GalleryImages.MeM_2, GalleryImages.MeM_3, GalleryImages.MeM_4] },
		{id: 5, name: 'Dark Woods Archer', images: [GalleryImages.MeF_1, GalleryImages.MeF_2, GalleryImages.MeF_3, GalleryImages.MeF_4] },
		{ id: 7, name: 'Dwarf Pirate', images: [GalleryImages.BF_1, GalleryImages.BF_2, GalleryImages.BF_3, GalleryImages.BF_4] },
    	{ id: 8, name: 'Minotaur Pirate', images: [GalleryImages.BM_1, GalleryImages.BM_2, GalleryImages.BM_3, GalleryImages.BM_4] }
	];
	
	const presetOfObjects = [
		{ id: 1, name: 'Crab Lantern', images: [GalleryImages.C_1, GalleryImages.C_2, GalleryImages.C_3, GalleryImages.C_W] },
		{ id: 2, name: 'Eel Lamp', images: [GalleryImages.E_1, GalleryImages.E_2, GalleryImages.E_3, GalleryImages.E_W] },
		{ id: 3, name: 'Jellyfish Compass', images: [GalleryImages.J_1, GalleryImages.J_2, GalleryImages.J_3, GalleryImages.J_W] },
		{ id: 4, name: 'Shark Lamp', images: [GalleryImages.S_1, GalleryImages.S_2, GalleryImages.S_3, GalleryImages.S_W] },
		{ id: 5, name: 'Octopus Bottle', images: [GalleryImages.T_1, GalleryImages.T_2, GalleryImages.T_3, GalleryImages.T_W] },
		{ id: 6, name: 'Faberge Egg', images: [GalleryImages.Egg_1, GalleryImages.Egg_W] }
	];
	//An array to store the names of the first image of each object
	const displayImages = presetsOfCharacters.map(presetsOfCharacters => presetsOfCharacters.images[0]);
	
	//Tracks currently selected object in the presetsOfCharacters array
	const [presetIndex, setPresetIndex] = useState(0);

	//Tracks currently displayed image within the selected presetsOfCharacters' images array
    const [imageIndex, setImageIndex] = useState(0);
	
	//Click on an image to enlarge it in a modal form
	const [modalImage, setModalImage] = useState(null);

	const handleClick = (presetId) => {
		const selectedPreset = presetsOfCharacters.find(p => p.id === presetId);
		console.log("Selected Preset:", selectedPreset);

		if (selectedPreset) {
			setPresetIndex(presetsOfCharacters.indexOf(selectedPreset)); // Find the index of the selected preset
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
				onClick={() => handleClick(presetsOfCharacters[i].id)}
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
							setModalImage(presetsOfCharacters[presetIndex].images[newIndex]);				//updates Modal, the 'display' image
							return newIndex;													//returns newIndex so the previous line will update correctly
						});
					
				} else if (event.key === "ArrowRight") {
					setImageIndex(prevIndex => {
							const newIndex = prevIndex === presetsOfCharacters[presetIndex].images.length - 1 ? prevIndex : prevIndex + 1;
							setModalImage(presetsOfCharacters[presetIndex].images[newIndex]);
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
		}, [presetIndex, presetsOfCharacters]);

		//Cycle through the .images[index] with <- and -> arrow buttons
		const leftArrowClick = () => {
			setImageIndex(prevIndex => {
			const newIndex = prevIndex === 0 ? prevIndex : prevIndex - 1;
			setModalImage(presetsOfCharacters[presetIndex].images[newIndex]);
			return newIndex;
			});
		};

		const rightArrowClick = () => {
			setImageIndex(prevIndex => {
				const newIndex = prevIndex === presetsOfCharacters[presetIndex].images.length - 1 ? prevIndex : prevIndex + 1;
				setModalImage(presetsOfCharacters[presetIndex].images[newIndex]);
				return newIndex;
			});
		};

	return(
        <>
		{/* Gallery images display */}
			<div className="backgroundColor">
				<Navbar/>
				<div className='galleryImages'>
					<img className="displayImage3D" src={CoverImage3D}></img>
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
					
					{imageIndex < presetsOfCharacters[presetIndex].images.length - 1 && ( 
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
			

		
			
        </>
    );
}

export default ThreeDCollection;