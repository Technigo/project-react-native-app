import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import styled from "styled-components/native"
import moment from "moment";

export const Container = styled.View`
flex: 1;
flex-direction: row;
background-color: white;
opacity: 0.7;
align-items: center;
justify-content: space-around;
border-width: 1px;
border-color: black;
max-height: 100px;

`;
export const CardText = styled.Text`
    margin: 24px;
	font-size: 18px;
	text-align: center;

`;


const Card =({info}) => {
const thisDate = new Date(info.dt*1000)
const day = moment(thisDate).format("dddd");
const logo = 'https://openweathermap.org/img/wn/10d@2x.png'




//${info.icon}
    return (
    
        <Container>
        <CardText> {day} </CardText>
        <CardText> {Math.round(info.main.temp-274)}C </CardText>
        <CardText> {info.weather[0].description} </CardText>
        <Image source = {{uri:`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}} style={{width:50, height:50}} />
        </Container>
      
          
    );
  }
 export default Card