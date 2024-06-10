import React from "react";
import { useLocation } from 'react-router-dom';

function Renderer() {

  const location = useLocation();

  return (
    <>
      {location.pathname.toLowerCase() === "/3dgallery" && 
      <>
            <p>Page is 3D now</p>
      </>
      }      

      {location.pathname.toLowerCase() === "/2dgallery" && 
      <>
            <p>Page is 222222D now</p>
      </>
      }     
    </>


  );
}

export default Renderer;
