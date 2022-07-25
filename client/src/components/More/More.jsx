import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import firebaseApp from "../../config/firebaseApp";
import Infinite from "../Infinite/Infinite";
import "./css/index.css";
const Fstore = firebaseApp.firestore();

function More({ timestamp }) {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [List, setList] = useState([]);

  useEffect(() => {
    Fstore.collection("editor")
      .where("isopen", "==", true)
      .limit(6 * page)
      .get()
      .then((res) => {
        let arr = [];
        res.forEach((item) => {
          const data = item.data();
          if (data.timestamp !== parseInt(timestamp)) {
            arr.push(data);
          }
        });
        setList(arr);
      });

    return () => {};
  }, [timestamp, page]);

  return (
    <div className="more">
      <div className="wrapper">
        <div className="title">더 많은 공간을 만나보세요</div>
        <div className="list">
          <div className="list-wrapper">
            {List.map(({ title, timestamp, category, mainimg }, idx) => {
              return (
                <div
                  className="card"
                  key={idx}
                  onClick={() => {
                    navigate(`/portfolio/detail/${timestamp}`);
                  }}
                >
                  <img src={mainimg.resize} alt="" />
                  <div className="category">
                    {category === "space"
                      ? "주거공간"
                      : category === "store"
                      ? "상업공간"
                      : category === "home"
                      ? "주택건축"
                      : "관공시설"}{" "}
                  </div>
                  <div className="title">{title}</div>
                </div>
              );
            })}
            <Infinite setPage={setPage} />
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/portfolio");
          }}
        >
          PORTFOLIO
          <img src="/assets/port/white-arrow.svg" alt="" />
        </button>
      </div>
    </div>
  );
}

export default More;
