import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

import styled from 'styled-components/native'
import {Card} from './Card'
import {TopCard} from './TopCard'
// const secondApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityApi}&appid=2b9468766d0e54560c7e599762d2e80b`
// const secondApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityApi}&appid=2b9468766d0e54560c7e599762d2e80b`

const WeatherWeek = styled.View`
height: 350px;
width: 350px;
margin: 16px auto;      
`;

const TopBox = styled.View`
width: 350px;
height: 120px;
margin: 16px auto;
`;


export const Weather =() => {

    const [forecast, setForecast] = useState([])
    const [today, setToday] = useState({})
    const [done, setDone] = useState(false)
    const weatherapi = "https://api.openweathermap.org/data/2.5/forecast?q=Stockholm&appid=2b9468766d0e54560c7e599762d2e80b"
    

    useEffect(()=>{
        fetch(weatherapi)
        .then(res => res.json())
        .then(json => {
            setForecast(json.list)
            setToday(json.list[0])
            setDone(true)
            console.log("list",json.list)
            })
            .catch((error) => {
                alert(error)
                console.error('Error:', error);
              });
    },[weatherapi, setForecast, setToday])


    return (
        <View>
            <TopBox >
           {done && <TopCard info={today} />}
           </TopBox>
        <WeatherWeek>
        {done && forecast.map((time)=>{
            if ((time.dt_txt).split(' ').includes("12:00:00")){
                return(
                    <Card info={time} key={time.dt} />
                )}
        })}
    
        </WeatherWeek>
        </View>
    );
  }