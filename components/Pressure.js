import React from 'react';
import { Text } from 'react-native';

import { ExtraInfoContainer } from './styled/ExtraInfoContainer';
import { ExtraInfoMinMaxContainer } from './styled/ExtraInfoMinMaxContainer';
import { AvaragePressure } from './AvaragePressure';
import { MinPressure } from './MinPressure';
import { MaxPressure } from './MaxPressure';
import { HeadingTwo } from './styled/HeadingTwo';
import { LoaderText } from './styled/LoaderText';


export const Pressure = ({solData}) => {
  /*Preventing errors with undefined when the app loads for the first time*/
  if (!solData) {
    return <LoaderText>Still waiting for data from Mars 🚀</LoaderText>
  }
  return (
    <ExtraInfoContainer>
      <HeadingTwo>Air Pressure</HeadingTwo>
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
};
