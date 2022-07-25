import React from "react";
import Address from "../../components/Address/Address";
import Navigation from "../../components/Navgation/Navigation";
import "./css/index.css";

function Showroom({ agent }) {
  return (
    <main className="showroom">
      <div className="top">
        <Navigation type="who" top={90} />
        <div className="title">VIEW SHOWROOM</div>
      </div>
      <div className="bottom">
        <div className="wrapper">
          {arr.map((item, idx) => {
            return <Address key={idx} data={item} agent={agent} />;
          })}
        </div>
      </div>
    </main>
  );
}

export default Showroom;

const arr = [
  {
    id: "view",
    title: "주식회사뷰 본사",
    address: "대구광역시 달서구 달서대로 555, 212호",
    time: "8:00 ~ 19:00",
    position: {
      lat: 35.8484449,
      lng: 128.4912788,
    },
  },
  {
    id: "in",
    title: "연구소기업 / 기업부설연구소",
    address: `경상북도 경산시 삼풍로 27, 경북테크노파크
412호`,
    time: "8:00 ~ 19:00",
    position: {
      lat: 35.82435,
      lng: 128.756263,
    },
  },
  {
    id: "end",
    title: "앤드뷰",
    address: "대구광역시 수성구 동대구로 336, 201호",
    time: "8:00 ~ 19:00",
    position: {
      lat: 35.860412,
      lng: 128.627436,
    },
  },
];
