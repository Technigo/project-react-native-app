import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native'
import { Magnetometer } from 'expo-sensors';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import {ImageWrapper} from './ImageWrapper';

function calcAngleDegrees(x, y) {
  let angle = 0
  if (Math.atan2(y, x) >= 0) {
     angle = Math.atan2(y, x) * (180 / Math.PI);
  }
  else {
    angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
  }

return Math.round(angle);
};


//{"z":4.5555,"y":8.3"x":8.2}
const Compass = () => {
  
  const [magnetData, setMagnetData] = useState({x:0, y:0, z:0})
  useEffect(()=>{
    Magnetometer.setUpdateInterval(1000);
  Magnetometer.addListener(result => {
        setMagnetData(result)
        console.log(result)
        
        });
     

  },[]) 

  return (

      <View>
          <ImageWrapper degree = {calcAngleDegrees(magnetData.y, magnetData.x)} /> 
      </View>

  )
}






export default Compass