import React, { useState, useEffect } from 'react'
import { ActivityIndicator } from 'react-native'
import { Accelerometer} from 'expo-sensors'
import { Container, APIButton, Title, WeatherImage, BtnText, StyledText } from './GetWeather.styles'
import * as Location from 'expo-location';
import data from '../geodata/geodata.json'



const GetWeather = () => {
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [city, setCity] = useState('')
  const [weather, setWeather] = useState('')
  const [temperature, setTemperature] = useState()
  const [directions, setDirections] = useState({
		x: 0,
		y: 0,
		z: 0,
	});
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(false)

  /* Getting the coordinates for every city in geodata.json*/
  const cities = data.features.map(item => item.geometry.coordinates)
  /* Getting random city coordinates => https://www.geeksforgeeks.org/how-to-select-a-random-element-from-array-in-javascript/ */
  const randomCity = cities[Math.floor(Math.random() * cities.length)]
  const lon = randomCity[0]
  const lat = randomCity[1]

  useEffect(() => {
    getLocation()
  }, [])

  useEffect(() => {
		Accelerometer.setUpdateInterval(1000);
		subscribe();
		return () => unsubscribe();
	}, []);

	useEffect(() => {
		if (isShakingEnough(directions)) {
			setLongitude(lon)
      setLatitude(lat)
      getCity()
      getWeather()
      setLongitude('')
      setLatitude('')
		}
	}, [directions]);

  /* First step is to get location-data on mounting the component*/
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

  /* Latitude and longitude are then used for an API-fetch from Openweathermap to get a weather description and the temperature */
  const getWeather = () => {
    setLoading(true)
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,daily&units=metric&appid=013ab14d63572c8515d001915407b22e`)
      .then((res) => res.json())
      .then((data) => {
        setTemperature(data.current.temp)
        setWeather(data.current.weather[0].main)
      })
      .finally(() => setLoading(false))
  }

  /* Another API-fetch from Openweathermap to get the city name */
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

  /* Switchcases for pictures according to the weather description */
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

  const subscribe = () => {
		setSubscription(
			Accelerometer.addListener((accelerometerData) => {
				setDirections(accelerometerData);
			})
		);
	};

	const unsubscribe = () => {
		subscription && subscription.remove();
		setSubscription(null);
	};
/**
 * 
 * @param {*} directions: object { x: la}
 * @returns boolean
 */
	const isShakingEnough = (directions) => {
		const totalForce = Math.abs(directions.x) + Math.abs(directions.y) + Math.abs(directions.z);
		return totalForce > 1.78;
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
        <StyledText>Right now it's {weather.toLowerCase()} and {temperature}°C</StyledText>
        <APIButton
          onPress={() => setWeather('')}>
          <BtnText>Start over</BtnText>
        </APIButton>
      </>
      )}
    </Container> 
  )
}

export default GetWeather
