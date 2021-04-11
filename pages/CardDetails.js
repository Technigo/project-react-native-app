/*Outer Dependencies*/
import React from 'react';
import styled from 'styled-components/native';

const DetailsContainer = styled.View`
  background: green;
`;

const DetailsHeader = styled.Text`
  color: red;
`;

const DetailsImage = styled.Image`
  width: 100px;
  height: 100px;
`;

const DetailsText = styled.Text`
  color: yellow;
`;

export const CardDetails = ({ route }) => {
  /*The object passed into CardDetails via onPressCardButton was route (not sure why) so I created the const card to minimize my paths*/
  const card = route.params.card;

  return (
    <DetailsContainer>
      <DetailsHeader>{card.name}</DetailsHeader>
      <DetailsImage source={{ uri: card.imageUrl }} />
      <DetailsText>{card.text}</DetailsText>
    </DetailsContainer>
  );
};
