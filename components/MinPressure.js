import React from 'react';

import { ExtraInfoMinMax } from './styled/ExtraInfoMinMax';

export const MinPressure = ({solData}) => {
  /*Preventing errors with undefined when the app loads for the first time*/
  if (!solData.PRE) {
    return <ExtraInfoMinMax>coming soon 📡</ExtraInfoMinMax>
  }
  else if (!solData.PRE.mn) {
    return <ExtraInfoMinMax>coming soon 📡</ExtraInfoMinMax>
  }
  return <ExtraInfoMinMax> min {(solData.PRE.mn).toFixed(1)} pa</ExtraInfoMinMax>
};
