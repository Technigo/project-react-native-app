import React from 'react';

import { ExtraInfoMinMax } from './styled/ExtraInfoMinMax';

export const MinWindSpeed = ({solData}) => {
  // Preventing errors with undefined when the app loads for the first time
  if (!solData.HWS) {
    return <ExtraInfoMinMax>coming soon 📡</ExtraInfoMinMax>
  }
  else if (!solData.HWS.mn) {
    return <ExtraInfoMinMax>coming soon 📡</ExtraInfoMinMax>
  }
  return <ExtraInfoMinMax>min {(solData.HWS.mn).toFixed(1)} m/s</ExtraInfoMinMax>
};
