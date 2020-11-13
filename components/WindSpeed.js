import React from 'react';
import { Text } from 'react-native';

import { ExtraInfoContainer } from './styled/ExtraInfoContainer';
import { AvarageWindSpeed } from './AvarageWindSpeed';
import { ExtraInfoMinMaxContainer } from './styled/ExtraInfoMinMaxContainer';
import { MinWindSpeed } from './MinWindSpeed';
import { MaxWindSpeed } from './MaxWindSpeed';
import { HeadingTwo } from './styled/HeadingTwo';
import { LoaderText } from './styled/LoaderText';

export const WindSpeed = ({solData}) => {
  /*Preventing errors with undefined when the app loads for the first time*/
  if (!solData) {
    return <LoaderText>Still waiting for data from Mars 🚀</LoaderText>
  }
  return (
    <ExtraInfoContainer>
      <HeadingTwo>Wind speed</HeadingTwo>
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
};
