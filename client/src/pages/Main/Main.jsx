import React, { useRef } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ContactUs from "../../components/common/ContactUs";
import Floating from "../../components/Floating/Floating";
import useScrollFadeIn from "../../lib/useScrollFadeIn";
import Section2box from "./section/Section2box";
import Section3Box from "./section/Section3Box";
// import Section4Box from "./section/Section4Box";
import { MainSection, Section2, Section3, Section4 } from "./style/mainstyle";

function Main({ agent }) {
  const navigate = useNavigate();
  const titleRef = useRef(null);
  const section3Ref = useRef(null);
  useScrollFadeIn(0, titleRef);
  useScrollFadeIn(0, section3Ref);
  useEffect(() => {
    const img = new Image();
    img.src = "/assets/main/main-back.svg";
    return () => {};
  }, []);

  return (
    <MainSection>
      <Floating />
      <div className="top">
        <div className="wrapper">
          <div className="tri">
            <img src="/assets/main/main-back.svg" alt="" />
            <span>
              PREMIUM INTERIOR <br /> DESIGN GROUP <br /> VIEW INTERIOR
            </span>
          </div>
          <div className="title-wrapper">
            <div className="title">
              뛰어난 감각으로 보답하는 <br /> 검증된 인테리어 디자인 회사
            </div>
            <div className="sub">
              뷰인테리어는 경험을 포장하지 않습니다. <br className="mb" /> 2대에
              거쳐 성장하고 있는 인테리어 회사로
              <br className="mb" /> 노하우를 쌓으며 <br className="no-mb" />{" "}
              세련된 최신의 인테리어 감각을 덧입혀
              <br className="mb" /> 세대를 아우르는 감각을 가진 회사로 성장하고
              있습니다.
            </div>
            <div
              className="btn-wrapper"
              onClick={() => {
                navigate({ pathname: "/about" });
              }}
            >
              <span>ABOUT VIEW</span>
              <div className="arrow">
                <div className="right-line" />
                <div className="line" />
              </div>
            </div>
          </div>
          <video autoPlay loop muted playsInline preload="auto">
            {window.safari ? (
              <>
                <source src="/assets/video/main-3.mov" type="video/mp4" />
                <source src="/assets/video/main.webm" type="video/webm" />
              </>
            ) : (
              <>
                <source src="/assets/video/main.webm" type="video/webm" />
                <source src="/assets/video/main-3.mov" type="video/mp4" />
              </>
            )}
            지원하지 않는 브라우저입니다.
          </video>
        </div>
      </div>
      <Section2>
        <div className="wrapper">
          <div className="title-wrapper" ref={titleRef}>
            <div className="sub">시공분야</div>
            <div className="title">WHAT WE DO</div>
          </div>
          <div className="line"></div>
          <div className="list">
            {section2Arr.map((item, idx) => {
              return (
                <Section2box
                  key={idx}
                  idx={idx}
                  data={item}
                  agent={agent}
                  navigate={navigate}
                />
              );
            })}
          </div>
        </div>
      </Section2>
      <Section3>
        <div className="title" ref={section3Ref}>
          VIEW{agent === "mb" ? <br /> : undefined} BUSINESS PART
        </div>
        <div className="list">
          {section3Arr.map((item, idx) => {
            return (
              <Section3Box key={idx} data={item} idx={idx} agent={agent} />
            );
          })}
        </div>
      </Section3>
      <Section4>
        {/* <div className="wrapper">
          <div className="title" ref={section4Ref}>
            VIEW’s BRAND
          </div>
          <div className="list">
            {section4Arr.map((item, idx) => {
              return (
                <Section4Box key={idx} data={item} idx={idx} agent={agent} />
              );
            })}
          </div>
        </div> */}
      </Section4>
      <ContactUs agent={agent} />
    </MainSection>
  );
}

export default Main;

