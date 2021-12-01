import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/native";

const OuterContainer = styled.View`
  flex: 1;
  background-color: red;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CookieImage = styled.ImageBackground`
  width: 280px;
  height: 280px;
  position: relative;
`;

const QuoteContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px;
  position: absolute;
  top: 80px;
  left: -10px;
  right: 30px;
  bottom: 40px;
  width: 300px;
`;

const QuoteText = styled.Text`
  text-align: center;
  font-weight: 700;
  font-size: 18px;
  color: red;
  background-color: rgba(255, 255, 255, 0.73);
`;

const MagicBall = () => {
  const cookie = useSelector((store) => store.quotes.current);

  return (
    <OuterContainer>
      <CookieImage source={require("../assets/cookie4.png")}>
        <QuoteContainer>
          <QuoteText>{cookie?.quote}</QuoteText>
        </QuoteContainer>
      </CookieImage>
    </OuterContainer>
  );
};

export default MagicBall;
