import React, { useRef } from "react";
import useScrollFadeIn from "../../../../../lib/useScrollFadeIn";

function Section3Card({
  data: { img, title, sub, content, logo, mbcontent },
  agent,
}) {
  const dom = useRef(null);
  useScrollFadeIn(0, dom);
  return (
    <div className="box" ref={dom}>
      <div className="img-wrapper">
        <img
          src={`/assets/main/${img}.png`}
          srcSet={`/assets/main/${img}@2x.png 2x, /assets/main/${img}@3x.png 3x`}
          alt=""
        />
      </div>
      <div className="content-wrapper">
        <div className="top">
          <div className="left">
            <div className="title">{title}</div>
            <div className="sub">{sub}</div>
          </div>
          {agent !== "mb" ? (
            <div className="logo">
              <img
                src={`/assets/main/${logo}.png`}
                srcSet={`/assets/main/${logo}@2x.png 2x, /assets/main/${logo}@3x.png 3x`}
                alt=""
              />
            </div>
          ) : undefined}
        </div>
        <div className="line" />
        <div className="bottom">
          {agent === "mb" && mbcontent ? mbcontent : content}
        </div>
      </div>
      {agent === "mb" ? (
        <div className="logo">
          <img
            src={`/assets/main/${logo}.png`}
            srcSet={`/assets/main/${logo}@2x.png 2x, /assets/main/${logo}@3x.png 3x`}
            alt=""
          />
        </div>
      ) : undefined}
    </div>
  );
}

export default Section3Card;
