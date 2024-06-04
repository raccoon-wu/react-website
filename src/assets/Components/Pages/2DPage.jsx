import React from "react";
import NavBar from "../NavBar/Navbar.jsx";

// function Gallery2D() {
//   return (
//     <>
//         <NavBar/>
//         <h1>AM 2D PAGE</h1>
//     </>
//   );
// }

// export default Gallery2D;

function Gallery2D({ presetState, setPresetState }) {
  
  return (
    <>
        <NavBar setPresetState={setPresetState}/>
        <h1>AM 2D PAGE, current state is {presetState}</h1>
        <Renderer presetState={presetState}/>
    </>
  );
}

export default Gallery2D;
