import React from 'react';

import { ExtraInfoMinMax } from './styled/ExtraInfoMinMax'

export const MinPressure = ({solData}) => {
  if (!solData.PRE) {
    return <ExtraInfoMinMax>data coming soon</ExtraInfoMinMax>
  }
  else if (!solData.PRE.mn) {
    return <ExtraInfoMinMax>data coming soon</ExtraInfoMinMax>
  }
  return <ExtraInfoMinMax>{solData.PRE.mn}</ExtraInfoMinMax>
}