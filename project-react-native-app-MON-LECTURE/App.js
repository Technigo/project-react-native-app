import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Button, TouchableOpacity, Text } from 'react-native';
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TopContainer = styled.View`
  flex: 1;
  width: 100%;
  background-color: #222222;
  justify-content: center;
  align-items: center;
`;

const TopHeader = styled.Text`
  font-size: 48px;
  color: #efefef;
`;

const BottomContainer = styled.View`
  flex: 3;
  width: 100%;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
`;

const BottomText = styled.Text`
  font-size: 32px;
  color: #1f1f1f;
`;

const TouchBox = styled.TouchableWithoutFeedback`
  width: 100%;
  height: 300px;
`;

const App = () => {
  fetch(URL)
    .then((response) => {
      if (!response.ok) {
        // Something is wrong
        throw `Got some error: ${response.status}`;
      }
      return response.json();
    })
    .then((json) => {
      // Do something cool with the data
    })
    .catch((error) => {
      console.log(error);
    });

  const [count, setCount] = useState(0);
  const onIncrement = () => {
    setCount(count + 1);
    console.log('Incremented!');
  };

  return (
    <Container>
      <TopContainer>
        <TopHeader>Counter</TopHeader>
      </TopContainer>
      <BottomContainer>
        <TouchableOpacity onPress={onIncrement}>
          <Text>Add +1</Text>
        </TouchableOpacity>
        <BottomText>Total: {count}</BottomText>
      </BottomContainer>
    </Container>
  );
};

export default App;
