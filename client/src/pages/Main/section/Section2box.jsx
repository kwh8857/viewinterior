import React, { useRef } from "react";
import useScrollFadeIn from "../../../lib/useScrollFadeIn";
import { Box } from "../style/mainstyle";
import ImageBox from "./ImageBox";

function Section2box({
  idx,
  data: { title, category, link, sub, images, btn, tabletsub, mbsub },
  agent,
  navigate,
}) {
  const dom = useRef(null);
  useScrollFadeIn(0, dom);
  return (
    <Box index={idx}>
      {idx === 1 && agent !== "mb" ? (
        <React.Fragment>
          <div className="right">
            {images.map((item, idx) => {
              return <ImageBox key={idx} data={item} />;
            })}
          </div>
          <div className="left" ref={dom}>
            <div className="title">
              {title}
              {agent !== "pc" ? <br /> : undefined}
              <span>{category}</span>
            </div>
            <div className="sub">{agent === "mb" ? mbsub : sub}</div>
            <div
              className="btn-wrapper"
              onClick={() => {
                navigate({ pathname: link });
              }}
            >
              <span>{btn}</span>
              <div className="arrow">
                <div className="right-line" />
                <div className="line" />
              </div>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <>
          {" "}
          <div className="left" ref={dom}>
            <div className="title">
              {title}
              {idx === 2 || agent !== "pc" ? <br /> : undefined}
              <span>{category}</span>
            </div>
            <div className="sub">
              {agent === "tablet" ? tabletsub : agent === "mb" ? mbsub : sub}
            </div>
            <div
              className="btn-wrapper"
              onClick={() => {
                navigate({ pathname: link });
              }}
            >
              <span>{btn}</span>
              <div className={`arrow`}>
                <div className="right-line" />
                <div className={`line ${idx === 2 ? "two" : ""}`} />
              </div>
            </div>
          </div>
          <div className="right">
            {images.map((item, idx) => {
              return <ImageBox key={idx} data={item} />;
            })}
          </div>
        </>
      )}
    </Box>
  );
}

export default Section2box;
