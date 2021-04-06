import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.homescreen} >
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={()=> navigation.navigate("Details")} />
    </View>
  )
}

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.detailsscreen} >
      <Text>Details Screen</Text> {/* Det går att läga till en onPress={() => navigation.navigate("Home")} här så att när man trycker på texten navigeras det */}
      <Button title="Go to Details again" onPress={()=> navigation.push("Details")} />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} /> {/*PopToTop betyder att vi går tillbaka till första dvs default sidan */}
    </View>
  )
}

const Stack = createStackNavigator();

const Entrance = () => {
    return (
        <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default Entrance


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