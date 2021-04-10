import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from './components/Home';
import { CardDetails } from './components/CardDetails';

// const Title = styled.Text`
//   font-size: 24px;
//   color: palevioletred;
// `;

// const ThumbImage = styled.Image`
//   width: 50;
//   height: 50;
// `;

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator name='Home'>
        <Stack.Screen component={Home} name='Magic' />
        <Stack.Screen component={CardDetails} name='CardDetails' />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
