import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import More from "../../components/More/More";
import Navigation from "../../components/Navgation/Navigation";
import DoubleImage from "../../components/Templates/DoubleImage";
import Image from "../../components/Templates/Image";
import Text from "../../components/Templates/Text";
import Youtube from "../../components/Templates/Youtube";
import firebaseApp from "../../config/firebaseApp";
import "./css/index.css";
const Fstore = firebaseApp.firestore();
function Detail() {
  const location = useLocation();
  const timestamp = location.pathname.split("/")[3];
  const [data, setData] = useState(undefined);

  useEffect(() => {
    Fstore.collection("editor")
      .where("timestamp", "==", parseInt(timestamp))
      .get()
      .then((res) => {
        res.forEach((item) => {
          setData(item.data());
        });
      });

    return () => {
      setData(undefined);
    };
  }, [location, timestamp]);

  return (
    <main className="detail">
      <div className="top">
        <Navigation type="who" top={90} />
        <div className="title">VIEW PORTFOLIO</div>
      </div>
      <div className="bottom">
        {data ? (
          <div className="wrapper">
            <div className="title-section">
              <div className="title">{data.title}</div>
              <div className="subject">
                <div className="category">
                  {data.category === "space"
                    ? "주거공간"
                    : data.category === "store"
                    ? "상업공간"
                    : data.category === "home"
                    ? "주택건축"
                    : "관공시설"}
                </div>
                <div className="sub">{data.sub}</div>
              </div>
            </div>
            <div className="template-wrapper">
              {data.template.map(({ type, content }, idx) => {
                if (type === "TITLE") {
                  return <Text key={idx} data={content} />;
                } else if (type === "YOUTUBE") {
                  return <Youtube key={idx} data={content} />;
                } else if (type === "IMAGE" || type === "SMALL") {
                  return <Image key={idx} data={content} type={type} />;
                } else {
                  return <DoubleImage key={idx} data={content} type={type} />;
                }
              })}
            </div>
          </div>
        ) : undefined}
      </div>
      <More timestamp={timestamp} />
    </main>
  );
}

export default Detail;
