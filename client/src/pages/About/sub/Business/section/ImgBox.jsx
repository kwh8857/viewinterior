import React, { useRef } from "react";
import useScrollFadeIn from "../../../../../lib/useScrollFadeIn";

function ImgBox({ item }) {
  const dom = useRef(null);
  useScrollFadeIn(0, dom);
  return (
    <div className="img-wrapper" ref={dom}>
      <img
        src={`/assets/about/business/${item}.jpg`}
        srcSet={`/assets/about/business/${item}@2x.jpg 2x, /assets/about/business/${item}@3x.jpg 3x`}
        alt=""
      />
    </div>
  );
}

export default ImgBox;
