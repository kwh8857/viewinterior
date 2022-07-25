import React, { useRef } from "react";
import useScrollFadeIn from "../../../lib/useScrollFadeIn";

function ImageBox({ data }) {
  const imageRef = useRef(null);
  useScrollFadeIn(0, imageRef);
  return (
    <div className="img-wrapper" ref={imageRef}>
      <img
        src={`/assets/main/${data}.jpg`}
        srcSet={`/assets/main/${data}@2x.jpg 2x , /assets/main/${data}@3x.jpg 3x`}
        alt=""
      />
    </div>
  );
}

export default ImageBox;
