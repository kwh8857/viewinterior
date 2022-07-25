import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Infinite from "../../components/Infinite/Infinite";
import Navigation from "../../components/Navgation/Navigation";
import firebaseApp from "../../config/firebaseApp";
import "./css/index.css";
const Fstore = firebaseApp.firestore();
function Portfolio({ agent }) {
  const [category, setCategory] = useState("all");
  const [catindex, setCatindex] = useState(0);
  const [isopen, setIsopen] = useState(false);
  const [page, setpage] = useState(1);
  const [List, setList] = useState([]);

  useEffect(() => {
    if (category === "all") {
      Fstore.collection("editor")
        .where("isopen", "==", true)
        .orderBy("ispin", "desc")
        .orderBy("timestamp", "desc")

        .limit(9 * page)
        .get()
        .then((res) => {
          if (!res.empty) {
            let arr = [];
            res.forEach((item) => {
              arr.push(item.data());
            });
            setList(arr);
          } else {
            setList([]);
          }
        });
    } else {
      Fstore.collection("editor")
        .orderBy("ispin", "desc")
        .orderBy("timestamp", "desc")
        .where("isopen", "==", true)
        .where("category", "==", category)
        .limit(9 * page)
        .get()
        .then((res) => {
          if (!res.empty) {
            let arr = [];
            res.forEach((item) => {
              arr.push(item.data());
            });
            setList(arr);
          } else {
            setList([]);
          }
        });
    }

    return () => {};
  }, [category, page]);
  return (
    <main className="port">
      <div className="top">
        <Navigation type="who" top={90} />
        <div className="title">VIEW PORTFOLIO</div>
        <div className="nav-wrapper">
          <div className="wrapper">
            {arr.map(({ title, type }, idx) => {
              return (
                <button
                  key={idx}
                  className={`${type === category ? "active" : ""}`}
                  onClick={() => {
                    setpage(1);
                    setList([]);
                    setCategory(type);
                    setCatindex(idx);
                  }}
                >
                  {title}
                </button>
              );
            })}
            <div
              className="nav-bar"
              style={
                agent === "pc"
                  ? { left: `${catindex * 129}px` }
                  : { left: `${catindex * 113}px` }
              }
            />
          </div>
          <div className="mb-wrapper">
            <div
              className="now"
              onClick={() => {
                setIsopen(!isopen);
              }}
            >
              {arr[catindex].title}
              <img
                src="/assets/port/arrow.svg"
                alt=""
                className={`${isopen ? "reverse" : ""}`}
              />
            </div>
            <div className={`cat-wrapper ${isopen ? "open" : ""}`}>
              {arr.map(({ title, type }, idx) => {
                return (
                  <button
                    className={`${type === category ? "active" : ""}`}
                    key={idx}
                    onClick={() => {
                      setpage(1);
                      setIsopen(false);
                      setCategory(type);
                      setCatindex(idx);
                    }}
                  >
                    {title}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="list">
        <div className="wrapper">
          {List.map((item, idx) => {
            return <Card key={idx} data={item} />;
          })}
          <Infinite setPage={setpage} />
        </div>
      </div>
    </main>
  );
}

export default Portfolio;

const arr = [
  {
    title: "ALL",
    type: "all",
  },
  {
    title: "주거공간",
    type: "space",
  },
  { title: "상업공간", type: "store" },
  { title: "주택건축", type: "home" },
  { title: "관공시설", type: "public" },
];
