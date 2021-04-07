import React, { useContext, useState, useMemo, useCallback } from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { RootNavigator } from './navigation/Root';
import { SettingsContext } from './context/settingsContext';

const App = () => {
  const settings = useContext(SettingsContext);
  const [theme, setTheme] = useState('light');

  const themebase = {
    ...DefaultTheme,
    roundness: 5
  };
  const toggleTheme = useCallback(() => {
    return setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }, [theme]);

  const preferences = useMemo(
    () => ({
      toggleTheme,
      theme,
      ...settings
    }),
    [toggleTheme, theme, settings]
  );

  return (
    <SettingsContext.Provider value={preferences}>
      <PaperProvider
        theme={
          theme === 'light'
            ? {
                ...themebase,
                colors: settings.themeColors[0],
              }
            : {
              ...themebase,
              colors: settings.themeColors[1]
            }
        }>
        <RootNavigator />
      </PaperProvider>
    </SettingsContext.Provider>
  );
};

export default App;
