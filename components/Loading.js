import React from "react";

import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99;
  background-color: black;
`;

const LoadingSpinner = styled.div`
  display: inline-block;
  width: 90px;
  height: 90px;
  border: 5px solid #dcdcdc;
  border-radius: 50%;
  border-left: 5px solid #000;
  animation: spinner infinite 0.5s;

  @keyframes spinner {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

 const Loading = () => {
  return (
    <Overlay>
      <LoadingSpinner></LoadingSpinner>
    </Overlay>
  );
};

export default Loading;