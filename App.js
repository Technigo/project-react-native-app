import 'react-native-gesture-handler';
import React  from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { QuoteList } from './components/QuoteList';
import { QuoteDetail } from './components/QuoteDetail';

const  Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>      
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Positive quotes'
          component={QuoteList}
          options={{headerShown:false}}
        />
        <Stack.Screen
          name='Detail'
          component={QuoteDetail}
          options={{headerShown:false}}          
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App
