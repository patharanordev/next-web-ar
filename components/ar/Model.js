import React from "react";
import '@google/model-viewer/dist/model-viewer';

const ARModel = (props) => {
  
  return (
    <>
      <model-viewer
        id="model-viewer"
        src="/models/NeilArmstrong.glb"
        ios-src=""
        // poster=""
        alt="A 3D model"
        touch-action="pan-y" 
        shadow-intensity="1"
        camera-controls
        auto-rotate
        ar-modes="webxr scene-viewer quick-look"
        ar
      >
        {
          props.children
        }
      </model-viewer>
    </>
  )
}

export default ARModel;

ARModel.displayName = "ARModel"