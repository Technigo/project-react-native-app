import React from 'react';

import { ExtraInfoAvarage } from './styled/ExtraInfoAvarage'

export const AvaragePressure = ({solData}) => {
  if (!solData.PRE) {
    return <ExtraInfoAvarage>data coming soon</ExtraInfoAvarage>
  }
  else if (!solData.PRE.av) {
    return <ExtraInfoAvarage>data coming soon</ExtraInfoAvarage>
  }
  return <ExtraInfoAvarage>{solData.PRE.av}</ExtraInfoAvarage>
}