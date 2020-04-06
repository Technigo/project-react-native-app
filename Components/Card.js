import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Image } from 'react-native';
import styled from "styled-components/native"
import moment from "moment";




export const Card =({info}) => {
const thisDate = new Date(info.dt*1000)
const day = moment(thisDate).format("dddd");
const logo = 'https://openweathermap.org/img/wn/10d@2x.png'

const Container = styled.View`
flex: 1;
flex-direction: row;
background-color: white;
opacity: 0.7;
align-items: center;
justify-content: space-around;
border-width: 1px;
border-color: black;

`


//${info.icon}
    return (
    
        <Container>
        <Text> {day} </Text>
        <Text> {Math.round(info.main.temp-274)}C </Text>
        <Text> {info.weather[0].description} </Text>
        <Image source = {{uri:`https://openweathermap.org/img/wn/${info.weather[0].icon}@2x.png`}} style={{width:50, height:50}} />
        </Container>
      
          
    );
  }
 
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#fff',
      opacity: 0.7,
      alignItems: 'center',
      justifyContent: 'space-around',
      borderWidth: 1,
      borderColor: 'black',
     
    },
  })