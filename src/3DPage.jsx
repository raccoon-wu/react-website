import './3DPage.css'
import React, { useEffect, useState } from "react";

import CoverImage3D from './assets/Images/3DCoverWide.png';
import leftArrow from './assets/Images/arrow_button_left.png';
import rightArrow from './assets/Images/arrow_button_right.png';
import Navbar from './assets/Components/NavBar/Navbar';
import * as Char3D from './assets/3DGalleryRenders/Characters/imageExport.js';
import * as Obj3D from './assets/3DGalleryRenders/Objects/objectImport.js';
import iceEnviron from './assets/3DGalleryRenders/Environments/Ice.png';

function ThreeDCollection(){

	    //3D Gallery Characters
		const presetsOfCharacters = [
			{id:4, name:'Eldritch Witch', images:[Char3D.NF_1,Char3D.NF_2,Char3D.NF_4,Char3D.NF_3]},
			{id:3, name:'Eldritch Warlock', images:[Char3D.NM_1,Char3D.NM_2,Char3D.NM_3,Char3D.NM_4]},
			{id:1, name:'Desert Tribes Assassin Female', images:[Char3D.AF_1,Char3D.AF_2,Char3D.AF_3,Char3D.AF_4]},
			{id:2, name:'Desert Tribes Assassin Male', images:[Char3D.AM_1,Char3D.AM_2,Char3D.AM_3,Char3D.AM_4]},
			{id: 6, name: 'Dark Woods Warrior', images: [Char3D.MeM_1, Char3D.MeM_2, Char3D.MeM_3, Char3D.MeM_4] },
			{id: 5, name: 'Dark Woods Archer', images: [Char3D.MeF_1, Char3D.MeF_2, Char3D.MeF_3, Char3D.MeF_4] },
			{ id: 7, name: 'Dwarf Pirate', images: [Char3D.BF_1, Char3D.BF_2, Char3D.BF_3, Char3D.BF_4] },
			{ id: 8, name: 'Minotaur Pirate', images: [Char3D.BM_1, Char3D.BM_2, Char3D.BM_3, Char3D.BM_4] }
		];
	
		//3D Gallery Objects
		const presetOfObjects = [
			{ id: 1, name: 'Crab Lantern', images: [Obj3D.C_1, Obj3D.C_2, Obj3D.C_3, Obj3D.C_W] },
			{ id: 2, name: 'Eel Lamp', images: [Obj3D.E_1, Obj3D.E_2, Obj3D.E_3, Obj3D.E_W] },
			{ id: 3, name: 'Jellyfish Compass', images: [Obj3D.J_1, Obj3D.J_2, Obj3D.J_3, Obj3D.J_W] },
			{ id: 4, name: 'Shark Lamp', images: [Obj3D.S_1, Obj3D.S_2, Obj3D.S_3, Obj3D.S_W] },
			{ id: 5, name: 'Octopus Bottle', images: [Obj3D.T_1, Obj3D.T_2, Obj3D.T_3, Obj3D.T_W] },
			{ id: 6, name: 'Faberge Egg', images: [Obj3D.Egg_1, Obj3D.Egg_W] }
		];
	
		//3D Gallery Environments
		const presetOfEnvironments = [
			{ id: 1, name: 'Frosted Cave', images: [iceEnviron] }
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