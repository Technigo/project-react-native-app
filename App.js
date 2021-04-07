import React, {useContext} from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { RootNavigator } from './navigation/Root';
import { SettingsContext } from './context/settingsContext';



const App = () => {
  const settings = useContext(SettingsContext)
  return (
    <SettingsContext.Provider value={settings}>
      <PaperProvider theme={settings.theme}>
        <RootNavigator />
      </PaperProvider>
    </SettingsContext.Provider>
  );
};

export default App;
