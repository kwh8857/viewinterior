import React, { useRef } from "react";
import useScrollFadeIn from "../../../../../lib/useScrollFadeIn";
import { BusinessBox, GoveList } from "../../../style/aboutstyled";
import ImgBox from "./ImgBox";

function Section2Box({
  data: { title, category, content, images, mbcontent },
  idx,
  agent,
  _nav,
}) {
  const dom = useRef(null);
  useScrollFadeIn(0, dom);
  return (
    <BusinessBox index={idx}>
      <div className="content-wrapper" ref={dom}>
        <div className="title-wrapper">
          <div className="title">{title}</div>
          <div className="category">{category}</div>
        </div>
        <div className="content">{agent === "mb" ? mbcontent : content}</div>
        <button onClick={_nav}>
          <div className="text">{category} 포트폴리오 더보기</div>
          <div className="arrow">
            <div className="right-line" />
            <div className={`line ${idx === 2 ? "two" : ""}`} />
          </div>
        </button>
        {idx === 2 && agent !== "mb" ? (
          <div className="list-wrapper">
            {goverArr.map(({ title, content }, idx) => {
              return (
                <GoveList key={idx} index={idx}>
                  <div className="title">{title}</div>
                  <div className="content-wrapper">
                    {content.map(
                      ({ year, content, line, tabletcontent }, idx) => {
                        return (
                          <div
                            key={idx}
                            className="text-box"
                            style={
                              line === 1
                                ? {
                                    alignItems: "center",
                                  }
                                : undefined
                            }
                          >
                            <div
                              className="year"
                              style={
                                line !== 1
                                  ? {
                                      paddingTop: "4px",
                                    }
                                  : undefined
                              }
                            >
                              {year}
                            </div>
                            <div className="content">
                              {agent === "tablet" && tabletcontent
                                ? tabletcontent
                                : content}
                            </div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </GoveList>
              );
            })}
          </div>
        ) : undefined}
      </div>
      <div className="images">
        {images.map((item, idx) => {
          return <ImgBox key={idx} item={item} />;
        })}
      </div>
      {idx === 2 && agent === "mb" ? (
        <div className="list-wrapper">
          {goverArr.map(({ title, content }, idx) => {
            return (
              <GoveList key={idx} index={idx}>
                <div className="title">{title}</div>
                <div className="content-wrapper">
                  {content.map(
                    ({ year, content, line, tabletcontent }, idx) => {
                      return (
                        <div
                          key={idx}
                          className="text-box"
                          style={
                            line === 1
                              ? {
                                  alignItems: "center",
                                }
                              : undefined
                          }
                        >
                          <div
                            className="year"
                            style={
                              line !== 1
                                ? {
                                    paddingTop: agent === "pc" ? "4px" : "2px",
                                  }
                                : undefined
                            }
                          >
                            {year}
                          </div>
                          <div className="content">
                            {tabletcontent ? tabletcontent : content}
                          </div>
                        </div>
                      );
                    }
                  )}
                </div>
              </GoveList>
            );
          })}
        </div>
      ) : undefined}
    </BusinessBox>
  );
}

export default Section2Box;
const goverArr = [
  {
    title: "관공서",
    content: [
      {
        year: "2021",
        content: `중앙 119현풍소방서    김천 율곡 119소방서 
경북하이브리드 휴게실    초록우산어린이재단
대구테크노파크디지털융합센터
식약청 대구통합청사   대구유아교육진흥원누리관
대구테크노파크바이오융합센터   범어 다함께돌봄센터
한국공항공사  질병관리청 경북권대응센터`,
        tabletcontent: `중앙 119현풍소방서  김천 율곡 119소방서 
경북하이브리드 휴게실   초록우산어린이재단 
대구테크노파크 디지털융합센터 
식약청 대구통합청사 
대구유아교육진흥원누리관
대구테크노파크 바이오융합센터 
범어 다함께돌봄센터
한국공항공사  질병관리청 경북권대응센터`,
      },
      {
        year: "2020",
        content: `청도군 보건소   경북대학교 산학협력단 `,
        line: 1,
      },
      {
        year: "2019",
        content: `청도군 보건소`,
        line: 1,
      },
      {
        year: "2018",
        content: `달성군청`,
        line: 1,
      },
    ],
  },
  {
    title: "학교",
    content: [
      {
        year: "2021",
        content: `경북대 스마트드론센터   동문초   범일중   용전초 
불로초 병설유치원   대구소프트웨어고   서변중
동부중   대곡중 `,
      },
      {
        year: "2020",
        content: `대곡중  이현초  세명학교  동평초  서도초   조야초  
대구일중  남산초  동부중  동문초   대곡중 `,
      },
      {
        year: "2019",
        content: `남동초  동문초  화남초  범물초  이현초  동평초  남산초
동부중  세명학교  서도초  내서초  성당중  동중학교
성당초  관광고  방촌고  현풍초  월성초  지산중`,
        tabletcontent: `남동초  동문초  화남초  범물초  이현초   동평초
남산초  동부중  세명학교  서도초  내서초
성당중  동중학교  성당초  관광고  방촌고
현풍초  월성초  지산중`,
      },
      {
        year: "2018",
        content: `대구 관음초   대구 보건학교`,
        line: 1,
      },
    ],
  },
];
