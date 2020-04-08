import React, { useState } from "react";
import * as Haptics from "expo-haptics";
import styled from "styled-components/native";
import { StatusBar, Alert } from "react-native";
import { Fetch } from "./components/Fetch";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Lottie } from "./components/Lottie";
import { RandomBeer } from "./components/RandomBeer";
import { StyledButton } from "./components/StyledButton";
import { StyledButtonReverse } from "./components/StyledButtonReverse";

const Container = styled.View`
  flex: 1;
  background-color: #fcfaf1;
  align-items: center;
`;
const Wrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const RowWrapper = styled.View`
  flex-direction: row;
`;

const handleOnclick = (beerCount, setBeerCount, setBeer, setPress) => {
  if (beerCount < 5) {
    setPress(true);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setBeerCount(beerCount + 1);
  } else {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    Alert.alert(
      "Hey there!",
      "Seems like you're checking out beers fast, don't forget to drink some water 🥤🥤🥤",
      [
        {
          text: "You got it boss! 👍",
          onPress: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            setBeerCount(0);
            setBeer();
          },
        },
      ]
    );
  }
};

const App = () => {
  const [press, setPress] = useState(false);
  const [beer, setBeer] = useState();
  let [beerCount, setBeerCount] = useState(0);

  return (
    <Container>
      <StatusBar barStyle="dark-content" hidden={false} />
      <Header
        title="🍻 IPA from API 🍻"
        titleTwo={`The #1 app for beer lovers`}
      />
      <Wrapper>
        {!beer && <Lottie />}
        <RowWrapper>
          {beer && (
            <StyledButtonReverse
              width="80px"
              buttonText="Back"
              pressValue={() => {
                setBeer();
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
              }}
            />
          )}
          <StyledButton
            buttonText={!beer ? "Time for a 🍺?" : "And another one..."}
            pressValue={() =>
              handleOnclick(beerCount, setBeerCount, setBeer, setPress)
            }
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

//Saved these lines because I use them in my snack, couldn't get Lottie to work there.
{
  /* <GifWrapper>
 <Gif
accessibilityLabel="Beer being poured into a glass"
source={require("./images/beer5.gif")}
/>
</GifWrapper>   */
}

// const GifWrapper = styled.View`
//   align-items: center;
//   margin-bottom: 20px;

//   overflow: hidden;

//   border: 2px solid #ab782c;

//   border-top-left-radius: 5px;
//   border-top-right-radius: 30px;
//   border-bottom-left-radius: 30px;
//   border-bottom-right-radius: 5px;

//   shadow-opacity: 1;
//   shadow-radius: 0px;
//   shadow-color: #6e4d1b;
//   shadow-offset: 4px 4px;
// `;

// const Gif = styled.Image`
//   width: 350px;
//   height: 400px;
// `;
