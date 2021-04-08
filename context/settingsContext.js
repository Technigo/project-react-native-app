import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export const settings = {
  themeColors: [
    {
      ...DefaultTheme.colors,
      warning: '#f1f',
      disabled: '#000',
      primary: '#3498db',
      secondary: '#d1c40f',
      accent: '#f1c40f',
    },
    {
      ...DefaultTheme.colors,
      warning: '#f1f',
      disabled: '#000',
      primary: '#98dbdb',
      secondary: '#c40f',
      accent: '#f4f',
    },
  ],
  user: {
    name: 'Bella',
    likes: []
  },
  session: {
    route: 'Home'
  }
};

export const SettingsContext = React.createContext(settings);
