import React from 'react';
import { View } from 'react-native';
import { StartPage } from './StartPage';
import { ButtonApi } from './ButtonApi';

export const ShowStartOrUser = () => {
  return <View>{user ? <StartPage /> : <ButtonApi />}</View>;
};
