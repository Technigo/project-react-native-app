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
  // state to handle which component is loaded
  const [currentPage, setCurrentPage] = useState(showPage[0]);
  const [loading, setLoading] = useState(false);
  // font is downloaded from here: https://www.fontspace.com/sf-distant-galaxy-font-f6436
  // How to use custom font in react native: https://blog.jsdisco.dev/using-custom-fonts-with-expo
  let [fontsLoaded] = useFonts({
    SWFont: require("./assets/SfDistantGalaxy.ttf"),
    SWFontHollow: require("./assets/SfDistantGalaxyHollow.ttf"),
  });

  // while the fonts are loading, show the loading-spinner
  if (!fontsLoaded) {
    return (
      <Theme>
        <Loading />
      </Theme>
    );
  }

  // function that controls which component to show with a switch
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
        {loading && <Loading />}
        {showCurrentPage()}
      </Container>
    </Theme>
  );
};

export default App;
