import React, { useRef } from "react";
import useScrollFadeIn from "../../../lib/useScrollFadeIn";
import { BusinessBox } from "../style/mainstyle";

function Section3Box({
  data: { category, title, content, img, tabletcontent },
  idx,
  agent,
}) {
  const dom = useRef(null);
  useScrollFadeIn(0, dom);
  return (
    <BusinessBox index={idx} ref={dom}>
      <div className="img-wrapper">
        <img src={`/assets/main/${img}.svg`} alt="" />
      </div>
      <div className="category">{category}</div>
      <div className="title">{title}</div>
      <div className="content">
        {idx === 1 && agent === "tablet" ? tabletcontent : content}
      </div>
    </BusinessBox>
  );
}

export default Section3Box;
