import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { CardThumb } from './CardThumb';
import { FlatList } from 'react-native';

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

export const Home = ({ navigation }) => {
  const [cards, setCards] = useState([]);
  const renderItem = ({ item }) => (
    <CardThumb key={item.id} card={item} navigation={navigation} />
  );

  useEffect(() => {
    fetch('https://api.magicthegathering.io/v1/cards')
      .then((res) => res.json())
      .then((json) => setCards(json.cards));
  }, []);

  return (
    <Container>
      <FlatList
        data={cards}
        renderItem={renderItem}
        keyExtractor={(card) => card.Id}
      />
    </Container>
  );
};

{
  /* {cards.map((card, index) => (
        <CardThumb key={index} card={card} />
      ))} */
}
