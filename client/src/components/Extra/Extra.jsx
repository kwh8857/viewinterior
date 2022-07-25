import React from "react";
import styled from "styled-components";
import Navigation from "../Navgation/Navigation";
import { useNavigate } from "react-router-dom";

function Extra({ agent }) {
  const navigate = useNavigate();
  return (
    <ExtraSection>
      <div className="wrapper">
        {agent === "pc" ? <Navigation type="who" /> : undefined}
        <div className="img-wrapper">
          <img
            src="/assets/common/extra.png"
            srcSet="/assets/common/extra@2x.png 2x,/assets/common/extra@3x.png 3x"
            alt=""
          />
        </div>
        <div className="title">COMING SOON</div>
        <div className="sub">준비중입니다</div>
        <div className="content">
          보다 나은 서비스 제공을 위하여 <br /> 페이지 준비중에 있습니다. <br />{" "}
          빠른 시일 내에 준비하여 찾아뵙겠습니다
        </div>
        <div
          className="btn"
          onClick={() => {
            navigate({ pathname: "/" });
          }}
        >
          <div>HOME</div>
          <img src="/assets/about/aboutview/white-arrow.svg" alt="" />
        </div>
      </div>
    </ExtraSection>
  );
}

export default Extra;

const ExtraSection = styled.main`
  width: 100%;
  height: 100%;
  background-color: #e5e5e5;
  & > .wrapper {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > .img-wrapper {
      width: 155px;
    }
    & > .title {
      font-family: mont;
      font-size: 30px;
      font-weight: bold;
      margin: 19px 0 7px 0;
    }
    & > .sub {
      font-size: 25px;
      font-weight: bold;
    }
    & > .content {
      font-size: 14px;
      font-weight: 400;
      line-height: 22px;
      text-align: center;
      margin: 11px 0 61px 0;
    }
    & > .btn {
      cursor: pointer;
      width: 217px;
      height: 50px;
      background-color: black;
      display: flex;
      align-items: center;
      padding: 0 20.7px 0 17.2px;
      box-sizing: border-box;
      justify-content: space-between;
      color: white;
      font-family: mont;
      font-size: 15px;
      font-weight: 400;
      & > img {
        width: 50px;
      }
    }
  }
`;
