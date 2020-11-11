import React from 'react';
import { Text } from 'react-native';

import { ExtraInfoAvarage } from './styled/ExtraInfoAvarage'

export const AvarageWindSpeed = ({solData}) => {
  if (!solData.HWS) {
    return <ExtraInfoAvarage>data coming soon</ExtraInfoAvarage>
  }
  else if (!solData.HWS.av) {
    return <ExtraInfoAvarage>data coming soon</ExtraInfoAvarage>
  }
  return <ExtraInfoAvarage>{solData.HWS.av}</ExtraInfoAvarage>
}