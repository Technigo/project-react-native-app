import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';

import fox from '../assets/fox.png';

const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;

const Title = styled.Text`
  font-size: 24px;
  color: brown;
  padding: 0 5px;
`

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: wheat;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`

const LoadingContainer = styled.View`
  width: 250px;
  height: 250px;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.Text`
  font-size: 24px;
  color: brown;
  padding: 0 5px;
`

const ImageFrame = styled.View`
  width: 250px;
  height: 250px;
  border: 5px solid brown;
  border-radius: 30px;
  box-shadow: 5px 5px 2px grey;
`

const FoxImage = styled.Image`
  width: 240px;
  height: 240px;
  border-radius: 25px;
`

const StyledButton = styled.TouchableOpacity`
  padding: 10px;
  min-width: 100px;
  border-radius: 5px;
  background-color: brown;
  box-shadow: 5px 5px 2px grey;
  `

const ButtonText = styled.Text`
  color: wheat;
  font-size: 24px;
  text-align: center;
`;

const GeneratorPageV1 = () => {
  const [image, setImage] = useState();
  const [loading, setLoading] = useState();

  const generateNewImage = () => {
    setLoading(true);
    fetch('https://randomfox.ca/floof/')
      .then(res => res.json())
      .then(json => setImage(json.image))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    generateNewImage();
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <Icon source={fox} />
        <Title>Fox generator</Title>
        <Icon source={fox} />
      </HeaderContainer>
      {loading && (
        <LoadingContainer>
          <LoadingText>Loading...</LoadingText>
        </LoadingContainer>
      )}
      {!loading && (
        <ImageFrame>
          <FoxImage resizeMode='cover' source={{ uri: image }}></FoxImage>
        </ImageFrame>
      )}
      <StyledButton onPress={generateNewImage} >
        <ButtonText>Show me a Fox!</ButtonText>
      </StyledButton>
    </Container>
  );
};

export default GeneratorPageV1;
