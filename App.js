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
background: #000
`

const MyButton = styled.Button`
color: red`



const Question = styled.Text`
font-size: 20px
color: red;
font-weight: bold;
padding: 0px 20px 20px 20px`


const HomeScreen = ({navigation}) => {
  return (
    <Container >
      <Question>Welcome to Movie App, please select a category: </Question>
      <MyButton
        title="Go to Top Rated Movies"
        color="red"
        onPress={() => navigation.navigate('Top Rated Movies')}
      />
      <MyButton
        title="Go to Most Popular Movies"
        color="red"
        onPress={() => navigation.navigate('Popular Movies')}
      />
      <MyButton
        title="Go to Most Upcoming Movies"
        color="red"
        onPress={() => navigation.navigate('Upcoming Movies')}
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
      <Stack.Screen name="Top Rated Movies" component={TopScreen} 
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
      <Stack.Screen name="Upcoming Movies" component={UpcomingScreen} 
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



