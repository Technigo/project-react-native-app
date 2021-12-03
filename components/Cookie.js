import React, { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

import Home from "./Home";

const LinearBg = styled(LinearGradient).attrs({
  colors: ["#ff0000", "#ffff66"],
  start: { x: 0, y: 0.3 },
  end: { x: 0.2, y: 1 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const OuterContainer = styled.View`
  flex: 1;
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

const BackButton = styled.TouchableOpacity`
  width: 70px;
  height: 30px;
  background-color: #ffff66;
  padding: 3px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const BackText = styled.Text`
  color: red;
  font-size: 16px;
`;

const Cookie = () => {
  const [page, setPage] = useState("Cookie");
  const cookie = useSelector((store) => store.quotes.current);

  return (
    <>
      {page === "Cookie" ? (
        <LinearBg>
          <OuterContainer>
            <CookieImage source={require("../assets/cookie4.png")}>
              <QuoteContainer>
                <QuoteText>{cookie?.quote}</QuoteText>
              </QuoteContainer>
            </CookieImage>
            <BackButton title="Cookie" onPress={() => setPage("Home")}>
              <BackText>Go Back!</BackText>
            </BackButton>
          </OuterContainer>
        </LinearBg>
      ) : (
        <Home />
      )}
    </>
  );
};

export default Cookie;
