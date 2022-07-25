import React, { useEffect } from "react";
import styled from "styled-components";
import Navigation from "../../components/Navgation/Navigation";

function Contact({ agent }) {
  useEffect(() => {
    const img = new Image();
    img.src = "/assets/contact/contact-main.gif";
    return () => {};
  }, []);

  return (
    <ContactSection>
      <div className="wrapper">
        {agent === "pc" ? <Navigation type="who" top={90} /> : undefined}
        <div className="img-wrapper">
          <img src="/assets/contact/contact-main.gif" alt="" />
        </div>
        <div className="content-wrapper">
          <div className="title">CONTACT US</div>
          <div className="line" />
          <div className="cat">Phone</div>
          <div className="tel">010-9345-9293</div>
          <div className="line" />
          <div className="cat">Email</div>
          <div className="email">soon2674715@hanmail.net</div>
        </div>
      </div>
    </ContactSection>
  );
}

export default Contact;

const ContactSection = styled.main`
  height: 100%;
  background-color: #f9f9f9;
  & > .wrapper {
    position: relative;
    height: 100%;
    padding-top: 123px;
    padding-bottom: 116px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 165px;
    column-gap: 60px;
    & > .img-wrapper {
      width: 442px;
      height: 600px;
      border-radius: 627px 627px 0 0;
      background-color: white;
      overflow: hidden;
      position: relative;
      & > img {
        background-color: white;
      }
    }
    & > .content-wrapper {
      display: flex;
      flex-direction: column;
      width: 477px;
      font-family: mont;
      & > .title {
        font-size: 40px;
        font-weight: bold;
      }
      & > .line {
        width: 100%;
        height: 1px;
        background-color: black;
        margin: 20px 0;
      }
      & > .cat {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 8px;
      }
      & > .tel {
        font-size: 40px;
        font-weight: 300;
      }
      & > .email {
        font-size: 24px;
        font-weight: 400;
      }
    }
  }
  @media screen and (max-width: 1365px) {
    & > .wrapper {
      padding-top: 103.3px;
      padding-left: 36px;
      column-gap: 66px;
      & > .img-wrapper {
        width: 249.68px;
        height: 340.15px;
      }
      & > .content-wrapper {
        width: 288px;
        & > .title {
          font-size: 32px;
        }
        & > .cat {
          font-size: 13px;
          margin-bottom: 6px;
        }
        & > .tel {
          font-size: 24px;
        }
        & > .line {
          margin: 12px 0;
        }
        & > .email {
          font-size: 18px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    height: unset;
    & > .wrapper {
      height: 872px;
      padding-top: 139px;
      padding-left: 0;
      column-gap: unset;
      flex-direction: column;
      row-gap: 52px;
      & > .img-wrapper {
        width: 211px;
        height: 287.2px;
      }
      & > .content-wrapper {
        text-align: center;
        width: 100%;
        & > .title {
          font-size: 30px;
        }
        & > .cat {
          font-size: 15px;
          margin-bottom: 8px;
        }
        & > .tel {
          font-size: 36px;
        }
        & > .line {
          margin: 20px 0;
        }
        & > .emial {
          font-size: 20px;
        }
      }
    }
  }
`;
