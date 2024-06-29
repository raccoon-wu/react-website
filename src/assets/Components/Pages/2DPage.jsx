import React from "react";
import NavBar from "../NavBar/Navbar.jsx";
import { Link } from "react-router-dom";
import Renderer from '../Renderer.jsx'
import { presetsOf2DMinions, presetsOf2DCharacters } from '../../2DGalleryRenders/2DPresets.js';

function Page2D({set2DPreset, get2DPreset}){
  return (
    <>
        <Renderer set2DPreset={set2DPreset} get2DPreset={get2DPreset}></Renderer>
    </>
  );
}

export default Page2D;
