import React from 'react'
import styled from 'styled-components/native'

const BackgroundImg = styled.ImageBackground`
    flex: 1
    resizeMode: cover
    flex-direction: column
    align-content: center
` ;

const Overlay = styled.View`
    flex: 1
    flex-grow: 1
    background-color: rgba(0, 0, 0, 0.4)
    padding: 50px
`;

const TxtTitle = styled.Text`
    margin-top: 50px 
    font-size: 40px
    color: white
    text-shadow: 2px 2px black
`;

const WeatherDetails = styled(TxtTitle)`
    font-size: 25px
`;

export const Weather = ({ cityData, img }) => {

    return (
        <BackgroundImg source={img}>
            <Overlay>
                <TxtTitle>City: {cityData.name}</TxtTitle>
                <WeatherDetails>Average Temperatute: {Math.round(cityData.main.temp)} °C</WeatherDetails>
                <WeatherDetails>Feels Like: {Math.round(cityData.main.feels_like)} °C</WeatherDetails>
                <WeatherDetails>Wind Speed: {cityData.wind.speed} m/s</WeatherDetails>
            </Overlay>
        </BackgroundImg>
    )
}