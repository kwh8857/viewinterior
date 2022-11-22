import styled from "styled-components";

export const HeaderSection = styled.header`
  width: 100%;
  height: 79px;
  background-color: ${(props) =>
    props.isBlack ? "black" : props.iswhite ? "white" : "#cd3325"};
  transition: background-color 0.3s ease-in-out;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  border-bottom: ${(props) => (props.iswhite ? "solid 1px black" : "unset")};
  & > .wrapper {
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    justify-content: center;
    & > .logo {
      width: 82px;
      height: 23.8px;
      position: absolute;
      left: 0;
      cursor: pointer;
    }
    & > nav {
      height: 100%;
      display: grid;
      align-items: center;
      position: relative;
      grid-template-columns: ${(props) =>
        props.location === "/"
          ? " 51px 67px 110px 122px 89px"
          : props.location === "/about"
          ? "136px 136px 136px"
          : ""};
      column-gap: ${(props) =>
        props.location === "/"
          ? "40px"
          : props.location === "/about"
          ? "84px"
          : 0};
      & > div {
        font-weight: 500;
        transition: font-weight 0.1s ease-in;
        cursor: pointer;
        color: ${(props) => (props.iswhite ? "black" : "white")};
      }
      & > div:hover {
        font-weight: bold;
      }
      & > .bar {
        transition: left 0.2s ease-in-out;
        position: absolute;
        bottom: -2px;
        width: 136px;
        height: 3px;
        background-color: ${(props) => (props.iswhite ? "#cd3325" : "white")};
      }
      & > .nav-btn {
        text-align: center;
        cursor: pointer;
        font-family: mont;
        font-size: 18px;
        font-weight: 500;
        color: ${(props) => (props.iswhite ? "black" : "white")};
      }
    }
  }
  @media screen and (max-width: 1365px) {
    height: 73px;
    background-color: ${(props) =>
      props.isBlack && !props.open
        ? "black"
        : props.open || props.iswhite
        ? "white"
        : "#cd3325;"};
    transition: background-color 0.3s ease;
    & > .wrapper {
      box-sizing: border-box;
      padding-left: 71px;
      padding-right: 25px;
      & > nav {
        grid-template-columns: repeat(3, 101px);
        column-gap: 48px;
        & > .nav-btn {
          font-size: 15px;
          white-space: nowrap;
        }
        & > .bar {
          width: 101px;
        }
      }
      & > .logo {
        left: 5px;
        width: 71px;
      }
      & > .menu {
        position: absolute;
        right: 5px;
        width: 20px;
        cursor: pointer;
      }
      & > .cancel {
        position: absolute;
        right: 5px;
        width: 24.5px;
        cursor: pointer;
      }
    }
    & > .menu-wrapper {
      position: fixed;
      top: 73px;
      left: 0;
      overflow: hidden;
      background-color: white;
      width: 100vw;
      transition: 0.3s ease-in-out;
      box-sizing: border-box;
      padding-top: ${(props) => (props.open ? "23px" : 0)};
      height: ${(props) => (props.open ? "100vh" : 0)};
      & > .wrapper {
        display: grid;
        grid-auto-rows: 69px;
        row-gap: 1px;
        justify-content: center;
        text-align: center;
        background-color: black;
        & > div {
          cursor: pointer;
          background-color: white;
          width: 704px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 500;
          font-size: 25px;
          font-family: mont;
          transition: font-weight 0.1s ease-in;
        }
        & > div:hover {
          font-weight: bold;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    transform: translateZ(2px);
    height: ${(props) => (props.location === "/about" ? "127px" : "60px")};
    & > .wrapper {
      width: 100%;
      padding: 23px;
      align-items: flex-start;
      & > .logo {
        left: 23px;
      }
      & > .menu {
        right: 23px;
      }
      & > .cancel {
        right: 23px;
      }
      & > nav {
        width: 320px;
        height: 67px;
        margin-top: 36px;
        grid-template-columns: repeat(3, 101px);
        column-gap: 9px;
        & > .nav-btn {
          font-size: 14px;
        }
      }
    }
    & > .menu-wrapper {
      top: 60px;
    }
  }
`;
