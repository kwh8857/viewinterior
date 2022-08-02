import styled from "styled-components";

export const WhoSection = styled.div`
  & > .section1 {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    padding-top: 150px;
    padding-bottom: 272px;
    position: relative;
    & > .title {
      font-size: 70px;
      font-family: mont;
      font-weight: bold;
      margin-bottom: 50px;
    }
    & > .gif-wrapper {
      position: absolute;
      width: 400px;
      top: 480px;
      z-index: 10;
      transform: translateX(20px);
      & > video {
        width: 100%;
      }
    }
    & > img {
      width: 1013px;
      transform: translateX(30px);
      position: relative;
      z-index: 5;
    }
    & > .line {
      width: 1px;
      height: 766px;
      position: absolute;
      bottom: 128px;
      background-color: black;
      z-index: 1;
    }
    & > .bottom {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 128px;
      border-top: solid 1px black;
      border-bottom: solid 1px black;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: mont;
      font-size: 60px;
      font-weight: bold;
    }
  }
  & > .section2 {
    height: 2741px;
    padding-top: 147px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 152px;
    & > .top {
      & > .wrapper {
        position: relative;
        & > .left {
          & > .title-wrapper {
            & > .sub {
              font-size: 48px;
              font-weight: bold;
              font-family: mont;
              height: 82px;
            }
            & > .title {
              font-size: 36px;
              line-height: 130%;
              margin-bottom: 46px;
              font-weight: bold;
            }
          }
          & > .content {
            font-size: 18px;
            font-weight: 400;
            line-height: 169.8%;
            & > .mid {
              margin: 28px 0 44px 0;
            }
          }
        }
        & > .right {
          bottom: 0;
          right: -189px;
          width: 694px;
          position: absolute;
        }
      }
    }
    & > .bottom {
      width: 1366px;
      height: 1714px;
      background-color: #f5f6f8;
      border-radius: 800px 800px 0px 0px;
      & > .wrapper {
        box-sizing: border-box;
        padding-top: 276px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        & > .bottom-top {
          display: flex;
          flex-direction: column;
          align-items: center;
          & > .category {
            font-family: mont;
            font-size: 55px;
            font-weight: bold;
          }
          & > .sub {
            font-size: 18px;
            font-weight: 400;
            margin: 5px 0 64px 0;
            line-height: 30px;
          }
          & > .ceo-wrapper {
            position: relative;
            & > .class {
              position: absolute;
              width: 160px;
              height: 50px;
              background-color: black;
              font-size: 25px;
              color: white;
              font-weight: bold;
              display: flex;
              align-items: center;
              justify-content: center;
              left: 49px;
              border-radius: 25px;
              top: -8px;
              z-index: 10;
            }
            & > .img-wrapper {
              width: 257px;
              height: 257px;
              margin: 0 0 29px 0;
            }
            & > .content {
              font-size: 20px;
              font-weight: 400;
              line-height: 31px;
            }
          }
        }
        & > .line {
          width: 1px;
          height: 114px;
          background-color: black;
          margin: 18px 0 29px 0;
        }
        & > .list {
          display: grid;
          grid-template-columns: repeat(3, 257px);
          gap: 49px 95px;
          & > .box {
            background-color: white;
            position: relative;
            font-size: 25px;
            box-sizing: border-box;
            border-radius: 126.5px;
            height: 257px;
            display: flex;
            align-items: center;
            justify-content: center;
            & > .title {
              border-radius: 30px;
              width: 160px;
              height: 50px;
              background-color: black;
              position: absolute;

              top: -8px;
              color: white;
              font-weight: bold;
              left: 46px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            & > .content-wrapper {
              display: grid;
              row-gap: 19px;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
  & > .section3 {
    height: fit-content;
    border-bottom: solid 1px black;
    & > .wrapper {
      padding: 123px 0 291px 0;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > .top {
        display: flex;
        flex-direction: column;
        align-items: center;
        & > .title {
          font-family: mont;
          font-size: 40px;
          font-weight: bold;
        }
        & > .sub {
          text-align: center;
          font-size: 18px;
          font-weight: 400;
          line-height: 30px;
          margin: 25px 0;
        }
        & > .btn {
          transition: background-color 0.2s ease-in-out;
          cursor: pointer;
          width: 217px;
          height: 50px;
          background-color: black;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-sizing: border-box;
          padding: 0 20.7px 0 17.2px;
          & > .text {
            font-size: 15px;
            font-weight: 400;
            font-family: mont;
            color: white;
          }
          & > svg {
            width: 50px;
            transform: translateY(-1px);
          }
        }
        & > .btn:hover {
          border: solid 1px black;
          background-color: white;
          & > .text {
            color: black;
          }
          & > svg {
            & > path {
              stroke: black;
            }
          }
        }
      }
      & > .img-wrapper {
        margin-top: 115px;
        position: relative;
        & > img {
          position: relative;
          z-index: 20;
        }
        & > .line {
          position: absolute;
          height: 320px;
          width: 1px;
          background-color: black;
          left: 50%;
          bottom: -241px;
          z-index: 1;
        }
      }
      & > .bottom {
        margin-top: 303px;
        & > .title {
          font-family: mont;
          font-size: 100px;
          text-align: center;
          font-weight: bold;
        }
        & > .sub {
          font-size: 18px;
          font-weight: 400;
          line-height: 30px;
          text-align: center;
          margin: 31px 0 78px 0;
        }
        & > .list {
          display: grid;
          grid-template-columns: repeat(3, 287px);
          column-gap: 86px;
          & > .box {
            & > .title {
              margin-top: 22px;
              font-size: 20px;
              font-weight: bold;
              text-align: center;
            }
          }
        }
      }
    }
  }
  & > .section4 {
    height: 1223px;
    & > .wrapper {
      padding-top: 161px;
      box-sizing: border-box;
      & > .top {
        & > .title {
          font-family: mont;
          font-size: 60px;
          font-weight: bold;
          line-height: 70px;
        }
        & > .sub {
          font-size: 20px;
          line-height: 34px;
          font-weight: 400;
          margin-top: 18px;
        }
      }
      & > .list {
        margin-top: 62px;
        display: grid;
        grid-template-columns: 371px 372px 371px;
        gap: 16px 19px;
      }
    }
  }
  @media screen and (max-width: 1365px) {
    & > .section1 {
      padding-top: 147px;
      padding-bottom: 432px;
      & > .gif-wrapper {
        width: 320px;
        top: 400px;
        transform: translateX(-30px);
      }
      & > .title {
        font-size: 46px;
        margin-bottom: 47px;
      }
      & > img {
        width: 768px;
        transform: unset;
      }
      & > .bottom {
        font-size: 47px;
      }
    }
    & > .section2 {
      height: 3124px;
      padding-top: 183px;
      row-gap: 229px;
      & > .top {
        & > .wrapper {
          height: 1458px;
          & > .left {
            & > .title-wrapper {
              & > .sub {
                font-size: 33px;
                height: 33px;
              }
              & > .title {
                margin: 13px 0 50px 0;
              }
            }
            & > .content {
              font-size: 17px;
              line-height: 170%;
              & > .mid {
                margin: 36px 0 54px 0;
              }
            }
          }
          & > .right {
            left: 5px;
            width: 694px;
          }
        }
      }
      & > .bottom {
        height: 1253px;
        width: 767px;
        & > .wrapper {
          padding-top: 192px;
          & > .bottom-top {
            & > .category {
              font-size: 40px;
            }
            & > .sub {
              font-size: 17px;
              line-height: 27px;
              margin: 13px 0 46px 0;
            }
            & > .ceo-wrapper {
              display: flex;
              flex-direction: column;
              align-items: center;
              & > .class {
                width: 109px;
                height: 34px;
                font-size: 18px;
                left: 30px;
                top: -12px;
              }
              & > .img-wrapper {
                width: 167px;
                height: 167px;
                margin-bottom: 18px;
              }
              & > .content {
                font-size: 17px;
                line-height: 27px;
              }
            }
          }
          & > .line {
            height: 70px;
            margin: 10px 0 35px 0;
          }
          & > .list {
            grid-template-columns: repeat(3, 165px);
            gap: 38px 77px;
            & > .box {
              height: 167px;
              font-size: 17px;

              & > .title {
                width: 110px;
                height: 34px;
                font-size: 18px;
                left: 27px;
              }
              & > .content-wrapper {
                row-gap: 8px;
              }
            }
          }
        }
      }
    }
    & > .section3 {
      height: 3135px;
      & > .wrapper {
        padding-top: 233px;
        & > .top {
          & > .sub {
            font-size: 17px;
            line-height: 27px;
            margin: 33px 0;
          }
        }
        & > .img-wrapper {
          width: 767px;
          margin-top: 74px;
          & > .line {
            bottom: -269px;
          }
        }
        & > .bottom {
          margin-top: 324px;
          & > .title {
            font-size: 60px;
          }
          & > .sub {
            font-size: 17px;
            line-height: 27px;
            margin: 55px 0 68px 0;
          }
          & > .list {
            justify-content: center;
            grid-template-columns: 287px;
            column-gap: unset;
            row-gap: 55px;
          }
        }
      }
    }
    & > .section4 {
      height: 1491px;
      & > .wrapper {
        padding-top: 204px;
        text-align: center;
        & > .top {
          & > .title {
            font-size: 40px;
            line-height: unset;
          }
          & > .sub {
            font-size: 17px;
            line-height: 27px;
            margin-top: 37px;
          }
        }
        & > .list {
          margin-top: 99px;
          grid-template-columns: repeat(2, 343px);
          gap: 15px 18px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    & > .section1 {
      padding-top: 210px;
      padding-bottom: 151.5px;
      & > .gif-wrapper {
        width: 200px;
        top: 360px;
        transform: translateX(-15px);
      }
      & > .title {
        font-size: 40px;
        margin-bottom: 32px;
      }
      & > img {
        width: 450px;
      }
      & > .line {
        height: 331px;
        bottom: 65px;
      }
      & > .bottom {
        height: 64px;
        font-size: 25px;
      }
    }
    & > .section2 {
      height: 2679px;
      padding-top: 74px;
      row-gap: 231.8px;
      & > .top {
        & > .wrapper {
          height: 1055px;
          & > .left {
            & > .title-wrapper {
              & > .sub {
                font-size: 30px;
                height: 82px;
                display: flex;
                align-items: center;
                font-size: 30px;
              }
              & > .title {
                font-size: 24px;
                line-height: 34px;
                margin: 0 0 14px 0;
              }
            }
            & > .content {
              font-size: 15px;
              line-height: 169.8%;
              & > .mid {
                margin: 16px 0;
              }
            }
          }
          & > .right {
            height: 351px;
            left: -18px;
            width: 360px;
          }
        }
      }
      & > .bottom {
        height: 1366px;
        width: 360px;
        & > .wrapper {
          padding-top: 139px;
          & > .bottom-top {
            & > .category {
              font-size: 30px;
            }
            & > .sub {
              font-size: 14px;
              line-height: 24px;
              margin: 5px 0 35px 0;
            }
          }
          & > .line {
            margin: 10px 0 37px 0;
          }
          & > .list {
            grid-template-columns: repeat(2, 139px);
            gap: 49px 30px;
            & > .box {
              height: 139px;
              box-sizing: border-box;
              & > .title {
                left: 14px;
                top: -12px;
                font-size: 16px;
              }
              & > .content-wrapper {
                row-gap: 8px;
                font-size: 15px;
              }
            }
            & > .box:nth-child(2) {
              padding-top: 10px;
            }
            & > .box:nth-child(3) {
              padding-top: 10px;
            }
            & > .box:nth-child(4) {
              padding-top: 10px;
            }
          }
        }
      }
    }
    & > .section3 {
      height: 2126px;
      & > .wrapper {
        padding-top: 211px;
        & > .top {
          & > .title {
            font-size: 25px;
            line-height: 33px;
            text-align: center;
          }
          & > .sub {
            font-size: 14px;
            line-height: 24px;
          }
        }
        & > .img-wrapper {
          width: 360px;
          & > .line {
            height: 181px;
            bottom: -150px;
          }
        }
        & > .bottom {
          margin-top: 212px;
          & > .title {
            font-size: 25px;
          }
          & > .sub {
            font-size: 14px;
            line-height: 24px;
            margin: 19px 0 41px 0;
          }
          & > .list {
            grid-template-columns: 175px;
            row-gap: 28px;
            & > .box {
              & > .title {
                font-size: 16px;
                margin-top: 10px;
                white-space: nowrap;
              }
            }
          }
        }
      }
    }
    & > .section4 {
      height: 2086px;
      & > .wrapper {
        padding-top: 156px;
        & > .top {
          & > .title {
            font-size: 25px;
          }
          & > .sub {
            font-size: 14px;
            line-height: 24px;
            margin-top: 8px;
            white-space: nowrap;
          }
        }
        & > .list {
          margin-top: 57px;
          grid-template-columns: 320px;
          gap: 14.98px 0;
        }
      }
    }
  }
`;
export const AboutViewSection = styled.div`
  & > .section1 {
    height: 1156px;
    position: relative;
    .ball {
      width: 161px;
      height: 161px;
      position: absolute;
    }
    & > .top {
      background-color: #cd3325;
      height: 962px;

      & > .wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        color: white;
        box-sizing: border-box;
        padding-top: 185px;
        & > .one {
          top: 354px;
          left: -69px;
        }
        & > .two {
          top: 674px;
          right: -118px;
        }
        & > .title-wrapper {
          & > .title {
            font-family: mont;
            font-size: 60px;
            font-weight: bold;
          }
          & > .sub {
            font-size: 25px;
            font-weight: bold;
            line-height: 38px;
            margin: 66px 0 14px 0;
          }
        }
        & > .list {
          display: grid;
          grid-template-columns: 226px 240px 218px;
          column-gap: 75.5px;
          & > .box {
            & > img {
              width: 200px;
              height: 200px;
            }
            & > .category {
              font-family: mont;
              font-size: 30px;
              font-weight: bold;
            }
            & > .title {
              font-size: 20px;
              font-weight: bold;
              margin: 8px 0 10px 0;
            }
            & > .content {
              font-size: 14px;
              line-height: 20px;
              font-weight: 300;
              white-space: pre-line;
            }
          }
        }
      }
    }
    & > .wrapper {
      transform: scaleX(-1);
      position: relative;
      & > .three {
        right: 101px;
        bottom: -49px;
      }
      & > .block {
        height: 97px;
        width: 100vw;
        background-color: #cd3325;
      }
      & > .one {
        margin-left: 434px;
      }
      & > .two {
        margin-left: 574px;
      }
    }
  }
  & > .section2 {
    height: 1534px;
    & > .wrapper {
      box-sizing: border-box;
      padding-top: 226px;
      & > .title {
        font-family: mont;
        font-size: 48px;
        font-weight: bold;
        height: 82px;
        display: flex;
        align-items: center;
      }
      & > .sub {
        font-size: 36px;
        font-weight: 300;
      }
      & > .list {
        margin-top: 74px;
        background-color: black;
        display: grid;
        row-gap: 1px;
        border-top: solid 1px black;
        grid-template-rows: 60px 301px 253px 205px 60px 60px;
        & > .box {
          width: 100%;
          background-color: white;
          display: flex;
          justify-content: space-between;
          & > .year {
            font-family: mont;
            font-size: 35px;
            font-weight: 600;
            height: 60px;
            display: flex;
            align-items: center;
          }
          & > .content-wrapper {
            width: 535px;
            box-sizing: border-box;
            padding: 13px 0;
            display: grid;
            row-gap: 13px;
            grid-template-rows: 35px;
            & > .content {
              display: flex;
              align-items: center;
              font-size: 20px;
              font-weight: 400;
              white-space: nowrap;
              & > .month {
                font-weight: bold;
                margin-right: 10px;
              }
            }
          }
        }
      }
    }
  }
  & > .section3 {
    width: 100%;
    height: 1203px;
    background-color: #f6f6f6;
    border-top-right-radius: 301px;
    & > .wrapper {
      box-sizing: border-box;
      padding-top: 100px;
      display: flex;
      column-gap: 27px;
      align-items: center;
      & > .title {
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        font-family: mont;
        font-size: 120px;
        font-weight: bold;
        width: 170px;
      }
      & > .list {
        width: 841px;
        display: grid;
        row-gap: 94px;
        grid-template-rows: repeat(3, 200px);
        height: fit-content;
        & > .box {
          width: 100%;
          display: flex;
          column-gap: 38px;
          align-items: center;
          & > .img-wrapper {
            width: 200px;
            height: 200px;
          }
          & > .content-wrapper {
            width: 600px;
            height: 100%;
            & > .top {
              display: flex;
              justify-content: space-between;
              align-items: flex-end;

              & > .left {
                font-weight: bold;
                & > .title {
                  font-family: mont;
                  font-size: 30px;

                  margin-bottom: 8px;
                }
                & > .sub {
                  font-size: 20px;
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
              white-space: pre-line;
              font-size: 15px;
              line-height: 27px;
              font-size: 300;
            }
          }
        }
      }
    }
  }
  & > .section4 {
    height: 1182px;
    & > .wrapper {
      padding: 108px 117px 0 117px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      & > .content-wrapper {
        & > .sub {
          font-family: mont;
          font-size: 25px;
          font-weight: bold;
        }
        & > .title {
          font-size: 36px;
          font-weight: bold;
          margin-top: 20px;
        }
        & > .list {
          display: grid;
          grid-template-columns: repeat(4, 218px);
          grid-template-rows: repeat(2, 309px);
          gap: 20px 21px;
          margin-top: 37px;
        }
      }
      & > .btn {
        transition: background-color 0.2s ease-in-out;
        cursor: pointer;
        margin-top: 61px;
        align-self: center;
        width: 217px;
        height: 50px;
        background-color: black;
        display: flex;
        box-sizing: border-box;
        padding: 0 20.7px 0 17.2px;
        align-items: center;
        justify-content: space-between;
        & > .text {
          font-family: mont;
          font-size: 15px;
          font-weight: 400;
          color: white;
        }
        & > .arrow {
          width: 50px;
          transform: translateY(-3px);
        }
      }
      & > .btn:hover {
        background-color: #cd3325;
      }
    }
  }
  @media screen and (max-width: 1365px) {
    & > .section1 {
      height: 825px;
      .ball {
        width: 96px;
        height: 96px;
      }
      & > .top {
        height: 721px;
        & > .wrapper {
          padding-top: 147px;
          & > .one {
            left: -51px;
            top: 177px;
          }
          & > .two {
            top: 603px;
            right: -65px;
          }
          & > .title-wrapper {
            & > .title {
              font-size: 36px;
            }
            & > .sub {
              font-size: 18px;
              line-height: 27px;
              margin: 43px 0 24px 0;
            }
          }

          & > .list {
            grid-template-columns: 198px 223px 202px;
            column-gap: 28.5px;
            & > .box {
              & > img {
                width: 132px;
                height: 132px;
              }
              & > .category {
                font-size: 22px;
              }
              & > .title {
                font-size: 18px;
                margin: 8px 0 13px 0;
              }
              & > .content {
                font-size: 13px;
              }
            }
          }
        }
      }
      & > .wrapper {
        & > .three {
          right: 77px;
          bottom: -48px;
        }
        & > .block {
          height: 54.54px;
        }
        & > .one {
          margin-left: 267.67px;
        }
        & > .two {
          margin-left: 346.38px;
        }
      }
    }
    & > .section2 {
      height: 1516px;
      & > .wrapper {
        padding-top: 159px;
        & > .title {
          font-size: 36px;
          height: 30px;
          margin-bottom: 24px;
        }
        & > .sub {
          font-size: 30px;
        }
        & > .list {
          margin-top: 45px;
          grid-template-rows: 60px 280px 236px 189px 60px 60px;
          & > .box {
            & > .year {
              font-size: 35px;
            }
            & > .content-wrapper {
              width: 411px;
              padding: 16px 0;
              row-gap: 16px;
              grid-template-rows: 28px;
              & > .content {
                font-size: 16px;
                & > .month {
                  width: 20px;
                  margin-right: 7px;
                }
              }
            }
          }
        }
      }
    }
    & > .section3 {
      height: 861px;
      & > .wrapper {
        padding-top: 138px;
        column-gap: 50px;
        & > .title {
          font-size: 65px;
          width: 64px;
        }
        & > .list {
          width: 590px;
          row-gap: 70px;
          grid-template-rows: repeat(3, 155px);
          & > .box {
            column-gap: 30px;
            & > .img-wrapper {
              width: 134px;
              height: 134px;
            }
            & > .content-wrapper {
              width: 423px;
              & > .top {
                & > .left {
                  & > .title {
                    font-size: 25px;
                    margin-bottom: 6px;
                  }
                  & > .sub {
                    font-size: 16px;
                  }
                }
                & > .logo {
                  width: 150px;
                }
              }
              & > .line {
                margin: 7px 0 9px 0;
              }
              & > .bottom {
                line-height: 25px;
              }
            }
          }
        }
      }
    }
    & > .section4 {
      height: 1193px;

      & > .wrapper {
        padding: 244px 0 0 0;
        & > .content-wrapper {
          & > .sub {
            font-size: 30px;
          }
          & > .title {
            font-size: 28px;
            margin-top: 28px;
          }
          & > .list {
            margin-top: 41px;
            grid-template-columns: repeat(4, 164px);
            grid-template-rows: repeat(2, 232px);
            gap: 15px 16px;
          }
        }
        & > .btn {
          margin-top: 54px;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    & > .section1 {
      height: 1503px;
      & > .ball {
        width: 95px;
        height: 95px;
      }
      & > .top {
        height: 1376px;
        & > .wrapper {
          padding-top: 194px;
          & > .one {
            left: -60px;
            top: 384px;
          }
          & > .two {
            top: 1223px;
            right: -53px;
          }
          & > .title-wrapper {
            & > .title {
              font-size: 30px;
              line-height: 32px;
            }
            & > .sub {
              font-size: 17px;
              line-height: 25px;
              margin: 14px 0 63px 0;
            }
          }
          & > .list {
            grid-template-columns: 223px;
            gap: 49px 0;
            & > .box {
              & > img {
                width: 127px;
                height: 127px;
              }
              & > .category {
                font-size: 24px;
              }
              & > .title {
                font-size: 20px;
                margin: 9px 0;
                height: 19px;
              }
              & > .content {
                font-size: 14px;
              }
            }
          }
        }
      }
      & > .wrapper {
        & > .three {
          right: 22px;
          bottom: -39px;
        }
        & > .one {
          height: 57px;
          margin-left: 86px;
        }
        & > .two {
          height: 74px;
          margin-left: 172px;
        }
      }
    }
    & > .section2 {
      height: 1667px;
      & > .wrapper {
        padding-top: 147px;
        & > .title {
          font-size: 30px;
          height: 30px;
          margin-bottom: 12px;
        }
        & > .sub {
          font-size: 18px;
          line-height: 125%;
        }
        & > .list {
          margin-top: 42px;
          grid-template-rows: 113px 307px 248px 230px 92px 89px;
          & > .box {
            flex-direction: column;
            justify-content: center;
            row-gap: 5px;
            & > .year {
              font-size: 30px;
              height: 30px;
            }
            & > .content-wrapper {
              padding: unset;
              width: 100%;
              row-gap: 17px;
              grid-template-rows: unset;
              & > .content {
                font-size: 13px;
                white-space: pre-line;
                align-items: flex-start;
                & > .month {
                  width: 18px;
                  margin-right: 6px;
                }
                & > .text {
                  line-height: 129%;
                }
              }
            }
          }
          & > .box:nth-child(n + 3) {
            row-gap: 15px;
          }
          & > .box:nth-child(6) {
            row-gap: 11px;
          }
        }
      }
    }
    & > .section3 {
      height: 2351px;
      border-top-right-radius: 103px;
      & > .wrapper {
        padding-top: 153px;
        column-gap: unset;
        row-gap: 46px;
        flex-direction: column;
        & > .title {
          writing-mode: unset;
          transform: unset;
          font-size: 35px;
          width: fit-content;
        }
        & > .list {
          width: 100%;
          grid-template-rows: unset;
          row-gap: 190px;
          & > .box {
            column-gap: unset;
            flex-direction: column;
            row-gap: 18px;
            & > .img-wrapper {
              width: 220px;
              height: 220px;
            }
            & > .content-wrapper {
              width: 100%;
              & > .top {
                justify-content: center;
                text-align: center;
                & > .left {
                  & > .title {
                    font-size: 30px;
                    margin-bottom: unset;
                    height: 50px;
                    display: flex;
                    align-items: center;
                  }
                  & > .sub {
                    font-size: 20px;
                  }
                }
              }
              & > .line {
                margin: 13px 0 20px 0;
              }
              & > .bottom {
                font-size: 15px;
                text-align: center;
              }
            }
            & > .logo {
              margin-top: 0px;
            }
          }
          & > .box:nth-child(1) {
            & > .logo {
              transform: translateX(-25px);
            }
          }
        }
      }
    }
    & > .section4 {
      height: 1018px;
      & > .wrapper {
        padding: 235px 0 0 0;
        & > .content-wrapper {
          & > .sub {
            font-size: 22px;
          }
          & > .title {
            font-size: 24px;
            line-height: 128%;
            margin-top: 5px;
          }
          & > .list {
            grid-template-columns: repeat(4, 75px);
            grid-template-rows: repeat(2, 106px);
            gap: 7px;
            margin-top: 25px;
          }
        }
        & > .btn {
          margin-top: 49px;
        }
      }
    }
  }
`;
export const BusinessSection = styled.div`
  width: 100%;
  background-color: black;
  color: white;
  & > .section1 {
    overflow: hidden;
    height: 786px;
    & > .wrapper {
      height: 100%;
      position: relative;
      box-sizing: border-box;
      padding-top: 178px;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > .title {
        font-family: mont;
        font-size: 60px;
        font-weight: bold;
      }
      & > .sub {
        font-size: 33px;
        line-height: 50px;
        margin: 54px 0 50px 0;
        text-align: center;
      }
      & > .list {
        display: grid;
        grid-template-columns: 122px 91px 100px;
        column-gap: 74px;
        & > .box {
          font-family: mont;
          font-weight: bold;
          text-align: center;
          & > .number {
            font-size: 50px;
            margin-bottom: 3.5px;
          }
          & > .title {
            white-space: nowrap;
            font-size: 20px;
          }
        }
      }
      & > .ball {
        position: absolute;
      }
      & > .one {
        top: 151px;
        right: -160px;
      }
      & > .two {
        top: 347px;
        left: -127px;
      }
      & > .three {
        bottom: -69px;
        right: 37px;
      }
    }
  }
  & > .section2 {
    height: 5063px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 104px;
    & > .wrapper {
      display: flex;
      flex-direction: column;
      row-gap: 1px;
      background-color: white;
    }
    & > .nav-btn {
      transition: 0.2s ease-in-out;
      cursor: pointer;
      border: solid 1px white;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 240px;
      height: 50px;
      box-sizing: border-box;
      padding: 0 20px 0 17px;
      & > .text {
        font-family: mont;
        font-size: 15px;
        color: white;
        font-weight: 400;
      }
      & > .img-wrapper {
        height: 27px;
        width: 50px;
      }
    }
    & > .nav-btn:hover {
      background-color: white;
      & > .text {
        color: #000000;
      }
      & > .img-wrapper {
        & > svg {
          & > path {
            stroke: #000000;
          }
        }
      }
    }
  }
  /* & > .section3 {
    height: 873px;
    & > .wrapper {
      color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      & > .title {
        font-family: mont;
        font-size: 50px;
        font-weight: bold;
      }
      & > .line {
        width: 1px;
        height: 79px;
        background-color: white;
        margin: 14px 0 19px 0;
      }
      & > .sub {
        font-size: 36px;
        font-weight: bold;
      }
      & > .img-wrapper {
        margin-top: 48px;
      }
    }
  } */
  @media screen and (max-width: 1365px) {
    & > .section1 {
      height: 675px;
      & > .wrapper {
        padding-top: 147px;
        & > .title {
          font-size: 36px;
        }
        & > .sub {
          font-size: 18px;
          line-height: 27px;
          margin: 29px 0;
        }
        & > .list {
          grid-template-columns: 102px 73px 90px;
          column-gap: 60px;
          & > .box {
            & > .number {
              font-size: 40px;
            }
            & > .title {
              font-size: 18px;
            }
          }
        }
        & > .ball {
          width: 124px;
          height: 124px;
        }
        & > .one {
          top: 129px;
          right: -82px;
        }
        & > .two {
          top: 300px;
          left: -52px;
        }
        & > .three {
          bottom: 99px;
          right: 10px;
        }
      }
    }
    & > .section2 {
      height: 3498px;
      row-gap: 70px;
    }
    /* & > .section3 {
      height: 649px;
      & > .wrapper {
        & > .title {
          font-size: 40px;
        }
        & > .line {
          margin: 14px 0;
        }
        & > .sub {
          font-size: 25px;
        }
        & > .img-wrapper {
          margin-top: 36px;
        }
      }
    } */
  }
  @media screen and (max-width: 767px) {
    & > .section1 {
      height: 653px;
      & > .wrapper {
        padding-top: 190px;
        & > .title {
          font-size: 30px;
        }
        & > .sub {
          font-size: 19px;
          margin: 29px 0 21px 0;
        }
        & > .list {
          grid-template-columns: 69px 49px 65px;
          column-gap: 30px;
          & > .box {
            & > .number {
              font-size: 27px;
              margin-bottom: 7px;
            }
            & > .title {
              font-size: 13px;
            }
          }
        }
        & > .ball {
          width: 65px;
          height: 65px;
        }
        & > .one {
          top: 217px;
          right: -48px;
        }
        & > .two {
          top: 282px;
          left: -41px;
        }
        & > .three {
          bottom: 126px;
          right: 20px;
        }
      }
    }
    & > .section2 {
      height: 4923px;
      row-gap: 56px;
    }
    /* & > .section3 {
      height: 537px;
      & > .wrapper {
        & > .title {
          font-size: 30px;
        }
        & > .line {
          margin: 15px 0;
        }
        & > .sub {
          font-size: 22px;
          line-height: 137.3%;
          text-align: center;
        }
        & > .img-wrapper {
          margin-top: 25px;
        }
      }
    } */
  }
`;
export const BusinessBox = styled.div`
  background-color: black;
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: ${(props) => (props.index === 1 ? "row-reverse" : "row")};
  padding: ${(props) =>
    props.index === 0
      ? "0 0 117px 0 "
      : props.index === 1
      ? "76px 0 156px 0"
      : "104px 0 0 0"};
  & > .images {
    display: grid;
    grid-template-columns: 553px;
    grid-template-rows: repeat(3, 421px);
    row-gap: 28px;
    & > .img-wrapper {
      & > img {
        height: 100%;
      }
    }
  }
  & > .content-wrapper {
    height: fit-content;
    & > .title-wrapper {
      display: flex;
      align-items: center;
      font-weight: 500;
      column-gap: 12px;
      & > .title {
        font-family: mont;
        font-size: 33px;
      }
      & > .category {
        font-size: 25px;
      }
    }
    & > .content {
      white-space: pre-wrap;
      margin-top: 9px;
      font-size: 18px;
      line-height: 140%;
      font-weight: 300;
    }
    & > button {
      padding-left: 0;
      margin-top: 50px;
      background-color: transparent;
      color: white;
      display: flex;
      flex-direction: column;
      cursor: pointer;
      & > .text {
        font-size: 15px;
      }
      & > .arrow {
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
    & > button:hover {
      & > .arrow {
        & > .line {
          width: 212.5px;
        }
        & > .two {
          width: 235px;
        }
      }
    }
    & > .list-wrapper {
      display: flex;
      flex-direction: column;
      row-gap: 72px;
      margin-top: 200px;
    }
  }
  @media screen and (max-width: 1365px) {
    padding: ${(props) =>
      props.index === 0
        ? "0 0 97px 0 "
        : props.index === 1
        ? "86px 0 84px 0"
        : "73px 0 0 0"};
    & > .images {
      grid-template-columns: 334px;
      grid-template-rows: repeat(3, 263px);
      row-gap: 17px;
    }
    & > .content-wrapper {
      & > .title-wrapper {
        flex-direction: column;
        align-items: flex-start;
        row-gap: 7px;
        column-gap: unset;
        & > .title {
          font-size: 25px;
        }
        & > .category {
          font-size: 23px;
        }
      }
      & > .content {
        margin-top: 8px;
        font-size: 14px;
      }
      & > button {
        margin-top: 41px;
      }
      & > .list-wrapper {
        row-gap: 42px;
        margin-top: 155px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: ${(props) =>
      props.index === 0
        ? "0 0 109px 0 "
        : props.index === 1
        ? "88px 0 157px 0"
        : "83px 0 0 0"};
    flex-direction: column;
    justify-content: unset;
    row-gap: ${(props) =>
      props.index === 0 ? "69.5px" : props.index === 1 ? "63.5px" : "82.5px"};
    & > .images {
      grid-template-columns: 320px;
      grid-template-rows: repeat(3, 224px);
      row-gap: 16px;
    }
    & > .content-wrapper {
      & > .title-wrapper {
        row-gap: 5px;
        & > .category {
          font-size: 18px;
        }
        & > .title {
          font-size: 24px;
        }
      }
      & > .content {
        margin-top: 11px;
      }
      & > button {
        margin-top: ${(props) => (props.index === 0 ? "52px" : "38px")};
        & > .text {
          font-size: 13px;
        }
        & > .arrow {
          & > .line {
            width: 174px;
          }
          & > .two {
            width: 184.5px;
          }
        }
      }
    }
    & > .list-wrapper {
      display: flex;
      flex-direction: column;
      margin-top: 111px;
      row-gap: 70px;
    }
  }
`;
export const GoveList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 13px;
  & > .title {
    font-size: 20px;
    font-weight: bold;
  }
  & > .content-wrapper {
    box-sizing: border-box;
    display: grid;
    row-gap: 17px;
    width: 520px;
    background-color: rgba(255, 255, 255, 0.15);
    padding: ${(props) => (props.index === 0 ? "30px" : " 35px")};
    & > .text-box {
      display: flex;
      column-gap: 19px;
      font-size: 18px;
      & > .year {
        font-weight: bold;
      }
      & > .content {
        font-weight: 400;
        line-height: 174.8%;
        white-space: pre-wrap;
      }
    }
  }
  @media screen and (max-width: 1365px) {
    row-gap: 15px;
    & > .title {
      font-size: 17px;
    }
    & > .content-wrapper {
      padding: ${(props) =>
        props.index === 0 ? "20px 30px 21px 21px" : " 21px 11px 24px  15px"};
      row-gap: ${(props) => (props.index === 0 ? "11px" : " 20px")};
      width: 327px;
      & > .text-box {
        column-gap: 9px;
        font-size: 13px;
      }
    }
  }
  @media screen and (max-width: 767px) {
    row-gap: 13px;
    & > .title {
      font-size: 20px;
    }
    & > .content-wrapper {
      width: 322px;
      row-gap: 17px;
      padding: ${(props) =>
        props.index === 0 ? "21px 25px 21px 24px" : " 21px 11px 23px 15px"};
      & > .text-box {
      }
    }
  }
`;
