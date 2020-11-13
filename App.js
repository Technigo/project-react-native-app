import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';

import Header from './components/Header';
import RandomImage from './components/RandomImage';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: papayawhip;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`

const StyledButton = styled.TouchableOpacity`
  padding: 10px;
  min-width: 100px;
  border-radius: 5px;
  background-color: brown;
  `

const ButtonText = styled.Text`
    color: papayawhip;
    font-size: 24px;
    text-align: center;
`;

const App = () => {
  const [image, setImage] = useState();

  useEffect(() => {
    fetch('https://randomfox.ca/floof/')
      .then(res => res.json())
      .then(json => setImage(json.image))
      .catch(err => console.error(err));
  }, []);

  const generateNewImage = () => {
    fetch('https://randomfox.ca/floof/')
      .then(res => res.json())
      .then(json => setImage(json.image))
      .catch(err => console.error(err));
  }

  return (
    <Container>
      <Header />
      <RandomImage image={image} />
      <StyledButton
        onPress={generateNewImage}
      >
        <ButtonText>Shuffle</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default App
