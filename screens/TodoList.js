import React from 'react'
import { View, Text, Button } from 'react-native'
import styled from 'styled-components/native'

// This is the main container for this screen
const ListContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const TodoList = ({ navigation }) => {

  return (
    <ListContainer>
      <Text>Here's a list of your Todo's!</Text>
      <Text>Tried to pass data between screens but didn't get it to work😢</Text>
      <Button 
        title="Go back"
        onPress={() => navigation.navigate('Home')} 
      />
    </ListContainer>
  )
}
