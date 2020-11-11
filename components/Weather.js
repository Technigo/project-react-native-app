import React from 'react'
import styled from 'styled-components/native'


const BackgroundImg = styled.ImageBackground`
    flex: 1
    resizeMode: cover
    flex-direction: column
    align-content: center
` ;

const WeatherDetails = styled.Text`
    margin-top: 50px 
    margin-bottom: 0px
    margin-left: 110px
    color: black
    font-size: 20px
    text-shadow: 2px 2px white
`;



export const Weather = ({ cityData, img }) => {

    return (
        <BackgroundImg source={img}>
            <WeatherDetails>City: {cityData.name}</WeatherDetails>
            <WeatherDetails>Average Temperatute: {Math.round(cityData.main.temp)} °C</WeatherDetails>
            <WeatherDetails>Feels Like: {Math.round(cityData.main.feels_like)} °C</WeatherDetails>
            <WeatherDetails>Wind Speed: {cityData.wind.speed}</WeatherDetails>
        </BackgroundImg>
    )
}