import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Nasa } from './components/Nasa'
import styled from 'styled-components/native'
import { Tap } from './components/Tap'
import { Detail } from './components/Detail'
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';

const Stack = createStackNavigator()

const App = () => {

  return (

    <NavigationContainer>
     <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
       <Text style={styles.text}>New picture from NASA everyday!</Text>
        
        <Stack.Navigator>
         <Stack.Screen name='Detail' component={Detail} />
         <Stack.Screen name='Nasa' component={Nasa} />
        </Stack.Navigator>
       <Tap></Tap>
      </ScrollView>
    </SafeAreaView>
    </NavigationContainer>

  )
}

export default App

const Container = styled.View`
flex:1;
background-color: #ffe8ea;
justify-content: center;
align-items: center;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  scrollView: {
    marginHorizontal: 10,
  },
  text: {
    fontSize: 42,
  },
});
