import styled from "styled-components";

export const MainSection = styled.main`
  width: 100%;
  position: relative;
  & > .top {
    padding-top: 110px;
    width: 100%;
    height: 960px;
    background-color: #cd3325;
    & > .wrapper {
      width: 1220px;
      position: relative;
      & > .tri {
        width: 665px;
        position: relative;
        z-index: 80;
        & > span {
          position: absolute;
          font-weight: 500;
          font-size: 50px;
          line-height: 120%;
          top: 0;
          left: 75px;
          font-family: mont;
          text-align: center;
          z-index: 20;
          top: 20px;
        }
      }
      & > .title-wrapper {
        position: relative;
        z-index: 80;
        margin-top: 29px;
        color: white;
        & > .title {
          font-weight: 700;
          font-size: 23px;
          line-height: 30px;
        }
        & > .sub {
          font-weight: 400;
          font-size: 17px;
          line-height: 23px;
          margin: 12px 0 26px;
          & > .mb {
            display: none;
          }
        }
        & > .btn-wrapper {
          cursor: pointer;

          display: flex;
          flex-direction: column;
          & > span {
            font-size: 15px;
            font-family: mont;
            font-weight: 400;
            color: white;
          }
          & > .arrow {
            width: 130px;
            height: 10px;
            display: flex;
            align-items: flex-end;
            width: fit-content;
            position: relative;
            & > div {
              background-color: white;
            }
            & > .line {
              transition: 0.2s ease-in-out;
              width: 130px;
              height: 1px;
            }
            & > .right-line {
              top: 2px;
              transform: rotate(45deg);
              right: -2.5px;
              position: absolute;
              width: 20px;
              height: 1px;
            }
          }
        }
        & > .btn-wrapper:hover {
          & > .arrow {
            & > .line {
              width: 140px;
            }
          }
        }
      }
      & > video {
        width: 828px;
        height: 836px;
        position: absolute;
        right: -150px;
        top: 0px;
        z-index: 30;
        background-color: #cd3325;
      }
    }
  }

  @media screen and (max-width: 1365px) {
    & > .top {
      height: 681px;
      & > .wrapper {
        width: 704px;
        box-sizing: border-box;
        & > .tri {
          width: 454px;
          & > span {
            font-size: 30px;
            line-height: 110%;
          }
        }
        & > .title-wrapper {
          margin-top: 92px;
          & > .title {
            font-size: 17px;
            & > br {
              display: none;
            }
          }
          & > .sub {
            font-size: 14px;
            margin: 10px 0 15px 0;
          }
        }
        & > video {
          width: 454px;
          height: 458px;
          right: -80px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    & > .top {
      padding-top: 80px;
      height: 898px;
      & > .wrapper {
        width: 320px;
        & > .tri {
          width: 100%;
          & > span {
            font-size: 22px;
            line-height: 107%;
            left: 48px;
          }
        }
        & > .title-wrapper {
          margin-top: 366px;
          & > .title {
            font-size: 20px;
            line-height: 28px;
            & > br {
              display: block;
            }
          }
          & > .sub {
            margin: 15px 0 23px 0;
            font-weight: 300;
            font-size: 14px;
            line-height: 20px;
            & > .mb {
              display: block;
            }
            & > .no-mb {
              display: none;
            }
          }
        }
        & > video {
          top: 252px;
          width: 384px;
          height: 388px;
          right: -35px;
        }
      }
    }
  }
`;

export const Section2 = styled.section`
  & > .wrapper {
    padding-top: 224px;
    display: flex;
    flex-direction: column;
    align-items: center;
    & > .title-wrapper {
      text-align: center;
      & > .sub {
        font-weight: bold;
        font-size: 25px;
      }
      & > .title {
        white-space: nowrap;
        font-size: 90px;
        font-weight: 600;
        font-family: mont;
      }
    }
    & > .list {
      display: grid;
      row-gap: 1px;
      margin-top: 73px;
      border: solid 0px white;
      box-sizing: border-box;
    }
  }
  @media screen and (max-width: 1365px) {
    & > .wrapper {
      padding-top: 108px;
      & > .title-wrapper {
        & > .title {
          font-size: 64px;
        }
      }
      & > .list {
        margin-top: 36px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    & > .wrapper {
      padding-top: 128px;
      & > .title-wrapper {
        & > .sub {
          font-size: 15px;
        }
        & > .title {
          font-size: 35px;
          margin-top: 9px;
        }
      }
      & > .line {
        width: 100vw;
        height: 1px;
        background-color: black;
        margin-top: 35px;
      }
    }
  }
`;

