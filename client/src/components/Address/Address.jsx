import React, { useCallback } from "react";
import "./css/index.css";
import NaverMaps from "./components/NaverMap";

function Address({
  data: {
    title,
    address,
    time,
    position: { lat, lng },
    id,
  },
  agent,
}) {
  const __board = useCallback(() => {
    navigator.clipboard
      .writeText(address)
      .then(() => {
        alert("주소가 복사되었습니다");
      })
      .catch(() => {});
  }, [address]);

  return (
    <div className="address-card">
      <div className="left">
        <div className="title">{title}</div>
        <div className="line" />
        <div className="content-wrapper">
          <div className="content">
            <div className="tag">주소</div>
            <div className="content">{address}</div>
          </div>
          <div className="content">
            <div className="tag">상담시간</div>
            <div className="content">{time}</div>
          </div>
        </div>
        <button onClick={__board}>
          <img src="/assets/showroom/address.svg" alt="" />
          주소복사
        </button>
      </div>

      <NaverMaps id={id} lat={lat} lng={lng} agent={agent} />
    </div>
  );
}

export default Address;
