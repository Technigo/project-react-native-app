import React, { useState } from "react";
import styled from "styled-components/native";
import { StatusBar } from "react-native";
import { Header } from "./components/Header";
import { Fetch } from "./components/Fetch";
import { RandomBeer } from "./components/RandomBeer";
import { StyledButton } from "./components/StyledButton";
import { StyledButtonReverse } from "./components/StyledButtonReverse";
import { Footer } from "./components/Footer";

const Container = styled.View`
  flex: 1;
  background-color: #fcfaf1;
  align-items: center;
`;
const Wrapper = styled.View`
  flex: 1;
  align-items: center;
`;

const RowWrapper = styled.View`
  flex-direction: row;
`;

const GifWrapper = styled.View`
  flex: 1;
  align-items: center;
  margin-bottom: 20px;

  border: 2px solid #ab782c;

  border-top-left-radius: 5px;
  border-top-right-radius: 30px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 5px;

  shadow-opacity: 1;
  shadow-radius: 0px;
  shadow-color: #6e4d1b;
  shadow-offset: 4px 4px;

  overflow: hidden;
`;

const Gif = styled.Image`
  flex: 1;
	width: 350px
	overflow: hidden;
`;

const App = () => {
  const [press, setPress] = useState(false);
  const [beer, setBeer] = useState();

  return (
    <Container>
      <StatusBar barStyle="dark-content" hidden={false} />
      <Header
        title="🍻 IPA from API 🍻"
        titleTwo={`The #1 app for beer lovers`}
      />
      <Wrapper>
        {!beer && (
          <GifWrapper>
            <Gif
              accessibilityLabel="Beer being poured into a glass"
              source={require("./images/beer.gif")}
            />
          </GifWrapper>
        )}

        <RowWrapper>
          {beer && (
            <StyledButtonReverse
              width="80px"
              buttonText="Back"
              pressValue={() => setBeer()}
            />
          )}
          <StyledButton
            buttonText={!beer ? "Time for a 🍺?" : "And another one..."}
            pressValue={() => setPress(true)}
            fontColor={`#a86913`}
          />
        </RowWrapper>
        {press && <Fetch setBeer={setBeer} />}
        {beer && <RandomBeer press={press} beer={beer} setPress={setPress} />}
      </Wrapper>
      {!beer && (
        <Footer
          name={"Christina Persson"}
          project={"2020 - First React native project"}
        />
      )}
    </Container>
  );
};

export default App;
// border: 2px solid #ab782c;

// border-top-left-radius: 5px;
// border-top-right-radius: 30px;
// border-bottom-left-radius: 30px;
// border-bottom-right-radius: 5px;

// shadow-opacity: 1;
// shadow-radius: 0px;
// shadow-color: #6e4d1b;
// shadow-offset: 4px 4px;
