import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export const settings = {
  theme: {
    ...DefaultTheme,
    roundness: 5,
    colors: {
      ...DefaultTheme.colors,
      primary: '#3498db',
      secondary: '#d1c40f',
      accent: '#f1c40f',
      warning: '#f1f',
    },
  },
  user: {
    name: '',
  },
};

export const SettingsContext = React.createContext(settings);
