import React, { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

// import CARD_API from './reusable/urls';

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`;

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
  },
});

const CardThumb = (props) => {
  return (
    <>
      <Title>{props.name}</Title>
      <Image style={styles.image} source={{ uri: props.image }} />
    </>
  );
};

const App = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://api.magicthegathering.io/v1/cards')
      .then((res) => res.json())
      .then((json) => setCards(json.cards));
  }, []);

  return (
    <Container>
      {cards.map((card) => (
        <CardThumb key={card.id} name={card.name} image={card.imageUrl} />
      ))}
    </Container>
  );
};

export default App;
