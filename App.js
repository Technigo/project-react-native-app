import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './components/DrawerNavigator';

import { loader } from './reducers/loader';
import { meal } from './reducers/meal';

import Loader from './components/Loader';

const reducer = combineReducers({
  meal: meal.reducer,
  loader: loader.reducer,
});

const store = configureStore({
  reducer,
});

const App = () => {
  return (
    <Provider store={store}>
      <Loader />
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
