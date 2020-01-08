import React, { useState, useEffect } from "react";
import styled from "styled-components/native";
import { ActivityIndicator } from "react-native";
import GestureRecognizer from "react-native-swipe-gestures";

const fetchChuck = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const json = await res.json();
  return json;
};

const App = () => {
  const [chuckState, setChuckState] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchChuckData = () => {
    setLoading(true);
    fetchChuck().then(chuckData => {
      setChuckState(chuckData);
      setLoading(false);
      console.log(chuckData);
    });
  };

  useEffect(() => {
    fetchChuckData();
  }, []);

  return (
    <GestureRecognizer
      style={{
        flex: 1
      }}
      onSwipe={fetchChuckData}
    >
      <Container>
        <Image
          source={{
            uri: "http://pngimg.com/uploads/chuck_norris/chuck_norris_PNG14.png"
          }}
        />
        {loading ? (
          <ActivityIndicator size="large" color="#999" />
        ) : (
          <Title>{chuckState && chuckState.value}</Title>
        )}
        <Swipe>swipe for more chuck</Swipe>
      </Container>
    </GestureRecognizer>
  );
};

const Button = styled.TouchableOpacity`
  position: absolute;
  background: white;
  padding: 10px 20px;
  bottom: 40;
  border-radius: 20;
`;

const Image = styled.Image`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const Swipe = styled.Text`
  position: absolute;
  bottom: 10;
  font-size: 18px;
  text-shadow: 2px 2px 10px #000000;
  font-weight: 600;
  color: white;
`;

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  position: absolute;
  font-size: 24px;
  text-shadow: 2px 2px 10px #000000;
  font-weight: 900;
  color: white;
  margin: 20px;
`;

export default App;
