import React from "react";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
// Reducer potter
import { potter } from "../reducers/potter";
// Redux Thunk potter
import { renderCards } from "../reducers/potter";
// Core components
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

// Styling
const image = { uri: "https://wallpaper.dog/large/985111.jpg"};
const Input = styled.TextInput`
  height: 40px;
  margin: 12px;
  border: 1px solid red;
`;
const BackgroundImage = styled.ImageBackground`
 background-repeat: no-repeat, repeat;
 background-size: cover;
 background-position: center; 
 height: 100vh;
`;

// const Label = styled.label` 
// color:white
// `;

// Function
const Intro = () => {
  const dispatch = useDispatch();
  const fan = useSelector((store) => store.potter.fan);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(renderCards());
    dispatch(potter.actions.setIntro(true));
  };

  const handleInputChange = (event) => {
    dispatch(potter.actions.setUsername(event.target.value));
  };

  return (
    <View>
      <BackgroundImage source={image} >

      <form>
        <label>Are you a Harry Potter's fan?</label>
        <Input
          type="text"
          required
          placeholder=" Type your name ..."
          onChange={handleInputChange}
        />
        <TouchableOpacity onPress={handleSubmit}>
          <Text>YES</Text>

        </TouchableOpacity>

        {/* <button type="submit">YES</button> */}
      </form>

      </BackgroundImage>
    </View>
  );
};
export default Intro;
