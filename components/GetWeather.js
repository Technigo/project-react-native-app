import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import * as Location from 'expo-location';

const Container = styled.View `
  padding-top: 2px;
  height: 40%;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const APIButton = styled.TouchableOpacity`
  text-align: center;
  justify-content: center;
	width: 50%;
  max-width: 200px;
	background-color: #06B3D1;
  border-radius: 5px;
  height: 40px;
`
const Title = styled.Text`
	font-size: 30px;
  font-weight: bold;
	color: #ee7ec0;
  text-align: center;
`
const WeatherImage = styled.Image `
  width: 100%;
	height: 100%;
`
const BtnText = styled.Text `
  color: #e6f4f1;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`
const StyledText = styled.Text `
  font-size: 25px;
  color: #00344e;
  margin-bottom: 30px;
`

const GetWeather = () => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    getLocation()
  }, [])

  const getLocation = () => {
    setLoading(true)
    Location.requestForegroundPermissionsAsync()
      .then((data) => {
        if (data.status !== 'granted') {
					console.log('Permission to access location was denied');
				} else {
					return Location.getCurrentPositionAsync({});
				}
      })
      .then((locationData) => {
        setLatitude(locationData.coords.latitude)
        setLongitude(locationData.coords.longitude)
        console.log('LocationData', locationData)
      })
      .finally(() => setLoading(false))
  }

  const getWeather = () => {
    setLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&units=metric&appid=013ab14d63572c8515d001915407b22e`)
      .then((res) => res.json())
      .then((data) => setWeather(data.current.weather[0].main))
      .finally(() => setLoading(false))
  }

  const getCity = () => {
    setLoading(true)
    fetch(`http://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=013ab14d63572c8515d001915407b22e`)
      .then((res) => res.json())
      .then((data) => setCity(data[0].name))
      .finally(() => setLoading(false))
  }

  const onBtnPress = () => {
    getCity()
    getWeather()
  }

  const ImagePicker = (weather) => {
    switch (weather) {
      case 'Rain' :
        return require('../assets/Rain_icon.png')
        break 
      case 'Clear' :
        return require('../assets/Clear_icon.png')
        break
      case 'Clouds' :
        return require('../assets/Clouds_icon.png')
        break
      case 'Snow' :
        return require('../assets/Snow_icon.png')
        break
      case 'Thunderstorm' :
        return require('../assets/Thunderstorm_icon.png')
        break
      default: 
        return require('../assets/Other_icon.png')
    }
  };

  if (loading) {
    return <ActivityIndicator />
  }

  return (
    <Container>
      {!weather && (
        <APIButton 
          onPress={onBtnPress}>
          <BtnText>Get Weather</BtnText>
        </APIButton>)}
      {/* I'd use !! which I call bang bang operator to boolianize error. https://pretagteam.com/question/error-text-strings-must-be-rendered-within-a-text-component */}
      {!!weather && (
      <>  
        <Title>The weather in {city} is just amazing!</Title>
        <WeatherImage
          source={ImagePicker(weather)}
          resizeMode="contain"
        />
        <StyledText>Right now it's {weather.toLowerCase()}. Isn't that something?</StyledText>
        <APIButton
          onPress={() => setWeather('')}>
          <BtnText>Start</BtnText>
        </APIButton>
      </>
      )}
    </Container> 
  )
}

export default GetWeather
