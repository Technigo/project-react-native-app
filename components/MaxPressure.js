import React from 'react';

import { ExtraInfoMinMax } from './styled/ExtraInfoMinMax';

export const MaxPressure = ({solData}) => {
  /*Preventing errors with undefined when the app loads for the first time*/
  if (!solData.PRE) {
    return <ExtraInfoMinMax>coming soon ✉</ExtraInfoMinMax>
  }
  else if (!solData.PRE.mx) {
    return <ExtraInfoMinMax>coming soon ✉</ExtraInfoMinMax>
  }
  return <ExtraInfoMinMax> max {(solData.PRE.mx).toFixed(1)} pa</ExtraInfoMinMax>
};
