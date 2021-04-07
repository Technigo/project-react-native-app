import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'

import forecastdata from '../forecastdata.json'

const ForecastContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10%;
  padding: 20px;
  background-color: #DAFFEF;
`

const ForecastItem = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const ForecastText = styled.Text`
  font-sixe: 34px;
  color: #79676D;
  margin: 10px;
  font-weight: ${props => (props.bold ? '800' : '400')};
`


export const Forecast = () => {


  return (
    <ForecastContainer>
        {forecastdata.list.filter(item => item.dt_txt.includes('12:00')).map((value) => {
          const forecastDate = new Date(value.dt * 1000)
          return (
          <ForecastItem key={value.weather.id}>
            <ForecastText bold>{forecastDate.toLocaleString('en-US', {weekday: 'long'})}</ForecastText>
            <ForecastText>{value.weather.map((value) => value.main)} | {value.main.temp.toFixed()} °C</ForecastText>
          </ForecastItem>
          )
        })}
      </ForecastContainer>
  )
}
