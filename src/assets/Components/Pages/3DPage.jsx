import React from "react";
import Renderer from '../Renderer.jsx'

function Page3D({set3DPreset, get3DPreset}){
  return (
    <>
        <Renderer set2DPreset={set3DPreset} get3DPreset={get3DPreset} ></Renderer>
    </>
  );
}

export default Page3D;