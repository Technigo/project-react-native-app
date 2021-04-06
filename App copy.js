import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
const fet = [9999, 1000] // Du kan göra en liknande där du passar id på filmen
const dinc = "testar namn"





const HomeScreen = ({navigation}) => {
  const [select, setSelect] = useState("feto")
  return (
    <View style={styles.homescreen} >
      <Text>Home Screen</Text>
      <Button 
        title="Go to Details" 
        onPress={()=> {
          navigation.navigate("Details", {
            itemID:fet[0],
            otherParam: `${select}`, // otherParam: "anything you want here",
            minParam: `${dinc}`,
            name: "custom profile header" /*HUR MAN PASSAR PROPS SOM HUVUDRUBRIK I DETAILS SIDAN*/
          })
          }
        } 
      />
    </View>
  )
}

const DetailsScreen = ({ route, navigation }) => {
  const {itemID, otherParam, minParam} = route.params;

  return (
    <View style={styles.detailsscreen} >
      <Text >Details Screen</Text> {/* Det går att läga till en onPress={() => navigation.navigate("Home")} här dvs inne i <Text onPress.. > så att när man trycker på texten navigeras det */}
      <Text> itemID: {JSON.stringify(itemID)} </Text>
      <Text> otherParam: {JSON.stringify(otherParam)}</Text>
      <Text> minParam: {JSON.stringify(minParam)}</Text>
      {/*<Button title="Go to Details again" onPress={()=> navigation.push("Details")} />*/}
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go back to first screen in stack" onPress={() => navigation.popToTop()} /> {/*PopToTop betyder att vi går tillbaka till första dvs default sidan */}
    </View>
  )
}

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My home' }} />
        <Stack.Screen 
          name="Details" 
          component={DetailsScreen} 
          options={({ route }) => ({ title: route.params.name })} /*HUR MAN PASSAR NAMN TILL HUVUDRUBRIK*/
        />
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

