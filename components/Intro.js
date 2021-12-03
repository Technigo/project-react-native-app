import React from "react";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import { potter } from "../reducers/potter"; // Reducer potter
import { renderCards } from "../reducers/potter"; // Redux Thunk potter
import { View, Text, TouchableOpacity, ImageBackground } from "react-native"; // Core components

// Styled core components
const FlexContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Container = styled.View`
  height: 100px;
`;

const Question = styled.Text`
  margin: 10px 0 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
`;
const Button = styled.TouchableOpacity`
  margin: 0 auto;
  background-color: #dddddd;
  padding: 5px;
  width: 50px;
`;

const ButtonText = styled.Text`
  color: #000;
  font-size: 20px;
  text-align: center;
  font-weight: 700;
`;

const Background = styled.ImageBackground`
 height: 100%;
`;
const image = { uri: "https://wallpaper.dog/large/985111.jpg" };

// Function
const Intro = () => {
  const dispatch = useDispatch();
  const fan = useSelector((store) => store.potter.fan);

  // When the user clicks the yes button, it makes 2 actions to work;
  // It calls the API + changes the value from false to true of the fan key
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(renderCards());
    dispatch(potter.actions.setIntro(true));
  };

  return (
    <>
      <Background source={image} resizeMode="cover">
        <FlexContainer>
          <Container>
            <Question>Are you a Harry Potter's fan?</Question>

            <Button onPress={handleSubmit}>
              <ButtonText>YES</ButtonText>
            </Button>
          </Container>
        </FlexContainer>
      </Background>
    </>
  );
};
export default Intro;
