import React from "react";

import { NaverMap, Marker } from "react-naver-maps";
function NaverMaps({ id, lat, lng, agent }) {
  const navermaps = window.naver.maps;
  return (
    <NaverMap
      className="map"
      style={
        agent === "pc"
          ? { width: "539px", height: "226px" }
          : agent === "tablet"
          ? { width: "100%", height: "295px" }
          : { width: "320px", height: "210px" }
      }
      defaultCenter={{ lat, lng }}
      defaultZoom={16}
      id={`naver-map-${id}`}
    >
      <Marker position={new navermaps.LatLng(lat, lng)} />
    </NaverMap>
  );
}

export default NaverMaps;
