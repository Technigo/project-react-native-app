import React from 'react';

import { ExtraInfoMinMax } from './styled/ExtraInfoMinMax'

export const MinPressure = ({solData}) => {
  if (!solData.PRE) {
    return <ExtraInfoMinMax>incoming...</ExtraInfoMinMax>
  }
  else if (!solData.PRE.mn) {
    return <ExtraInfoMinMax>incoming...</ExtraInfoMinMax>
  }
  return <ExtraInfoMinMax> min {(solData.PRE.mn).toFixed(1)} pa</ExtraInfoMinMax>
}