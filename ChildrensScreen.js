import React from 'react'
import styled from 'styled-components/native'
import { createStackNavigator } from '@react-navigation/stack'

import Details from './Details.js'
import BookList from './BookList.js'

//Style
const Container = styled.ScrollView`
  flex: 1;
  background-color: #fff;
`

//Children's books stack.
const ChildrensStack = createStackNavigator();
export const ChildrensStackScreen = () => {
  return (
    <ChildrensStack.Navigator>
      <ChildrensStack.Screen name="Children's books" component={ChildrensScreen} />
      <ChildrensStack.Screen name="Details" component={Details} />
    </ChildrensStack.Navigator>
  );
}

export const ChildrensScreen = ({ navigation }) => {
    return (
      <Container>
        <BookList category={'young-adult-hardcover'} navigation={navigation} />
        <BookList category={'childrens-middle-grade-hardcover'} navigation={navigation}/>
        <BookList category={'picture-books'} navigation={navigation} />
        <BookList category={'series-books'} navigation={navigation} />
      </Container>
    )
  }