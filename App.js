import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TopScreen from './pages/TopRatedPage'
import PopularScreen from './pages/PopularPage'
import UpcomingScreen from './pages/UpcomingPage'

import DetailsPage from './pages/DetailsPage'

 
const fet = [9999, 1000] // Du kan göra en liknande där du passar id på filmen
const dinc = "testar namn"





const HomeScreen = ({navigation}) => {
  const [select, setSelect] = useState("feto")
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
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
    </View>
  )
}


const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="TopRated" component={TopScreen} />
      <Stack.Screen name="Popular Movies" component={PopularScreen} />
      <Stack.Screen name="Upcoming" component={UpcomingScreen} />


      <Stack.Screen name="Details" component={DetailsPage} />





    </Stack.Navigator>
  </NavigationContainer>
);



   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  homescreen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },

  detailsscreen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

