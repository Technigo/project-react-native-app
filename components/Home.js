import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

import ShakeCookie from "./ShakeCookie";

const OuterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`;

const Container = styled.View`
  flex: 1;
  height: 120px;
  width: 150px;
  justify-content: center;
  align-items: center;
  margin: 100px auto;
`;

const CoverImage = styled.ImageBackground`
  margin: 0;
  height: 102%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const HomeButton = styled.TouchableOpacity`
  width: 70%;
  height: 40px;
  background-color: #ffff4d;
  padding: 3px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

const LinearBg = styled(LinearGradient).attrs({
  colors: ["#ffff66", "#ffffb3"],
  start: { x: 0, y: 0.5 },
  end: { x: 1, y: 0.8 },
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const TextButton = styled.Text`
  color: red;
  font-size: 15px;
`;

const Home = () => {
  const [page, setPage] = useState("Home");

  return (
    <>
      {page === "Home" ? (
        <CoverImage source={require("../assets/cover.jpg")}>
          <OuterContainer>
            <Container>
              <HomeButton title="Home" onPress={() => setPage("Cookie")}>
                <LinearBg>
                  <TextButton>Find your luck!</TextButton>
                </LinearBg>
              </HomeButton>
            </Container>
          </OuterContainer>
        </CoverImage>
      ) : (
        <ShakeCookie />
      )}
    </>
  );
};

export default Home;
