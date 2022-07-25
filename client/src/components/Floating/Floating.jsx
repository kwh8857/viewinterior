import React from "react";
import styled from "styled-components";

const TelFloating = styled.a`
  position: fixed;
  z-index: 1000;
  transform: translateZ(2px);
  right: 5%;
  bottom: 5%;
  width: 99px;
  height: 99px;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 99px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 6.27px;
  cursor: pointer;
  & > img {
    width: 33.84px;
  }
  & > div {
    font-weight: 700;
    font-size: 15px;
    color: white;
  }
  @media screen and (max-width: 1365px) {
    width: 78px;
    height: 78px;
    row-gap: 4px;
    & > img {
      width: 26.66px;
    }
    & > div {
      font-size: 13px;
    }
  }
`;

function Floating() {
  return (
    <TelFloating href="tel:010-9345-9293">
      <img src="/assets/common/tel.svg" alt="" />
      <div>전화문의</div>
    </TelFloating>
  );
}

export default Floating;
