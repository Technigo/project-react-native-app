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

const Body = styled.SafeAreaView`
  flex: 1;
  margin-top: 0;
`

//Home stack with fition and nonfiction books.
const HomeStack = createStackNavigator()
export const HomeStackScreen = () => {
 return (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Fiction and Nonfiction" component={HomeScreen} />
    <HomeStack.Screen name="Details" component={Details} />
  </HomeStack.Navigator>
  )
}

export const HomeScreen = ({ navigation }) => {
    return (
      <Container>
        <BookList category={'hardcover-fiction'} navigation={navigation}/>
        <BookList category={'trade-fiction-paperback'} navigation={navigation} />
        <BookList category={'paperback-nonfiction'} navigation={navigation} />
        <BookList category={'hardcover-nonfiction'} navigation={navigation} />
      </Container>
    )
  }