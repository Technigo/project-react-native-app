import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Feed } from './screens/Feed';
import { ChuckNorris } from './screens/ChuckNorris';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { KanyeWest } from './screens/KanyeWest'
import { RandomAdvice } from './screens/RandomAdvice'
import styled from 'styled-components/native';
import { View } from 'react-native';



const Drawer = createDrawerNavigator();

const MainNavigationContainer = styled(NavigationContainer)`
  background-color: #f5d584;
`

const App = () => {
  return (
    <MainNavigationContainer>
        <Drawer.Navigator style={{backGroundColor:f5d584}}>
          <Drawer.Screen name="HOME" component={Feed} />
          <Drawer.Screen name="CHUCK NORRIS" component={ChuckNorris} />
          <Drawer.Screen name="KANYE WEST" component={KanyeWest} />
          <Drawer.Screen name="GUESS WHAT" component={RandomAdvice} />
        </Drawer.Navigator>
    </MainNavigationContainer>
  );
};

export default App;
