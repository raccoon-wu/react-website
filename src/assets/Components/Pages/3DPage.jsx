import React, { useState }from "react";
import NavBar from "../NavBar/Navbar.jsx";
import { Link } from 'react-router-dom';
import Renderer from "../Renderer.jsx";
// import { presetsOf3DCharacters } from "../../3DGalleryRenders/3DPresets.js";

function Gallery3D({ presetState, setPresetState }) {
  
  return (
    <>
        {/* <NavBar/> */}
        <h1>AM 3D PAGE</h1>
    </>
  );
}

export default Gallery3D;

// import React from "react";
// import './3DPage.css'

// import CoverImage3D from './assets/Images/3DCoverWide.png';

// import AF_1 from './assets/3DGalleryRenders/AF_1.png';
// import AF_2 from './assets/3DGalleryRenders/AF_2.png';
// import AM_1 from './assets/3DGalleryRenders/AM_1.png';
// import AM_2 from './assets/3DGalleryRenders/AM_2.png';

// import NM_1 from './assets/3DGalleryRenders/NM_1.png';
// import NM_2 from './assets/3DGalleryRenders/NM_2.png';
// import NF_1 from './assets/3DGalleryRenders/NF_1.png';
// import NF_2 from './assets/3DGalleryRenders/NF_2.png';

// function ThreeDCollection() {
// 	const presets = [
// 		{ id: 4, name: 'Necromancer Female', images: [NF_1, NF_2] },
// 		{ id: 3, name: 'Necromancer Male', images: [NM_1, NM_2] },
// 		{ id: 1, name: 'Assasin Female', images: [AF_1, AF_2] },
// 		{ id: 2, name: 'Assasin Male', images: [AM_1, AM_2] }
// 
// 	];

// 	//An array to store the names of the first image of each object
// 	const displayImages = presets.map(presets => presets.images[0]);

// 	//An array to hold the JSX Elements
// 	const imageElements = [];

// 	for (let i = 0; i < displayImages.length; i++) {
// 		imageElements.push(
// 			<img className="images" key={i} src={displayImages[i]} alt={presets.name}></img>
// 		);
// 	}

// 	function handleMouseEnter(event, text) {
// 		const target = event.target;
// 		const div = document.querySelector('.hoverText');
// 		div.textContent = text;
// 	}


// 	return (
// 		<>
// 			<div className="backgroundColor">
// 				<img className="displayImage3D" src={CoverImage3D}></img>
// 				<div className="galleryContainer">
// 					{imageElements}
// 				</div>
// 			</div>
// 		</>
// 	);
// }

// export default ThreeDCollection;