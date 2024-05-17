import React from "react";
import './3DPage.css'

import AF_1 from './assets/3DGalleryRenders/AF_1.png';
import AF_2 from './assets/3DGalleryRenders/AF_2.png';
import NM_1 from './assets/3DGalleryRenders/NM_1.png';
import NM_2 from './assets/3DGalleryRenders/NM_2.png';

function ThreeDCollection(){
	const presets = [
		{id:1, name:'Assasin Female', images:[AF_1,	AF_2]},
		{id:2, name:'Necromancer Male', images:[NM_1,NM_2]}
	];
	
	//An array to store the names of the first image of each object
	const displayImages = presets.map(presets => presets.images[0]);
	
	//An array to hold the JSX Elements
	const imageElements = [];

	for (let i=0; i<displayImages.length;i++)
		{
			imageElements.push(
				<img className = "images" key={i} src={displayImages[i]} alt={presets.name}></img>
			);
		}

	return(
        <>
			<div className="backgroundColor">
				<div className="galleryContainer">
						{imageElements}
				</div>
			</div>
        </>
    );
}

export default ThreeDCollection;