import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Summary } from "./Components/Summary"
import { Question3 } from "./Components/Question3"
import { Question2 } from "./Components/Question2"
import { Question1 } from "./Components/Question1"
import { HomeScreen } from './Components/HomeScreen';

const Stack = createStackNavigator();

const App = () => {

  const [correctAnswer, setCorrectAnswer] = useState(0);
  
    return (
    <NavigationContainer>
  
      <Stack.Navigator>

        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {props => <HomeScreen {...props} />}
        </Stack.Screen>

        <Stack.Screen name="Question 1" options={{ headerShown: false }}>
            {props => <Question1 {...props} setCorrectAnswer={setCorrectAnswer} correctAnswer={correctAnswer}/>}
        </Stack.Screen>

        <Stack.Screen name="Question 2" options={{ headerShown: false }}>
          {props => <Question2 {...props} setCorrectAnswer={setCorrectAnswer} correctAnswer={correctAnswer}/>}
        </Stack.Screen>

        <Stack.Screen name="Question 3" options={{ headerShown: false }} >
          {props => <Question3 {...props} setCorrectAnswer={setCorrectAnswer} correctAnswer={correctAnswer}/>}
        </Stack.Screen>

        <Stack.Screen name="Summary" options={{ headerShown: false }} >
          {props => <Summary {...props} setCorrectAnswer={setCorrectAnswer} correctAnswer={correctAnswer}/>}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
 
  )
}


export default App
