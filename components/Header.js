import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";
import { useFonts, Epilogue_500Medium } from "@expo-google-fonts/epilogue";

const HeaderContainer = styled.View`
  background-color: #99a799;
  height: 125px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const HeaderText = styled.Text`
  color: #c55353;
  font-weight: 700;
  font-size: 30px;
`;

const Header = () => {
  const [fontsLoaded] = useFonts({
    Epilogue_500Medium,
  });

  return (
    <HeaderContainer>
      <HeaderText style={{ fontFamily: "Epilogue_500Medium" }}>
        When in doubt ask Ron!
      </HeaderText>
    </HeaderContainer>
  );
};

export default Header;
