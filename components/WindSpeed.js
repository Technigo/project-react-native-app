import React from 'react';
import { Text } from 'react-native';

import { ExtraInfoContainer } from './styled/ExtraInfoContainer';
import { AvarageWindSpeed } from './AvarageWindSpeed';
import { ExtraInfoMinMaxContainer } from './styled/ExtraInfoMinMaxContainer';
import { MinWindSpeed } from './MinWindSpeed';
import { MaxWindSpeed } from './MaxWindSpeed';

export const WindSpeed = ({solData}) => {
  if (!solData) {
    return <Text>Loading...</Text>
  }
  return (
    <ExtraInfoContainer>
      <Text>Wind speed</Text>
        <AvarageWindSpeed 
          solData={solData}
        />
        <ExtraInfoMinMaxContainer>
          <MinWindSpeed 
            solData={solData}
          />
          <MaxWindSpeed 
            solData={solData}
          />
        </ExtraInfoMinMaxContainer>
    </ExtraInfoContainer>
  )
}