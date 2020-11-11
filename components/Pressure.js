import React from 'react';
import { Text } from 'react-native';

import { ExtraInfoContainer } from './styled/ExtraInfoContainer';
import { ExtraInfoMinMaxContainer } from './styled/ExtraInfoMinMaxContainer';
import { AvaragePressure } from './AvaragePressure';
import { MinPressure } from './MinPressure';
import { MaxPressure } from './MaxPressure';


export const Pressure = ({solData}) => {
  if (!solData) {
    return <Text>Loading...</Text>
  }
  return (
    <ExtraInfoContainer>
      <Text>Air Pressure</Text>
        <AvaragePressure 
          solData={solData}
        />
        <ExtraInfoMinMaxContainer>
          <MinPressure 
            solData={solData}
          />
          <MaxPressure 
            solData={solData}
          />
        </ExtraInfoMinMaxContainer>
    </ExtraInfoContainer>
  )
}