import React from "react";
import '@google/model-viewer/dist/model-viewer';

const Model = ({ children }) => {
  
  return (
    <>
      <model-viewer
        id="my-model-viewer"
        src="/models/NeilArmstrong.glb"
        ios-src=""
        // poster="https://cdn.glitch.com/36cb8393-65c6-408d-a538-055ada20431b%2Fposter-astronaut.png?v=1599079951717"
        alt="A 3D model of an astronaut"
        touch-action="pan-y" 
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar-modes="webxr scene-viewer quick-look"
        ar
      >
        {
          children
        }
      </model-viewer>
    </>
  )
}

export default Model;