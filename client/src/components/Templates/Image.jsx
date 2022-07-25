import React, { useRef } from "react";
import "./css/index.css";
function Image({ data: { url, resize }, type }) {
  const reRef = useRef(null);

  return (
    <div className={`img-wrapper ${type}`}>
      <img src={resize} alt="" className="resize" ref={reRef} />
      <img src={url} alt="" className="url" />
    </div>
  );
}

export default Image;
