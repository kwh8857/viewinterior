import React from "react";
import styled from "styled-components";

function ContactUs({ agent }) {
  return (
    <ContactSection>
      <div className="wrapper">
        <div className="img-wrapper">
          <img
            src={`/assets/common/contact${
              agent === "tablet" ? "-tablet" : agent === "mb" ? "-mb" : ""
            }.png`}
            srcSet={`/assets/common/contact${
              agent === "tablet" ? "-tablet" : agent === "mb" ? "-mb" : ""
            }@2x.png 2x , /assets/common/contact${
              agent === "tablet" ? "-tablet" : agent === "mb" ? "-mb" : ""
            }@3x.png 3x`}
            alt=""
          />
        </div>
        <div className="content-wrapper">
          <div className="title">CONTACT US</div>
          <div className="line" />
          <div className="sub phone">Phone</div>
          <div className="tel">010-9345-9293</div>
          <a href="tel:010-9345-9293">
            <img src="/assets/common/tel.svg" alt="" />
            <div className="text">전화문의</div>
          </a>
          <div className="line" />
          <div className="sub mail">Email</div>
          <div className="email">soon2674715@hanmail.net</div>
        </div>
      </div>
    </ContactSection>
  );
}

export default ContactUs;

const ContactSection = styled.section`
  width: 100%;
  height: 603px;
  background-color: #cd3325;
  & > .wrapper {
    height: 100%;
    box-sizing: border-box;
    padding-top: 39px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: relative;
    & > .img-wrapper {
      position: absolute;
      bottom: 0;
      width: 706px;
      height: 564px;
      left: -71px;
    }
    & > .content-wrapper {
      width: 477px;
      color: white;
      font-family: mont;
      & > .line {
        width: 100%;
        height: 1px;
        background-color: white;
      }
      & > .title {
        font-size: 40px;
        font-weight: bold;
        margin-bottom: 21px;
      }
      & > .tel {
        margin-bottom: 16px;
        font-size: 40px;
        font-weight: 400;
      }
      & > a {
        width: 126px;
        height: 44px;
        background-color: black;
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding-left: 12px;
        column-gap: 9px;
        margin-bottom: 21px;
        & > img {
          width: 20px;
        }
        & > .text {
          font-weight: 700;
          font-size: 15px;
          color: white;
        }
      }
      & > .sub {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 11px;
        margin-top: 23px;
      }
      & > .email {
        font-size: 25px;
        font-weight: 400;
      }
    }
  }
  @media screen and (max-width: 1365px) {
    height: 368px;
    & > .wrapper {
      padding-top: 55px;
      padding-right: 45px;
      align-items: flex-start;
      & > .img-wrapper {
        width: 298px;
        height: 281px;
        left: 0;
      }
      & > .content-wrapper {
        width: 321px;
        & > .title {
          font-size: 30px;
          margin-bottom: 18px;
        }
        & > .tel {
          margin-bottom: 16px;
          font-size: 24px;
        }
        & > a {
          margin-bottom: 16px;
        }
        & > .sub {
          font-size: 13px;
          margin-top: 17px;
          margin-bottom: 7px;
        }
        & > .email {
          font-size: 22px;
        }
        & > .sub {
          font-size: 13px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    height: 698px;
    & > .wrapper {
      padding-top: 107px;
      padding-right: unset;
      align-items: unset;
      & > .img-wrapper {
        width: 308px;
        height: 272px;
      }
      & > .content-wrapper {
        position: relative;
        z-index: 10;
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        & > .title {
          font-size: 25px;
          margin-bottom: 22px;
        }
        & > .tel {
          font-size: 30px;
          margin-bottom: 20px;
        }
        & > a {
          margin-bottom: 30px;
        }
        & > .email {
          font-size: 20px;
        }
        & > .phone {
          margin: 21px 0 7px 0;
        }
        & > .mail {
          margin: 12px 0 11px 0;
        }
      }
    }
  }
`;
