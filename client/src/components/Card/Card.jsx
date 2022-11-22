import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  const navigate = useNavigate();

  const {
    category,
    title,
    mainimg: { resize },
    timestamp,
  } = data;
  const [imageurl, setImageurl] = useState(resize);
  useEffect(() => {
    setImageurl(resize);

    return () => {};
  }, [resize]);

  return (
    <div
      className="card"
      onClick={() => {
        navigate(`/portfolio/detail/${timestamp}`);
      }}
    >
      <div className="main-img">
        <img src={imageurl} alt="" />
      </div>
      <div className="black-div" />
      <div className="category">
        {category === "space"
          ? "주거공간"
          : category === "store"
          ? "상업공간"
          : category === "home"
          ? "주택건축"
          : "관공시설"}
      </div>
      <div className="title">{title}</div>
    </div>
  );
}

export default Card;
