import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

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
  font-size: 16px;
  text-align: center;
  padding: 3px;
  border-radius: 2px;
`;

const Home = ({ navigation }) => {
  return (
    <CoverImage source={require("../assets/cover.jpg")}>
      <OuterContainer>
        <Container>
          <HomeButton
            title="To the game"
            onPress={() => navigation.navigate("Ball")}
          >
            <Text>Find your luck!</Text>
          </HomeButton>
        </Container>
      </OuterContainer>
    </CoverImage>
  );
};

export default Home;
