import React, { useState } from "react";
import styled from "styled-components/native";
import { useFonts } from "expo-font";

import Theme from "./Theme";
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
  font-family: "SWFontHollow";
  color: ${(props) => props.theme.colors.textYellow};
`;

const App = () => {
  // state to handle which component is loaded
  const [currentPage, setCurrentPage] = useState("StartPage");
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

  const handleCurrentPage = (category) => {
    setCurrentPage(category);
  };

  return (
    <Theme>
      <Container>
        {loading && <Loading />}
        {currentPage === "StartPage" && (
          <StartingPage setCurrentPage={setCurrentPage} />
        )}
        {currentPage === "Planets" && (
          <Planets
            setCurrentPage={setCurrentPage}
            setLoading={setLoading}
          />
        )}
      </Container>
    </Theme>
  );
};

export default App;
