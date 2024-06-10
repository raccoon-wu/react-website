import React from "react";
import NavBar from "../NavBar/Navbar.jsx";
import { Link } from "react-router-dom";
import Renderer from '../Renderer.jsx'

function Page2D(set2DPreset, get2DPreset){
  return (
    <>
        <Renderer></Renderer>
        <Link to="/"><button>Home</button></Link>
    </>
  );
}

export default Page2D;
