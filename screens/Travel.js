import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components/native';

import Item from '../components/Item'

// This is the main container for this screen
const Container = styled.View`
  flex:1;
  background-color: papayawhip;
`;

const Wrapper = styled.View`
  paddingTop:80px;
  paddingHorizontal:20px;
`;

const SectionTitle = styled.Text`
fontSize:24;
`;

const ListOfItems = styled.Text`
  margin-top:30px;
`; 

export const Travel = () => {
  return (
    <Container>
      <Wrapper>
        <SectionTitle>Travel</SectionTitle>
        <ListOfItems>
         <Item itemName={'Task 1'}/>
         <Item itemName={'Task 2'}/>
         <Item itemName={'Task 3'}/>
         <Item itemName={'Task 4'}/>
         <Item itemName={'Task 5'}/>
        </ListOfItems>
      </Wrapper>
    </Container>
  );
};
