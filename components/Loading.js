import React from "react";
import styled from "styled-components/native";
import LottieView from "lottie-react-native";

// I only got Lottie to work when i followed Lotties instructions of how to use it in react native.
// Hence there is a class function in this component, which means there wont be a useEffect.

export default class Loading extends React.Component {
  componentDidMount() {
    this.animation.play();
  }

  render() {
    return (
      <Container>
        <LottieView
          ref={(animation) => {
            this.animation = animation;
          }}
          source={require("../assets/Lotties/spinner.json")}
        />
      </Container>
    );
  }
}

const Container = styled.View`
  background-color: black;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
