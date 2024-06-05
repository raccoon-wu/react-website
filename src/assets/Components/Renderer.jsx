import React from "react";
import { presetsOf3DCharacters } from "../3DGalleryRenders/3DPresets";

function Renderer({presetState}) {
  const name = presetState;
  return (
    <h1>Deadges in deadge {name}</h1>

  );
}

export default Renderer;