export const Box = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  column-gap: 157px;
  padding-bottom: ${(props) =>
    props.index === 0 ? "117px" : props.index === 1 ? "156px" : "568px"};
  padding-top: ${(props) =>
    props.index === 1 ? "76px" : props.index === 2 ? "104px" : 0};
  border-bottom: ${(props) =>
    props.index === 2 ? "unset" : "solid 1px #000000"};
  & > .left {
    height: fit-content;
    width: 459px;
    & > .title {
      font-size: 33px;
      font-weight: 500;
      font-family: mont;
      & > span {
        font-size: 25px;
        font-weight: 400;
        margin-left: ${(props) => (props.index === 2 ? 0 : "12px")};
      }
    }
    & > .sub {
      margin-top: 9px;
      font-size: 18px;
      font-weight: 300;
      white-space: pre-wrap;
      line-height: 140%;
    }
    & > .btn-wrapper {
      cursor: pointer;
      margin-top: 63px;
      display: flex;
      flex-direction: column;
      & > span {
        font-size: 15px;
        font-weight: 400;
      }
      & > .arrow {
        height: 10px;
        display: flex;
        align-items: flex-end;
        width: fit-content;
        position: relative;
        & > div {
          background-color: black;
        }
        & > .line {
          transition: 0.2s ease-in-out;
          width: 199.5px;
          height: 1px;
        }
        & > .two {
          width: 222px;
        }
        & > .right-line {
          top: 3px;
          transform: rotate(45deg);
          right: -2.5px;
          position: absolute;
          width: 17px;
          height: 1px;
        }
      }
    }
    & > .btn-wrapper:hover {
      & > .arrow {
        & > .line {
          width: 212.5px;
        }
        & > .two {
          width: 235px;
        }
      }
    }
  }
  & > .right {
    width: 553px;
    display: grid;
    grid-auto-rows: 421px;
    row-gap: 28px;
  }
  @media screen and (max-width: 1365px) {
    column-gap: 41px;
    padding-bottom: ${(props) =>
      props.index === 0 ? "95px" : props.index === 1 ? "89px" : "312px"};
    padding-top: ${(props) =>
      props.index === 1 ? "91px" : props.index === 2 ? "90px" : 0};
    & > .left {
      width: 319px;
      & > .title {
        font-size: 23px;
        line-height: 35px;
        & > span {
          font-size: 23px;
          margin-left: 0;
          font-weight: 500;
        }
      }
      & > .sub {
        font-size: 14px;
        line-height: 22px;
        width: 320px;
      }
      & > .btn-wrapper {
        margin-top: ${(props) =>
          props.index === 0 ? "32px" : props.index === 1 ? "53px" : " 43px"};
      }
    }
    & > .right {
      width: 344px;
      grid-auto-rows: 262px;
      row-gap: 18px;
    }
  }
  @media screen and (max-width: 767px) {
    transform: translateZ(1px);
    column-gap: unset;
    flex-direction: column;
    row-gap: 39px;
    padding-top: ${(props) => (props.index === 0 ? "42px" : "60px")};
    padding-bottom: ${(props) =>
      props.index === 0 ? "225px" : props.index === 1 ? "276px" : "455px"};
    & > .left {
      width: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > .title {
        font-size: 20px;
        line-height: 30px;
        & > span {
          font-size: 20px;
        }
      }
      & > .sub {
        margin-top: 25px;
      }
      & > .btn-wrapper {
        margin-top: 39px;
        text-align: left;
        & > span {
          font-size: 13px;
          transform: translateX(1px);
        }
        & > .arrow {
          & > .line {
            width: 174px;
          }
          & > .two {
            width: 198px;
          }
        }
      }
    }
    & > .right {
      width: 100%;
      grid-auto-rows: 244px;
      row-gap: 16px;
    }
  }
`;

export const Section3 = styled.section`
  width: 100%;
  height: 870px;
  background-color: #efefef;
  border-radius: 800px 800px 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 216px;
  box-sizing: border-box;
  & > .title {
    font-size: 120px;
    font-family: mont;
    font-weight: bold;
    height: 170px;
  }
  & > .list {
    display: grid;
    grid-template-columns: 226px 240px 218px;
    column-gap: 71px;
    text-align: center;
  }
  @media screen and (max-width: 1365px) {
    height: 545px;
    padding-top: 88px;
    & > .title {
      font-size: 60px;
      height: fit-content;
    }
    & > .list {
      margin-top: 26px;
      grid-template-columns: 210px 170px 199px;
      column-gap: 33px;
    }
  }
  @media screen and (max-width: 767px) {
    overflow: hidden;
    height: 1800px;
    padding-top: 162px;
    & > .title {
      text-align: center;
      font-size: 30px;
      line-height: 40px;
    }
    & > .list {
      grid-template-columns: 320px;
      margin-top: 60px;
      row-gap: 1px;
    }
  }
