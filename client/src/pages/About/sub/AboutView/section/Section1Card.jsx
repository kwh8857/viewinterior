import React, { useRef } from "react";
import useScrollFadeIn from "../../../../../lib/useScrollFadeIn";

function Section1Card({ data: { title, category, content, img } }) {
  const dom = useRef(null);
  useScrollFadeIn(0, dom);
  return (
    <div className="box" ref={dom}>
      <img src={`/assets/main/${img}.svg`} alt="" />
      <div className="category">{category}</div>
      <div className="title">{title}</div>
      <div className="content">{content}</div>
    </div>
  );
}

export default Section1Card;
