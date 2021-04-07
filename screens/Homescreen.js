import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'


import dummydata from '../dummydata.json'

const CurrentWeatherContainer = styled.View`
  flex: 1;
  padding: 15px;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #DAFFEF;
`

const TempHeading = styled.Text`
  font-size: 37px;
  color: #79676D;
  margin-bottom: 20px;
`

const SubHeading = styled.Text`
  font-sixe: 34px;
  color: #79676D;
`

const MyButton = styled.TouchableOpacity`
  width: 100px;
  padding: 10px;
  margin: 20px;
  border: 1px solid #79676D;
`

const ButtonText = styled.Text`
  text-align: center;
  font-weight: bold;
  color: #79676D;
`


export const Homescreen = ({ navigation }) => {

  return (
    <CurrentWeatherContainer>
      <TempHeading>The weather in Stockholm today is {dummydata.main.temp.toFixed()}°C with {dummydata.weather.map((value) => value.description)}. But it actually feels like {dummydata.main.feels_like.toFixed()}°C.</TempHeading>
        <MyButton onPress={() => navigation.navigate('Forecast')}>
         <ButtonText>Forecast</ButtonText>
        </MyButton>
    </CurrentWeatherContainer>
  )
}

