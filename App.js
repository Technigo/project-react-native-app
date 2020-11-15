import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import {  ScrollView, View, Text, SafeAreaView, StatusBar, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BookList from './BookList.js';
import Details from './Details.js';
import Book from './Book.js';

const Container = styled.ScrollView`
  flex: 1;
  
  background-color: #fff;
`

const Body = styled.SafeAreaView`
  flex: 1;
  margin-top: 0;
`



function DetailsScreen() {
  
  return (
    <Details />
  );
}


const HomeStack = createStackNavigator();
function HomeStackScreen() {
 return (
   <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} />             
    <HomeStack.Screen name="Details" component={Details} />
    <HomeStack.Screen name="Book" component={Book} />         
   </HomeStack.Navigator>
  );
}


const SettingsStack = createStackNavigator();
function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={Details} />
    </SettingsStack.Navigator>
  );
}





function HomeScreen({ navigation }) {
  return (
    <Container>
      <BookList category={'hardcover-fiction'} navigation={navigation}/>
      <BookList category={'paperback-nonfiction'} navigation={navigation} />
      <BookList category={'young-adult-hardcover'} navigation={navigation} />
      <BookList category={'trade-fiction-paperback'} navigation={navigation} />
    </Container>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Settings" component={SettingsStackScreen} />
    </Tab.Navigator>
  );
}


const App = () => {


  return (
  <Body>
    {/* <Container>
      <BookList category={'hardcover-fiction'} />
      <BookList category={'paperback-nonfiction'} />
      <BookList category={'young-adult-hardcover'} />
      <BookList category={'trade-fiction-paperback'} />
    </Container> */}


    {/* <StatusBar
      barStyle="dark-content"
    /> */}
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  </Body>
   
    
  )
}


export default App
