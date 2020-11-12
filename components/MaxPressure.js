import React from 'react';

import { ExtraInfoMinMax } from './styled/ExtraInfoMinMax'

export const MaxPressure = ({solData}) => {
  if (!solData.PRE) {
    return <ExtraInfoMinMax>incoming...</ExtraInfoMinMax>
  }
  else if (!solData.PRE.mx) {
    return <ExtraInfoMinMax>incoming...</ExtraInfoMinMax>
  }
  return <ExtraInfoMinMax> max {(solData.PRE.mx).toFixed(1)} pa</ExtraInfoMinMax>
}