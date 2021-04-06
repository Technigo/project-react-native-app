import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import {RootNavigator} from './navigation/Root'


const App = () => {
  return (
    <PaperProvider>
      <RootNavigator />
    </PaperProvider>
  );
};

export default App;
