import React from 'react';

import { ExtraInfoMinMax } from './styled/ExtraInfoMinMax'

export const MaxWindSpeed = ({solData}) => {
  if (!solData.HWS) {
    return <ExtraInfoMinMax>incoming... ✉</ExtraInfoMinMax>
  }
  else if (!solData.HWS.mx) {
    return <ExtraInfoMinMax>incoming... ✉</ExtraInfoMinMax>
  }
  return <ExtraInfoMinMax>max {(solData.HWS.mx).toFixed(1)} m/s</ExtraInfoMinMax>
}