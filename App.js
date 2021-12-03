import React from 'react';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { trails } from './Components/reducers/trails';
import { Main } from './Components/Main';
import { PackList } from './Components/PackList';
import { Allemansrätt } from './Components/Allemansrätt';

const reducer = combineReducers({
  trails: trails.reducer,
});

const store = configureStore({ reducer });

const App = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home'>
          <Drawer.Screen name='Home' component={Main} />
          <Drawer.Screen name='Packlist' component={PackList} />
          <Drawer.Screen name='Allemansrätten' component={Allemansrätt} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
