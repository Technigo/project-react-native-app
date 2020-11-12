import React from 'react';

import { ExtraInfoMinMax } from './styled/ExtraInfoMinMax'

export const MinWindSpeed = ({solData}) => {
  if (!solData.HWS) {
    return <ExtraInfoMinMax>incoming... 📡</ExtraInfoMinMax>
  }
  else if (!solData.HWS.mn) {
    return <ExtraInfoMinMax>incoming... 📡</ExtraInfoMinMax>
  }
  return <ExtraInfoMinMax>min {(solData.HWS.mn).toFixed(1)} m/s</ExtraInfoMinMax>
}