import React from 'react';

import { ExtraInfoAvarage } from './styled/ExtraInfoAvarage';

export const AvaragePressure = ({solData}) => {
  /*Preventing errors with undefined when the app loads for the first time*/
  if (!solData.PRE) {
    return <ExtraInfoAvarage>data coming soon 🚀</ExtraInfoAvarage>
  }
  else if (!solData.PRE.av) {
    return <ExtraInfoAvarage>data coming soon 🚀</ExtraInfoAvarage>
  }
  return <ExtraInfoAvarage>{(solData.PRE.av).toFixed(1)} pa</ExtraInfoAvarage>
};
