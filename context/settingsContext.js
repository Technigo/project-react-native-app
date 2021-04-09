import React from 'react';
import { DefaultTheme, DarkTheme,  Provider as PaperProvider } from 'react-native-paper';

export const settings = {
  themeColors: [    
    {
      ...DefaultTheme.colors,
      disabled: 'grey',
      primary: '#194350',
      secondary: '#ff8882',
      accent: '#9dbeb9',
      heart: '#ce1212'
    },
    {
      ...DarkTheme.colors,
      disabled: 'grey',
      background: '#191a20',
      surface: '#212125',
      text: '#fff',
      primary: '#3d50fa',
      secondary: '#194350',
      accent: '#3442b4',
      heart: '#ce1212'
    },
  ],
  user: {
    name: '',
    likes: []
  },
  session: {
    route: 'Home'
  }
};

export const SettingsContext = React.createContext(settings);
