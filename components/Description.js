import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { useFonts, Epilogue_400Regular } from "@expo-google-fonts/epilogue";

const Container = styled.View`
  margin-bottom: 10px;
  width: fit-content;
  padding: 10px;
  background-color: #adc2a9;
  border: 1px solid #99a799;
  border-radius: 30px;
  text-align: center;
`;
const DescText = styled.Text`
  color: #c55353;
`;

const Description = () => {
  const [fontsLoaded] = useFonts({
    Epilogue_400Regular,
  });

  return (
    <Container>
      <DescText style={{ fontFamily: "Epilogue_400Regular" }}>
        Shake to get Ron's advice
      </DescText>
    </Container>
  );
};

export default Description;
