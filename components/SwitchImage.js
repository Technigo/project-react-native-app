import { Epilogue_500Medium } from "@expo-google-fonts/epilogue";
import React from "react";
import { Image } from "react-native";
import styled from "styled-components/native";

const RonImage = styled.Image`
  width: 100%;
  height: 40%;
  margin-bottom: 10px;
`;

const SwitchImage = () => {
  return <RonImage source={require("../assets/ron.jpeg")}></RonImage>;
};

export default SwitchImage;
