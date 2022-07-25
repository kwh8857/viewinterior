import React from "react";
import Navigation from "../../../../components/Navgation/Navigation";
import { BusinessSection } from "../../style/aboutstyled";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";
import Section2Box from "./section/Section2Box";
function Business({ agent }) {
  const navigate = useNavigate();
  const _nav = useCallback(() => {
    navigate({ pathname: "/portfolio" });
  }, [navigate]);
  return (
    <BusinessSection>
      <div className="section1">
        <div className="wrapper">
          {agent === "pc" ? <Navigation agent={agent} top={108} /> : undefined}
          <div className="title">VIEW BUSINESS</div>
          <div className="sub">
            뷰인테리어는 <br /> 다양한 클라이언트와 함께합니다
          </div>
          <div className="list">
            {section1Arr.map(({ number, title }, idx) => {
              return (
                <div key={idx} className="box">
                  <CountUp end={number} duration={1} className="number" />
                  <div className="title">{title}</div>
                </div>
              );
            })}
          </div>
          <div className="ball one">
            <img src="/assets/about/business/ball.svg" alt="" />
          </div>
          <div className="ball two">
            <img src="/assets/about/business/ball.svg" alt="" />
          </div>
          <div className="ball three">
            <img src="/assets/about/business/ball.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="wrapper">
          {section2Arr.map((item, idx) => {
            return (
              <Section2Box
                key={idx}
                data={item}
                idx={idx}
                agent={agent}
                _nav={_nav}
              />
            );
          })}
        </div>
        <div className="nav-btn" onClick={_nav}>
          <div className="text">MORE PORTFOLIO</div>
          <div className="img-wrapper">
            <svg
              width="100%"
              height="7"
              viewBox="0 0 52 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0.255859 6H50.2864L43.6559 0.5" stroke="white" />
            </svg>
          </div>
        </div>
      </div>
      {/* <div className="section3">
        <div className="wrapper" ref={section3Ref}>
          <div className="title">PARTNER</div>
          <div className="line" />
          <div className="sub">
            다양한 업체와 협력하여{agent === "mb" ? <br /> : undefined}{" "}
            비즈니스를 만들어갑니다.
          </div>
          <div className="img-wrapper">
            <img
              src={`/assets/about/business/partner${
                agent === "mb" ? "-mb" : ""
              }.png`}
              srcSet={`/assets/about/business/partner${
                agent === "mb" ? "-mb" : ""
              }@2x.png 2x, /assets/about/business/partner${
                agent === "mb" ? "-mb" : ""
              }@3x.png 3x`}
              alt=""
            />
          </div>
        </div>
      </div> */}
    </BusinessSection>
  );
}

export default Business;

const section1Arr = [
  {
    number: 2834,
    title: "거주공간",
  },
  {
    number: 356,
    title: "상업공간",
  },
  {
    number: 51,
    title: "관공서/학교",
  },
];
const section2Arr = [
  {
    title: "COMMERCIAL SPACE",
    category: "상업공간",
    content: `새로운 비즈니스가 시작되고 사람과 사람이 만나는 장소
회사의 꿈을 담은 공간을 뷰인테리어의 감각으로 만들어냅니다.`,
    mbcontent: `새로운 비즈니스가 시작되고 사람과
사람이 만나는 장소 회사의 꿈을 담은 공간을
뷰인테리어의 감각으로 만들어냅니다.`,
    images: ["commercial1", "commercial2", "commercial3"],
  },
  {
    title: "HOUSING SPACE",
    category: "주거공간",
    content: `나와 가족의 소중한 하루가 그려지는 공간
편안하고 자유로운 실내인테리어를 전문적으로 제공합니다.`,
    mbcontent: `나와 가족의 소중한 하루가 그려지는 공간 편안하고
자유로운 실내인테리어를 전문적으로 제공합니다.`,
    images: ["housing1", "housing2", "housing3"],
  },
  {
    title: "GOVERMENT / SCHOOL ",
    category: "학교 / 관공서",
    content: `더 큰 사회와 미래를 고민하는 공간
개방성과 효율성을 높이는 디자인을 목표합니다.`,
    mbcontent: `더 큰 사회와 미래를 고민하는 공간 개방성과
효율성을 높이는 디자인을 목표합니다.`,
    images: ["goverment1", "goverment2", "goverment3"],
  },
];
