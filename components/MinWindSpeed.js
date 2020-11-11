import React from 'react';

import { ExtraInfoMinMax } from './styled/ExtraInfoMinMax'

export const MinWindSpeed = ({solData}) => {
  if (!solData.HWS) {
    return <ExtraInfoMinMax>data coming soon</ExtraInfoMinMax>
  }
  else if (!solData.HWS.mn) {
    return <ExtraInfoMinMax>data coming soon</ExtraInfoMinMax>
  }
  return <ExtraInfoMinMax>{solData.HWS.mn}</ExtraInfoMinMax>
}