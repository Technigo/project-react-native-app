import React from 'react'
import styled from 'styled-components/native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BookList from './BookList.js';
import Details from './Details.js';

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
const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
 return (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Fiction and Nonfiction" component={HomeScreen} />             
    <HomeStack.Screen name="Details" component={Details} />      
  </HomeStack.Navigator>
  );
}

//Children's books stack.
const ChildrensStack = createStackNavigator();
const ChildrensStackScreen = () => {
  return (
    <ChildrensStack.Navigator>
      <ChildrensStack.Screen name="Children's books" component={ChildrensScreen} />
      <ChildrensStack.Screen name="Details" component={Details} />
    </ChildrensStack.Navigator>
  );
}

//Show Fiction and nonfiction best seller books, start page.
const HomeScreen = ({ navigation }) => {
  return (
    <Container>
      <BookList category={'hardcover-fiction'} navigation={navigation}/>
      <BookList category={'trade-fiction-paperback'} navigation={navigation} />
      <BookList category={'paperback-nonfiction'} navigation={navigation} />
      <BookList category={'hardcover-nonfiction'} navigation={navigation} />
    </Container>
  );
}

//Show Children's best seller books.
const ChildrensScreen = ({ navigation }) => {
  return (
    <Container>
      <BookList category={'young-adult-hardcover'} navigation={navigation} />
      <BookList category={'childrens-middle-grade-hardcover'} navigation={navigation}/>
      <BookList category={'picture-books'} navigation={navigation} />
      <BookList category={'series-books'} navigation={navigation} />
    </Container>
  );
}

//Bottom tabs
const Tab = createBottomTabNavigator();
const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Fiction and Nonfiction" component={HomeStackScreen} />
      <Tab.Screen name="Children's books" component={ChildrensStackScreen} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
  <Body>
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  </Body>  
  );
}

export default App
