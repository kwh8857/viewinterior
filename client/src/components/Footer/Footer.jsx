import React from "react";
import styled from "styled-components";

function Footer({ agent }) {
  return (
    <FooterSection>
      <div className="wrapper">
        <div className="logo-wrapper">
          <img src="/assets/common/logo.svg" alt="" />
        </div>
        <div className="content">
          뷰인테리어 | 대표 : 곽연정 <br /> Tel &nbsp; 053-473-0725 |
          010-9345-9293 <br /> Email &nbsp; soon2674715@hanmail.net <br />
          Address &nbsp; 대구광역시 수성구 지범로 55-4
        </div>
      </div>
    </FooterSection>
  );
}

export default Footer;

const FooterSection = styled.footer`
  width: 100%;
  background-color: #454545;
  position: relative;
  & > .wrapper {
    display: flex;
    padding-top: 61px;
    box-sizing: border-box;
    column-gap: 23px;
    padding-left: 87px;
    height: 247px;
    & > .logo-wrapper {
      width: 77px;
    }
    & > .content {
      font-size: 13px;
      font-weight: 400;
      line-height: 21px;
      color: white;
    }
  }
  @media screen and (max-width: 1365px) {
    & > .wrapper {
      height: 291px;
      padding-top: 44px;
      padding-left: 56px;
      & > .content {
        font-size: 12px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    & > .wrapper {
      padding-top: 62px;
      padding-left: unset;
      column-gap: unset;
      height: 316px;
      flex-direction: column;
      text-align: center;
      align-items: center;
      & > .logo-wrapper {
        margin-bottom: 16.9px;
      }
    }
  }
`;
