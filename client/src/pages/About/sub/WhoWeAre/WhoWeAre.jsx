import React, { useRef } from "react";
import ContactUs from "../../../../components/common/ContactUs";
import Navigation from "../../../../components/Navgation/Navigation";
import useScrollFadeIn from "../../../../lib/useScrollFadeIn";
import { WhoSection } from "../../style/aboutstyled";

function WhoWeAre({ agent, navigate }) {
  const titleRef = useRef(null);
  const subRef = useRef(null);
  const section2title = useRef(null);
  const section2sub = useRef(null);
  const section2bottom = useRef(null);
  const seciton2list = useRef(null);
  const section3top = useRef(null);
  const section3bottom = useRef(null);
  const section4list = useRef(null);
  const section4top = useRef(null);
  useScrollFadeIn(0, titleRef);
  useScrollFadeIn(0, subRef);
  useScrollFadeIn(0, section2title);
  useScrollFadeIn(0, section2sub);
  useScrollFadeIn(0, section2bottom);
  useScrollFadeIn(0, seciton2list);
  useScrollFadeIn(0, section3top);
  useScrollFadeIn(0, section3bottom);
  useScrollFadeIn(0, section4top);
  useScrollFadeIn(0, section4list);
  return (
    <WhoSection className="who">
      <div className="section1">
        {agent === "pc" ? <Navigation type="who" top={108} /> : undefined}
        <div className="title" ref={titleRef}>
          WHO WE ARE
        </div>
        <div className="line" />
        <div className="gif-wrapper">
          <video
            loop
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={(e) => {
              e.currentTarget.play();
            }}
          >
            {window.safari ? (
              <>
                <source src="/assets/video/whowe-3.mov" type="video/mp4" />
                <source src="/assets/video/whowe.webm" type="video/webm" />
              </>
            ) : (
              <>
                <source src="/assets/video/whowe.webm" type="video/webm" />
                <source src="/assets/video/whowe-3.mov" type="video/mp4" />
              </>
            )}
            지원하지 않는 브라우저입니다.
          </video>
        </div>
        <img
          src="/assets/about/whoweare/section1.png"
          srcSet="/assets/about/whoweare/section1@2x.png 2x , /assets/about/whoweare/section1@3x.png 3x"
          alt=""
        />
        <div className="bottom" ref={subRef}>
          A DESIGN ONLY FOR YOU
        </div>
      </div>
      <div className="section2">
        <div className="top">
          <div className="wrapper">
            <div className="left">
              <div className="title-wrapper" ref={section2title}>
                <div className="sub">CEO</div>
                <div className="title">
                  오직 당신만을 위한 1% 디자인 <br /> 주식회사 뷰 곽연정 대표
                </div>
              </div>
              <div className="content" ref={section2sub}>
                <div>
                  안녕하십니까?
                  <br />
                  넘치는 열정으로 2017년 4월 법인을 설립한 주식회사 뷰 곽연정
                  대표입니다. {agent !== "mb" ? <br /> : undefined} 당사는{" "}
                  <b>
                    국가 인증 실내건축공사업과 금속창호 · 창호 · 온실공사업 등록
                    면허
                  </b>
                  를{agent !== "mb" ? <br /> : " "}보유한 전문업체로 대구,
                  경북의 발전과 함께 성장한 인테리어 회사입니다.
                </div>
                <div className="mid">
                  주식회사 뷰는{" "}
                  <b>
                    인테리어 사업과 함께 기업부설연구소 및 연구소기업을 설립
                  </b>
                  하여 {agent !== "mb" ? <br /> : undefined} 메타버스 시대에
                  발맞추어 AR 시스템 기반 인테리어 앱 개발과 친환경 자재 개발
                  {agent !== "mb" ? <br /> : undefined}과 건축용, 차량용
                  나노다이아몬드 수성 코팅제, 자사 브랜딩 제품 론칭 등 다양한{" "}
                  {agent !== "mb" ? <br /> : undefined} 분야로 사업을 확장하고
                  있습니다.
                </div>
                <div>
                  주식회사 뷰는 지속적인 성장 가능성과 원동력이 있는 회사입니다.
                  {agent !== "mb" ? <br /> : undefined} 저희를 사랑해 주시고
                  지켜봐 주신 많은 고객들께 항상 감사드리며,{" "}
                  {agent !== "mb" ? <br /> : undefined}
                  고마움에 보답드리고자 매년 사회 공헌과 환경 문제 등 더 넓은 곳
                  {agent !== "mb" ? <br /> : undefined} 까지 아우르는 큰 기업이
                  되겠습니다. <br />
                  {/* <br /> */}
                  <br /> 감사합니다.
                </div>
              </div>
            </div>
            <div className="right">
              <img
                src="/assets/about/whoweare/section2.png"
                srcSet="/assets/about/whoweare/section2@2x.png 2x , /assets/about/whoweare/section2@3x.png 3x"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="wrapper">
            <div className="bottom-top" ref={section2bottom}>
              <div className="category">TEAM & PEOPLE</div>
              <div className="sub">
                뷰인테리어는 전문적이고 <br /> 열정적인 사람들로 이루어진
                팀입니다
              </div>
              <div className="ceo-wrapper">
                <div className="class">CEO</div>
                <div className="img-wrapper">
                  <img
                    src="/assets/about/whoweare/ceo.png"
                    srcSet="/assets/about/whoweare/ceo@2x.png 2x , /assets/about/whoweare/ceo@3x.png 3x"
                    alt=""
                  />
                </div>
                <div className="content">
                  <b>곽연정 대표</b> <br /> 전체 경영 총괄 <br /> 주식회사 뷰
                  대표
                </div>
              </div>
            </div>
            <div className="line" />
            <div className="list" ref={seciton2list}>
              {section2Arr.map(({ title, content }, idx) => {
                return (
                  <div className={`box`} key={idx}>
                    <div className="title">{title}</div>
                    <div className="content-wrapper">
                      {content.map((item, idx) => {
                        return <div key={idx}>{item}</div>;
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="section3">
        <div className="wrapper">
          <div className="top" ref={section3top}>
            <div className="title">
              A DESIGN{agent === "mb" ? <br /> : undefined} ONLY FOR YOU
            </div>
            <div className="sub">
              <b>뷰는 한 발짝 앞선 고객 맞춤형 디자인을 제시합니다.</b> <br />
              고객이 원하는 디자인 방향으로 한 발짝 앞서 <br /> 미래지향적인
              디자인을 제시할 수 있는 감각적인 회사입니다
            </div>
            <div
              className="btn"
              onClick={() => {
                navigate({ pathname: "/portfolio" });
              }}
            >
              <div className="text">PORTFOLIO</div>
              <svg
                width="52"
                height="7"
                viewBox="0 0 52 7"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.255859 6H50.2864L43.6559 0.5" stroke="white" />
              </svg>
            </div>
          </div>
          <div className="img-wrapper">
            <img
              src="/assets/about/whoweare/section3.png"
              srcSet="/assets/about/whoweare/section3@2x.png 2x , /assets/about/whoweare/section3@3x.png 3x"
              alt=""
            />
            <div className="line" />
          </div>
          <div className="bottom" ref={section3bottom}>
            <div className="title">NEW CHALLENGE</div>
            <div className="sub">
              <b>
                뷰는 끊임없는 열정과 새로운 방향에 대한
                {agent === "mb" ? <br /> : undefined} 도전의식이 있습니다
              </b>
              <br />
              전문적인 인테리어 실내건축공사업뿐만 아니라
              {agent === "mb" ? <br /> : " "}
              금속창호·창호·온실공사업으로 {agent !== "mb" ? (
                <br />
              ) : undefined}{" "}
              분야를 뻗치고 있으며,
              {agent === "mb" ? <br /> : " "}
              실내인테리어에 필요한 토탈 디자인을 지향해
              {agent === "mb" ? <br /> : undefined} 성장하고 있습니다.
            </div>
            <div className="list">
              {section3Arr.map(({ img, title }, idx) => {
                return (
                  <div className="box" key={idx}>
                    <img
                      src={`/assets/about/whoweare/${img}.png`}
                      srcSet={`/assets/about/whoweare/${img}@2x.png 2x , /assets/about/whoweare/${img}@3x.png 3x`}
                      alt=""
                    />
                    <div className="title">{title}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="section4">
        <div className="wrapper">
          <div className="top" ref={section4top}>
            <div className="title">
              VIEW {agent === "pc" ? <br /> : undefined} FOR EVERYONE
            </div>
            <div className="sub">
              <b>뷰는 사회적 공헌과 환경의 가치를 소중하게 생각합니다.</b>{" "}
              <br />
              우리의 발전 뿐만 아니라 우리가 속한 사회, 환경을
              {agent === "mb" ? <br /> : undefined} 소중하게 여깁니다.{" "}
              {agent !== "mb" ? <br /> : undefined} 뷰는 주거환경개선 사업 참여,
              {agent === "mb" ? <br /> : undefined} 환경 소재 연구 등의 다양한
              방법을 통해 가치관을 표현합니다.
            </div>
          </div>
          <div className="list" ref={section4list}>
            {[0, 0, 0, 0, 0, 0].map((item, idx) => {
              return (
                <div className="img-wrapper" key={idx}>
                  <img
                    src={`/assets/about/whoweare/s4-${idx + 1}.jpg`}
                    srcSet={`/assets/about/whoweare/s4-${
                      idx + 1
                    }@2x.jpg 2x , /assets/about/whoweare/s4-${
                      idx + 1
                    }@3x.jpg 3x`}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <ContactUs agent={agent} />
    </WhoSection>
  );
}

export default WhoWeAre;

const section2Arr = [
  {
    title: "기획본부",
    content: ["사업기획팀", "마케팅팀"],
  },
  {
    title: "디자인부",
    content: ["기초디자인팀", "기초설계팀", "3D모델링팀"],
  },
  {
    title: "관리본부",
    content: ["총무회계팀", "국내영업팀", "해외영업팀"],
  },
  {
    title: "건축본부",
    content: ["현장관리팀", "시공팀", "CS팀"],
  },
  {
    title: "디자인연구소",
    content: ["디자인연구개발팀", "R&D팀"],
  },
  {
    title: "가족친화부",
    content: ["가족친화상담부"],
  },
];
const section3Arr = [
  {
    img: "section3-1",
    title: "인테리어 디자인",
  },
  {
    img: "section3-2",
    title: "금속 구조물 창호 온실공사업",
  },
  {
    img: "section3-3",
    title: "인테리어 AR APP",
  },
];
