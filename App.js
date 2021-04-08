import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native'

import TopScreen from './pages/TopRatedPage'
import PopularScreen from './pages/PopularPage'
import UpcomingScreen from './pages/UpcomingPage'

import DetailsPage from './pages/DetailsPage'

import Gallery from './pages/ImageGallery'




const Container = styled.View`
flex:1;
align-items: center;
justify-content: center
`

const Question = styled.Text`
font-size: 16px`


const HomeScreen = ({navigation}) => {
  return (
    <Container >
      <Question>Home Screen</Question>
      <Button
        title="Go to Top Rated Movies"
        onPress={() => navigation.navigate('TopRated')}
      />
      <Button
        title="Go to Most Popular Movies"
        onPress={() => navigation.navigate('Popular Movies')}
      />
      <Button
        title="Go to Most Upcoming Movies"
        onPress={() => navigation.navigate('Upcoming')}
      />

     
    </Container>
  )
}


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home"
    options={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
    }}
    >
      <Stack.Screen name="Home" component={HomeScreen} 
      options={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
      }}/>
      <Stack.Screen name="TopRated" component={TopScreen} 
       options={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
      }}/>
      <Stack.Screen name="Popular Movies" component={PopularScreen} 
       options={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
      }}/>
      <Stack.Screen name="Upcoming" component={UpcomingScreen} 
       options={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
      }}/>


      <Stack.Screen name="Details" component={DetailsPage} 
       options={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
      }}/>

    </Stack.Navigator>
  </NavigationContainer>
);



   
}



