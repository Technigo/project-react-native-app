import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import {RootNavigator} from './navigation/Root'

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    secondary: '#d1c40f',
    accent: '#f1c40f',
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <RootNavigator />
    </PaperProvider>
  );
};

export default App;
