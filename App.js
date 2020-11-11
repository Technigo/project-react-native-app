import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { Button } from 'react-native'
import { Accelerometer } from 'expo-sensors';

import { Weather } from './components/Weather'
import { baseAPI, apiKey } from "./config";
import SkopjeImg from './assets/img/skopje.jpg'
import StockholmImg from './assets/img/stockholm.jpg'
import ParisImg from './assets/img/paris.jpg'

const Container = styled.View`
  display: flex
  flex: 1
`;

const cities = ["Skopje", "Stockholm", "Paris"]

const App = () => {
  const [cityName, setCityName] = useState(cities[0]);
  const [cityData, setCityData] = useState(null);
  const [cityImg, setCityImg] = useState(SkopjeImg);
  const [accelerometerData, setAccelerometerData] = useState({});

  const nextCity = () => {
    let index = cities.indexOf(cityName);
    if (index + 1 >= cities.length) {
      setCityName(cities[0])
    } else {
      setCityName(cities[index + 1]);
    }
  };

  useEffect(() => {
    Accelerometer.setUpdateInterval(20);
    const listener = Accelerometer.addListener((data) => {
      const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z);
      if (totalForce > 3.5) {
        setAccelerometerData(data);
      }
    });

    return () => {
      listener && listener.remove();
    };
  }, []);

  useEffect(() => {
    nextCity();
  }, [accelerometerData]);

  useEffect(() => {
    const weatherUrl = `${baseAPI}weather?q=${cityName}&units=metric&APPID=${apiKey}`;
    fetch(weatherUrl)
      .then(response => response.json())
      .then(json => {
        setCityData(json)
        switch (cityName) {
          case 'Skopje':
            setCityImg(SkopjeImg);
            break;
          case 'Stockholm':
            setCityImg(StockholmImg)
            break;
          case 'Paris':
            setCityImg(ParisImg)
            break;
        }
      })
  }, [cityName])

  return (
    <Container>
      {cityData && <Weather cityData={cityData} img={cityImg} />}

      <Button
        title="Next City"
        onPress={nextCity}
      />
    </Container>
  )
}

export default App;