const section2Arr = [
  {
    title: "COMMERCIAL SPACE",
    category: "상업공간",
    link: "/portfolio",
    sub: `새로운 비즈니스가 시작되고 사람과 사람이 만나는 장소
회사의 꿈을 담은 공간을 뷰인테리어의 감각으로 만들어냅니다.`,
    tabletsub: `새로운 비즈니스가 시작되고 사람과 사람이 만나는 장소
회사의 꿈을 담은 공간을 
뷰인테리어의 감각으로 만들어냅니다.`,
    mbsub: `새로운 비즈니스가 시작되고
사람과 사람이 만나는 장소
회사의 꿈을 담은 공간을
뷰인테리어의 감각으로 만들어냅니다.`,
    images: ["s2-1", "s2-2", "s2-3"],
    btn: "상업공간 포트폴리오 더보기",
  },
  {
    title: "HOUSING SPACE",
    category: "주거공간",
    link: "/portfolio",
    sub: `나와 가족의 소중한 하루가 그려지는 공간
편안하고 자유로운 실내인테리어를 전문적으로 제공합니다.`,
    mbsub: `나와 가족의 소중한 하루가 그려지는 공간
편안하고 자유로운 실내인테리어를
전문적으로 제공합니다.`,
    images: ["s2-4", "s2-5", "s2-6"],
    btn: "주거공간 포트폴리오 더보기",
  },
  {
    title: "GOVERMENT / SCHOOL ",
    category: "학교 및 관공서",
    link: "/portfolio",
    sub: `더 큰 사회와 미래를 고민하는 공간
개방성과 효율성을 높이는 디자인을 목표합니다.`,
    tabletsub: `더 큰 사회와 미래를 고민하는 공간 개방성과 효율성을
높이는 디자인을 목표합니다.`,
    mbsub: `더 큰 사회와 미래를 고민하는 공간
개방성과 효율성을 높이는
디자인을 목표합니다.`,
    images: ["s2-7", "s2-8", "s2-9"],
    btn: "학교/관공서 포트폴리오 더보기",
  },
];
const section3Arr = [
  {
    category: "INTERIOR",
    title: "인테리어",
    content: `실내·외 전반적인 실내건축 인테리어
주요 사업 : 아파트, 주택, 상가, 
병원, 공장, 관공서, 학교 및 교육시설 등
`,
    img: "s3-1",
  },
  {
    category: "DESIGN",
    title: "설계",
    content: `실내 전반적인 실내건축 인테리어 설계
주요 사업 : 학교 내부 설계,
 대구테크노파크 등 관공서 내부 시설 설계`,
    tabletcontent: `실내 전반적인 실내건축 인테리어 
설계 주요 사업 : 학교 내부 설계, 
대구테크노파크 등
관공서 내부 시설 설계`,
    img: "s3-2",
  },
  {
    category: "CALCULATE",
    title: "적산",
    content: `실내건축에 대한 전체 적산 (물량산출)
주요 사업 : 학교 및 교육시설,
관공서에 대한 견적서 산출에 대한 적산
`,
    img: "s3-3",
  },
];
// const section4Arr = [
//   {
//     img: "s4-1",
//     title: "ANDVIEW",
//     sub: "앤드뷰",
//     content: `당사 자사 브랜드로써 인테리어
// 관련 소품, 악세서리 일체
// 주요 사업 : 블라인드, 커튼, 수입수전, 수입조명 등`,
//     logo: "s4-logo1",
//   },
//   {
//     img: "s4-2",
//     title: "VIEWFLEX",
//     sub: "뷰플렉스",
//     content: `당사 자사 브랜드로써 인테리어
// 관련 붙박이장, 싱크대 일체
// 주요 사업 : 붙박이장, 싱크대 (도장 제품/하이그로시 제품)`,
//     mbcontent: `당사 자사 브랜드로써 인테리어
//  관련 붙박이장, 싱크대 일체
// 주요 사업 : 붙박이장,
// 싱크대 (도장 제품/하이그로시 제품)
// `,
//     logo: "s4-logo2",
//   },
//   {
//     img: "s4-3",
//     title: "TOTALIOR",
//     sub: "토탈리어",
//     content: `당사 자사 브랜드로써 AR 시스템
// 기술이 접목된 APP 서비스
// 주요 사업 : 온라인 견적 문의 및 AR 시스템 접목 기술의 APP 서비스`,
//     mbcontent: `당사 자사 브랜드로써 AR 시스템
// 기술이 접목된 APP 서비스
// 주요 사업 : 온라인 견적 문의 및
// AR 시스템 접목 기술의 APP 서비스`,
//     logo: "s4-logo3",
//   },
// ];
