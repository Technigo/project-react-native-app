import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
// import { SensorComponent } from "./components/SensorComponent";
import StepCounter from "./components/StepCounter";

// const Container = styled.View`
//   flex: 1;
//   background-color: papayawhip;
//   justify-content: center;
//   align-items: center;
// `;

// const Title = styled.Text`
//   font-size: 24px;
//   color: palevioletred;
// `;

const App = () => {
  return (
    <View>
      {/* <SensorComponent></SensorComponent> */}
      <StepCounter />
    </View>
  );
};

export default App;
