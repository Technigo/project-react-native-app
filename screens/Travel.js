import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

// This is the main container for this screen
const TravelContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TravelWrapper = styled.View`

`

const SectionTitle = styled.View`

`

const ListOfPlaces = styled.Text`

` 

export const Travel = () => {
  return (
    <TravelContainer>
      <TravelWrapper>
        <SectionTitle>Travel</SectionTitle>
        <ListOfPlaces>
         {/*  This is where my books will go */}
        </ListOfPlaces>
      </TravelWrapper>
    </TravelContainer>
  );
};
