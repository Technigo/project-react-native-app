import React, { useState, useEffect } from 'react'
import { View, Text, ActivityIndicator, Button} from 'react-native'
import styled from 'styled-components/native'
import * as Location from 'expo-location';

const WeatherImage = styled.Image `
  width: 100%;
	height: 100%;
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

  const ImagePicker = () => {
    if (weather === "Rain" || "Drizzle") {
      return '../assets/Rain_icon.png';
    } else if (weather === "Clear") {
      return '../assets/Clear_icon.png';
    } else if (weather === "Clouds") {
      return '../assets/Clouds_icon.png';
    } else if (weather === "Snow") {
      return '../assets/Snow_icon.png';
    } else if (weather === "Thunderstorm") {
      return '../assets/Thunderstorm_icon.png';
    } else return '../assets/Other_icon.png';
  };

  if (loading) {
    return <ActivityIndicator />
  }


  return (
    <View>
      <WeatherImage
				source={require('../assets/Rain_icon.png')}
				resizeMode="contain"
			/>
      <Text>Hello handsome, I see you are in {city} </Text>
      {weather && (<Text>Weather {weather}</Text>)}
      <Button title='Weather' onPress={onBtnPress} />
    </View> 
  )
}

export default GetWeather
