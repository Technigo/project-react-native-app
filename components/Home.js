import React, { useState } from "react";
import { Text } from "react-native";
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
  background-color: white;
  color: red;
  font-size: 14px;
  padding: 3px;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
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
                <Text>Find your luck!</Text>
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
