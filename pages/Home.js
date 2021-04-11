/*Outer dependencies*/
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

/*Inner dependencies*/
import { CardThumb } from '../components/CardThumb';
import { FlatList } from 'react-native';

/*Styled components*/
const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`;

export const Home = ({ navigation }) => {
  const [cards, setCards] = useState([]);

  /* renderItem is used in FlatList to iterate over the array cards, and only present one */
  const renderItem = ({ item }) => (
    /*CardThumb is the component which will mount each card in the Home screen*/
    <CardThumb key={item.id} card={item} navigation={navigation} />
  );

  /*fetch to retrieve the array of cards in the API*/
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