`;
export const BusinessBox = styled.div`
  & > .img-wrapper {
    width: 200px;
    height: 200px;
    background-color: #efefef;
  }
  & > .category {
    font-size: 30px;
    font-family: mont;
    font-weight: bold;
    margin-top: 10px;
    margin-bottom: 9px;
  }
  & > .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  & > .content {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
    white-space: pre-line;
  }
  @media screen and (max-width: 1365px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    & > .img-wrapper {
      width: 132px;
      height: 132px;
    }
    & > .category {
      font-size: 25px;
      margin-top: 14px;
      margin-bottom: 12px;
    }
    & > .title {
      font-size: 18px;
      margin-bottom: 18px;
    }
    & > .content {
      font-size: 13px;
      line-height: 21px;
    }
  }
  @media screen and (max-width: 767px) {
    border-bottom: ${(props) =>
      props.index !== 2 ? "solid 1px #acacac" : "unset"};
    background-color: #efefef;
    box-sizing: border-box;
    padding: ${(props) =>
      props.index === 0
        ? "0 0 70px 0"
        : props.index === 1
        ? "47px 0 99px 0"
        : "43.2px 0 142px 0"};
    & > .img-wrapper {
      width: 197px;
      height: 197px;
    }
    & > .category {
      font-size: 30px;
      margin-top: 13px;
      margin-bottom: 11px;
    }
    & > .title {
      font-size: 20px;
      margin-bottom: 17px;
    }
    & > .content {
      font-size: 14px;
      line-height: 22px;
    }
  }
`;
export const Section4 = styled.section`
  height: 1452px;
  & > .wrapper {
    padding-top: 221px;
    box-sizing: border-box;
    display: flex;
    column-gap: 111px;
    align-items: center;
    & > .title {
      font-family: mont;
      font-size: 120px;
      font-weight: bold;
      writing-mode: vertical-rl;
      transform: rotate(180deg);
    }
    & > .list {
      display: grid;
      row-gap: 94px;
    }
  }
  @media screen and (max-width: 1365px) {
    height: 1190px;
    & > .wrapper {
      padding-top: 208px;
      column-gap: 50px;
      & > .title {
        font-size: 65px;
      }
      & > .list {
        row-gap: 70px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    height: 2475px;
    & > .wrapper {
      padding-top: 206px;
      flex-direction: column;
      column-gap: unset;
      row-gap: 46px;
      & > .title {
        transform: unset;
        writing-mode: unset;
        font-size: 35px;
      }
      & > .list {
        row-gap: 180px;
      }
    }
  }
`;
export const BrandBox = styled.div`
  display: flex;
  column-gap: 56px;
  align-items: center;
  & > .img-wrapper {
    width: 200px;
    height: 200px;
  }
  & > .content-wrapper {
    width: 649px;
    & > .top {
      width: 100%;
      height: 90.5px;
      display: flex;
      justify-content: space-between;
      align-items: end;
      & > .left {
        & > .title {
          font-family: mont;
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 8px;
        }
        & > .sub {
          font-size: 20px;
          font-weight: bold;
        }
      }
      & > .logo {
        width: 194px;
      }
    }
    & > .line {
      width: 100%;
      height: 1px;
      background-color: black;
      margin: 20px 0 10px 0;
    }
    & > .bottom {
      white-space: pre-wrap;
      font-size: 15px;
      font-weight: 300;
      line-height: 27px;
    }
  }
  @media screen and (max-width: 1365px) {
    column-gap: 30px;
    & > .img-wrapper {
      width: 134px;
      height: 134px;
    }
    & > .content-wrapper {
      width: 423px;
      & > .top {
        height: 64px;
        & > .left {
          & > .title {
            font-size: 25px;
            margin-bottom: 5px;
          }
          & > .sub {
            font-size: 16px;
          }
          & > .logo {
            width: 150px;
          }
        }
      }
      & > .line {
        margin: 10px 0 9px 0;
      }
    }
  }
  @media screen and (max-width: 767px) {
    flex-direction: column;
    column-gap: unset;
    row-gap: 28px;
    position: relative;
    height: 525px;
    & > .img-wrapper {
      width: 220px;
      height: 220px;
    }
    & > .content-wrapper {
      width: 100%;
      & > .top {
        flex-direction: column;
        justify-content: unset;
        align-items: center;
        text-align: center;
        & > .logo {
          width: 228px;
          position: absolute;
          bottom: 0;
          transform: ${(props) =>
            props.index === 0 ? " translateX(-40px)" : "unset"};
        }
        & > .title {
          font-size: 30px;
          margin-bottom: 8px;
        }
        & > .sub {
          font-size: 20px;
        }
      }
      & > .bottom {
        text-align: center;
        font-size: 14px;
        line-height: 22px;
      }
      & > .line {
        margin: 20px 0 19px 0;
      }
    }
  }
`;
