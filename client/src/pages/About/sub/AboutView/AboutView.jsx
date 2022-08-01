import React, { useRef } from "react";
import ContactUs from "../../../../components/common/ContactUs";
import Navigation from "../../../../components/Navgation/Navigation";
import useScrollFadeIn from "../../../../lib/useScrollFadeIn";
import { AboutViewSection } from "../../style/aboutstyled";
import Section1Card from "./section/Section1Card";
import Section3Card from "./section/Section3Card";

function AboutView({ agent, navigate }) {
  const titleRef = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  useScrollFadeIn(0, titleRef);
  useScrollFadeIn(0, section2Ref);
  useScrollFadeIn(0, section3Ref);
  useScrollFadeIn(0, section4Ref);
  return (
    <AboutViewSection>
      <div className="section1">
        {agent === "pc" ? <Navigation type="view" top={108} /> : undefined}
        <div className="top">
          <div className="wrapper">
            <div className="ball one">
              <img src="/assets/common/ball.svg" alt="" />
            </div>
            <div className="ball two">
              <img src="/assets/common/ball.svg" alt="" />
            </div>
            <div className="title-wrapper" ref={titleRef}>
              <div className="title">
                ABOUT{agent === "mb" ? <br /> : undefined} VIEW INTERIOR
              </div>
              <div className="sub">
                소중한 보금자리인 집에서 <br /> 비즈니스가 이루어지는 전문
                공간까지 <br />
                다양한 시공경험에서의 전문성을 제공합니다
              </div>
            </div>
            <div className="list">
              {arr.map((item, idx) => {
                return <Section1Card key={idx} data={item} />;
              })}
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="ball three">
            <img src="/assets/common/ball.svg" alt="" />
          </div>
          <div className="block one" />
          <div className="block two" />
        </div>
      </div>
      <div className="section2">
        <div className="wrapper" ref={section2Ref}>
          <div className="title">HISTORY</div>
          <div className="sub">
            뷰인테리어는 꾸준하게{agent === "mb" ? <br /> : " "}성장하고
            있습니다
          </div>
          <div className="list">
            {section2Arr.map(({ year, content }, idx) => {
              return (
                <div key={idx} className="box">
                  <div className="year">{year}</div>
                  <div className="content-wrapper">
                    {content.map(({ month, text }, idx) => {
                      return (
                        <div className="content" key={idx}>
                          <div className="month">{month}</div>
                          <div className="text">{text}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="wrapper">
          <div className="title" ref={section3Ref}>
            VIEW’s BRAND
          </div>
          <div className="list">
            {section3Arr.map((item, idx) => {
              return <Section3Card key={idx} data={item} agent={agent} />;
            })}
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="wrapper">
          <div className="content-wrapper" ref={section4Ref}>
            <div className="sub">AWARDS</div>
            <div className="title">
              뷰인테리어는 믿을 수 있는{agent === "mb" ? <br /> : undefined}{" "}
              검증된 브랜드입니다
            </div>
            <div className="list">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => {
                return (
                  <div key={idx} className="img-wrapper">
                    <img
                      src={`/assets/about/aboutview/s4-${item}.png`}
                      srcSet={`/assets/about/aboutview/s4-${item}@2x.png 2x , /assets/about/aboutview/s4-${item}@3x.png 3x`}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className="btn"
            onClick={() => {
              navigate({ pathname: "/portfolio" });
            }}
          >
            <div className="text">PORTFOLIO</div>
            <div className="arrow">
              <img src="/assets/about/aboutview/white-arrow.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <ContactUs agent={agent} />
    </AboutViewSection>
  );
}

export default AboutView;

const arr = [
  {
    title: "인테리어",
    category: "INTERIOR",
    content: `실내·외 전반적인 실내건축 인테리어
주요 사업 : 아파트, 주택, 상가, 
병원, 공장, 관공서, 학교 및 교육시설 등
`,
    img: "s3-1",
  },
  {
    title: "설계",
    category: "DESIGN",
    content: `실내 전반적인 실내건축 인테리어 설계
주요 사업 : 학교 내부 설계,
 대구테크노파크 등 관공서 내부 시설 설계`,
    img: "s3-2",
  },
  {
    title: "적산",
    category: "CALCULATE",
    content: `실내건축에 대한 전체 적산 (물량산출)
주요 사업 : 학교 및 교육시설,
관공서 대상 견적서 산출 및 적산`,
    img: "s3-3",
  },
];
const section2Arr = [
  {
    year: 2022,
    content: [
      {
        month: "03",
        text: `나노다이아몬드 코팅제 샘플 제조 및
패키지 관련 디자인 출원`,
      },
    ],
  },
  {
    year: 2021,
    content: [
      {
        month: "02",
        text: `디자인이노베이션랩 (한국디자인진흥원)
국내 10대 기업 선정`,
      },
      {
        month: "04",
        text: "창업도약패키지 선정 (경북대학교 테크노파크)",
      },
      {
        month: "05",
        text: "건물 인테리어 디자인서비스업 등 10건 이상 상표 등록",
      },
      {
        month: "05",
        text: "이중창 하부에 특화된 단열구조체 관련 특허 등록",
      },
      {
        month: "11",
        text: "나노다이아몬드 코팅제 제조 관련 특허 출원",
      },
      {
        month: "12",
        text: "창업 4년 만에 매출 22억원 달성 (누적 매출 57억원)",
      },
    ],
  },
  {
    year: 2020,
    content: [
      {
        month: "03",
        text: "청년창업사관학교 선정 (경북)",
      },
      {
        month: "05",
        text: "ISO9001 인증 획득",
      },
      {
        month: "05",
        text: "싱크대 등 17건 이상 상표 등록",
      },
      {
        month: "10",
        text: "연구소기업 등록 (경북하이브리드부품연구원 기술 투자)",
      },
      {
        month: "12",
        text: "매출 16억원 달성 (누적 매출 37억원)",
      },
    ],
  },
  {
    year: 2019,
    content: [
      {
        month: "01",
        text: "기업부설디자인연구소 설립 및 벤처기업인증 획득",
      },
      {
        month: "04",
        text: `SNS 위치기반 서비스를 이용한
제품정보 제공 관련 특허 등록`,
      },
      {
        month: "05",
        text: "대구시교육청 공공건축가 선정",
      },
      {
        month: "12",
        text: "창업 2년 만에 매출 10억원 달성 (누적 매출 21억원)",
      },
    ],
  },
  {
    year: 2018,
    content: [
      {
        month: "12",
        text: "매출 8억원 달성 (누적매출 9억원)",
      },
    ],
  },
  {
    year: 2017,
    content: [
      {
        month: "04",
        text: "주식회사 뷰 법인 설립",
      },
    ],
  },
];

const section3Arr = [
  {
    img: "s4-1",
    title: "ANDVIEW",
    sub: "앤드뷰",
    content: `당사 자사 브랜드로써 인테리어 
관련 소품, 악세서리 일체 
주요 사업 : 블라인드, 커튼, 수입수전, 수입조명 등`,
    logo: "s4-logo1",
  },
  {
    img: "s4-2",
    title: "VIEWFLEX",
    sub: "뷰플렉스",
    content: `당사 자사 브랜드로써 인테리어
관련 붙박이장, 싱크대 일체
주요 사업 : 붙박이장, 싱크대 (도장 제품/하이그로시 제품)`,
    mbcontent: `당사 자사 브랜드로써 인테리어
 관련 붙박이장, 싱크대 일체
주요 사업 : 붙박이장, 
싱크대 (도장 제품/하이그로시 제품)
`,
    logo: "s4-logo2",
  },
  {
    img: "s4-3",
    title: "TOTALIOR",
    sub: "토탈리어",
    content: `당사 자사 브랜드로써 AR 시스템
기술이 접목된 APP 서비스
주요 사업 : 온라인 견적 문의 및 AR 시스템 접목 기술의 APP 서비스`,
    mbcontent: `당사 자사 브랜드로써 AR 시스템 
기술이 접목된 APP 서비스
주요 사업 : 온라인 견적 문의 및 
AR 시스템 접목 기술의 APP 서비스`,
    logo: "s4-logo3",
  },
];
