import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import { LoaderText } from './styled/LoaderText'

const TemperatureContainer = styled.View`
  padding: 20px;
  align-items: center;
  width: 80%
  flex: 1;
`

const AvarageTemperature = styled.Text`
  font-size: 50px;
  color: white;
`

const MinMaxContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  width: 90%
`

const MinMaxTemperature = styled.Text`
  font-size: 15px;
  color: white;
`

export const Temperature = ({solData}) => {
  /*Preventing errors with undefined when the app loads for the first time*/
  if (!solData) {
    return <LoaderText>Still waiting for data from Mars 🚀</LoaderText>
  }
  else if (!solData.AT) {
    return <LoaderText>Still waiting for data from Mars 🚀</LoaderText>
  }
  return (
    <TemperatureContainer>
      <AvarageTemperature>
        {(solData.AT.av).toFixed(1)} °C
      </AvarageTemperature>
      <MinMaxContainer>
        <MinMaxTemperature>
          min {(solData.AT.mn).toFixed(1)}°C
        </MinMaxTemperature>
        <MinMaxTemperature>
          max {(solData.AT.mx).toFixed(1)}°C
        </MinMaxTemperature>
      </MinMaxContainer>
    </TemperatureContainer>
  )
};
