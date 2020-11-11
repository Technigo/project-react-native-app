import React from 'react';

import { ExtraInfoMinMax } from './styled/ExtraInfoMinMax'

export const MaxWindSpeed = ({solData}) => {
  if (!solData.HWS) {
    return <ExtraInfoMinMax>data coming soon</ExtraInfoMinMax>
  }
  else if (!solData.HWS.mx) {
    return <ExtraInfoMinMax>data coming soon</ExtraInfoMinMax>
  }
  return <ExtraInfoMinMax>{solData.HWS.mx}</ExtraInfoMinMax>
}