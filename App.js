import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quotes } from './reducers/quotes';
import styled from 'styled-components/native';
import ButtonApi from './components/ButtonApi';
import { YourQuotes } from './components/YourQuotes';
// import ShakeApi from	'./components/ShakeApi';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';


const Container = styled.View`
	flex: 1;
	background-color: papayawhip;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: 24px;
	color: palevioletred;
`;

const reducer = combineReducers({
  quotes: quotes.reducer
})

const store = configureStore({reducer})

  
const Drawer = createDrawerNavigator();
  

const App = () => {

	return (
    <Provider store={store}>
      <NavigationContainer>
      <Drawer.Navigator initialRouteName="Button">
        <Drawer.Screen name="Quote Generator" component={ButtonApi} />
        <Drawer.Screen name="Your Quotes" component={YourQuotes} /> 
      </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
	);
};

export default App;
