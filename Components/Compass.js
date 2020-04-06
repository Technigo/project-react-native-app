import React, {useState, useEffect} from 'react';
import styled from 'styled-components/native'
import { Magnetometer } from 'expo-sensors';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { ImageWrapper } from './ImageWrapper';




//{"z":4.5555,"y":8.3"x":8.2}
export const Compass = () => {
  
  const [magnetData, setMagnetData] = useState({x:0, y:0, z:0})
  useEffect(()=>{
    Magnetometer.setUpdateInterval(1000);
  Magnetometer.addListener(result => {
        setMagnetData(result)
        console.log(result)
        
        });
     

  },[]) 
  // let { x, y, z } = magnetData
  //Object {
  //  "x": -14.72625732421875,
  //  "y": 5.58013916015625,
  // "z": -54.4403076171875,}

  return (

      <View>
          <ImageWrapper degree = {calcAngleDegrees(magnetData.y, magnetData.x)} /> 
        <Text>{direction(calcAngleDegrees(magnetData.y, magnetData.x))}</Text>
 

      </View>

  )
}
function round(n) {
    if (!n) {
      return 0;
    }
  
    return Math.floor(n * 100) / 100;
  }

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

function direction (degree) {
  let words = ""
  if (degree >= 22.5 && degree < 67.5) {
    words = 'NE';
  }
  else if (degree >= 67.5 && degree < 112.5) {
    words = 'E';
  }
  else if (degree >= 112.5 && degree < 157.5) {
    words = 'SE';
  }
  else if (degree >= 157.5 && degree < 202.5) {
    words = 'S';
  }
  else if (degree >= 202.5 && degree < 247.5) {
    words = 'SW';
  }
  else if (degree >= 247.5 && degree < 292.5) {
    words = 'W';
  }
  else if (degree >= 292.5 && degree < 337.5) {
    words = 'NW';
  }
  else {
    words = 'N';
  }
  return words

}

