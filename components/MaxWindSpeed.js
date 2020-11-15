import React from 'react';

import { ExtraInfoMinMax } from './styled/ExtraInfoMinMax';

export const MaxWindSpeed = ({solData}) => {
  // Preventing errors with undefined when the app loads for the first time
  if (!solData.HWS) {
    return <ExtraInfoMinMax>coming soon ✉</ExtraInfoMinMax>
  }
  else if (!solData.HWS.mx) {
    return <ExtraInfoMinMax>coming soon ✉</ExtraInfoMinMax>
  }
  return <ExtraInfoMinMax>max {(solData.HWS.mx).toFixed(1)} m/s</ExtraInfoMinMax>
};
