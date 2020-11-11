import React from 'react';

import { ExtraInfoMinMax } from './styled/ExtraInfoMinMax'

export const MaxPressure = ({solData}) => {
  if (!solData.PRE) {
    return <ExtraInfoMinMax>data coming soon</ExtraInfoMinMax>
  }
  else if (!solData.PRE.mx) {
    return <ExtraInfoMinMax>data coming soon</ExtraInfoMinMax>
  }
  return <ExtraInfoMinMax>{solData.PRE.mx}</ExtraInfoMinMax>
}