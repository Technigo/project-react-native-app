import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const WeatherText = styled.Text`
  font-size: 25px;
`;

const weatherStockholm =
  "https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=e74df95bd073adf9306ac7f46ad51144";

const Weather = () => {
  const [weatherInfo, setWeatherInfo] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=e74df95bd073adf9306ac7f46ad51144"
    )
      .then((res) => res.json())
      .then((data) => {
        setWeatherInfo(data);
      });
  }, []);

  return (
    <>
      <View>
        <WeatherText>{weatherInfo.name}</WeatherText>
      </View>
      <View>
        <Text></Text>
      </View>
    </>
  );
};

export default Weather;
