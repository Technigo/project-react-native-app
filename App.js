import React, { useState } from "react";
import styled from "styled-components/native";
import { useFonts } from "expo-font";

import Theme from "./Theme";
import ShakeApi from "./components/ShakeApi";
import StartingPage from "./components/StartingPage";
import ShakePhone from "./components/ShakePhone";
import Planets from "./components/Planets";
import Loading from "./components/Loading";

const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.textYellow};
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  font-family: "SWFont";
  color: ${(props) => props.theme.colors.textYellow};
`;

const showPage = ["StartingPage", "ShakePhone", "Planets"];

const App = () => {
  const [currentPage, setCurrentPage] = useState(showPage[0]);
  // font is downloaded from here: https://www.fontspace.com/sf-distant-galaxy-font-f6436
  let [fontsLoaded] = useFonts({
    SWFont: require("./assets/SfDistantGalaxy.ttf"),
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  const showCurrentPage = () => {
    switch (currentPage) {
      case "StartingPage":
        return (
          <StartingPage
            setCurrentPage={setCurrentPage}
            showPage={showPage}
          />
        );
      case "ShakePhone":
        return <ShakePhone />;
      case "Planets":
        return <Planets />;
      default:
        return <StartingPage />;
    }
  };

  return (
    <Theme>
      <Container>
        {showCurrentPage()}
        {/* <Title>Is this star wars?</Title>

        <ShakeApi /> */}
        <Loading />
      </Container>
    </Theme>
  );
};

export default App;
