import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const TemperatureContainer = styled.View`
  background-color: yellow;
`

const AvarageTemperature = styled.Text`
  font-size: 30px;
`

const MinMaxContainer = styled.View`
  background-color: red;
`

const MinMaxTemperature = styled.Text`
  font-size: 20px;
`

export const Temperature = ({solData}) => {
  if (!solData) {
    return <Text>Loading...</Text>
  }
  return (
    <TemperatureContainer>
      <AvarageTemperature>
        {solData.AT.av}°C
      </AvarageTemperature>
      <MinMaxContainer>
        <MinMaxTemperature>
          min {solData.AT.mn}°C
        </MinMaxTemperature>
        <MinMaxTemperature>
          max {solData.AT.mx}°C
        </MinMaxTemperature>
      </MinMaxContainer>
    </TemperatureContainer>
  )
}