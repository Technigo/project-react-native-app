import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import styled from "styled-components/native"
import moment from "moment";

const Container = styled.View`
flex: 1;
flex-direction: row;
background-color: black;
opacity: 0.8;
align-items: center;
justify-content: space-around;
border-width: 1px;
border-color: black;

`

const CardText = styled.Text`
font-size: 20px;
color: white;
`



export const TopCard =({info}) => {
const thisDate = new Date(info.dt*1000)
const day = moment(thisDate).format('hh:mm a');
const logo = 'https://openweathermap.org/img/wn/10d@2x.png'

//${info.icon}
    return (
    
        <Container>
            <View>
        <CardText> {day} </CardText>
        <CardText> {Math.round(info.main.temp-274)}C </CardText>
        </View>
        <View>
        
        <Image source = {{uri:`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}} style={{width:75, height:75}} />
        <CardText> {info.weather[0].description} </CardText>
        </View>
        </Container>
      
          
    );
  }