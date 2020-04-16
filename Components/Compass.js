import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native'
import { Magnetometer } from 'expo-sensors';
import { View, Image } from 'react-native';
import {ImageWrapper} from './ImageWrapper';

const calcAngleDegrees = (x, y) => {
  let angle = 0
  if (Math.atan2(y, x) >= 0) {
     angle = Math.atan2(y, x) * (180 / Math.PI);
  }
  else {
    angle = (Math.atan2(y, x) + 2 * Math.PI) * (180 / Math.PI);
  }

return Math.round(angle);
};

const Compass = () => {
  const [magnetData, setMagnetData] = useState({x:0, y:0, z:0})
  useEffect(()=>{
    Magnetometer.setUpdateInterval(1000);
    Magnetometer.addListener(result => {
        setMagnetData(result)
    });
     
  },[]) 

  return (
    <View>
      <ImageWrapper degree = {calcAngleDegrees(magnetData.y, magnetData.x)} /> 
    </View>
  )
}

export default Compass