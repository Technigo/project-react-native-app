import React from 'react';

import { ExtraInfoAvarage } from './styled/ExtraInfoAvarage';

export const AvarageWindSpeed = ({solData}) => {
  // Preventing errors with undefined when the app loads for the first time
  if (!solData.HWS) {
    return <ExtraInfoAvarage>data coming soon 🚀</ExtraInfoAvarage>
  }
  else if (!solData.HWS.av) {
    return <ExtraInfoAvarage>data coming soon 🚀</ExtraInfoAvarage>
  }
  return <ExtraInfoAvarage>{(solData.HWS.av).toFixed(1)} m/s</ExtraInfoAvarage>
};
