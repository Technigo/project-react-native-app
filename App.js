import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { OracleMessage } from './Components/OracleMessage';
import { ShakeEventFunction } from './Components/ShakeEventFunction';
import { StartScreen } from './Components/StartScreen';
import { AboutApp } from './Components/AboutApp';

const App = () => {
  //state that stores the state of the initial screen
  const [initialScreen, setInitialScreen] = useState(true) 
  const Tab = createBottomTabNavigator();

  //if the phone shakes then the initial screen will be set to "false"
  const shake = () => {
    setInitialScreen(false);
  };

  useEffect(() => {
    ShakeEventFunction.addListener(() => {
      shake();
    })
    return () => {
      ShakeEventFunction.removeListener();
    }
  }, []);

  // if the state initial screen is true then it will mount the component, since I'm using the react navigation I only need to use it inside "component" on this
  // navigation tab, so no need to mount the component itself. Otherwise it will be mounted twice!
  return (
    <>
      {initialScreen ? (
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Magic Oracle 🔮" component={StartScreen} />
            <Tab.Screen name="About Magic Oracle 🔮" component={AboutApp} />
          </Tab.Navigator>
        </NavigationContainer>
      ) : (
        <OracleMessage onRestartOracle={() => setInitialScreen(true)} /> // if the initial screen state is false then the message will be displayed, as well as, a restart button
      )}
    </>
  );
};

export default App
