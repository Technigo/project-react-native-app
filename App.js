import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'

import dummydata from './dummydata.json'
import forecastdata from './forecastdata.json'

const MainView = styled.View`
  flex: 1;
  background-color: #DAFFEF;
  justify-content: center;
  align-items: center;
`

const CurrentWeatherContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const ForecastContainer = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10%;
  padding: 20px;
`

const ForecastItem = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

const TempHeading = styled.Text`
  font-size: 44px;
  color: #79676D;
  margin-bottom: 20px;
`

const SubHeading = styled.Text`
  font-sixe: 34px;
  color: #79676D;
`

const ForecastText = styled.Text`
  font-sixe: 34px;
  color: #79676D;
  margin: 10px;
  font-weight: ${props => (props.bold ? '800' : '400')};
`


const App = () => {

  const [forecast, setForecast] = useState([])

  // const [currentWeather, setCurrentWeather] = useState([])

  // useEffect(() => {
  //   fetch(dummydata)
  //     .then(res => res.json())
  //     .then(data => setCurrentWeather(data.main))
  //     .catch(err => console.err(err))
  // },[])

  return (
    <MainView>


      <CurrentWeatherContainer>
        <TempHeading>{dummydata.weather.map((value) => value.main)} | {dummydata.main.temp.toFixed()} °C</TempHeading>
        <SubHeading>Feels like {dummydata.main.feels_like.toFixed()} °C</SubHeading>
      </CurrentWeatherContainer>


      <ForecastContainer>
        {forecastdata.list.filter(item => item.dt_txt.includes('12:00')).map((value) => {
          const forecastDate = new Date(value.dt * 1000)
          return (
          <ForecastItem>
            <ForecastText bold>{forecastDate.toLocaleString('en-US', {weekday: 'long'})}</ForecastText>
            <ForecastText>{value.weather.map((value) => value.main)} | {value.main.temp.toFixed()} °C</ForecastText>
          </ForecastItem>
          )
        })}
      </ForecastContainer>


    </MainView>
  )
}

export default App
