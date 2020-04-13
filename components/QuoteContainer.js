import React, { useState, useEffect } from 'react'
import { AppLoading } from 'expo'
import { Gyroscope, Accelerometer } from 'expo-sensors';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

let hue = 0
let saturation = 100
let luminosity = 50
// can't get the app to run without declaring these here, but it feels like bad practise? 


const Quote = styled.Text`
  textAlign: center;
  fontFamily: Introspect-Bk;
  color: ${props => props.hslColor};
  width: 85%;
  fontSize: ${props => props.quoteLength > 100 ? "35px" : "45px"};
`
const Author = styled.Text`
  fontSize: ${props => props.quoteLength > 100 ? "25px" : "32px"};
`


const QuoteContainer = ({ quote, author }) => {
  const [gyroData, setGyroData] = useState({});
  const [accelData, setAccelData] = useState({});
  Gyroscope.setUpdateInterval(40);
  Accelerometer.setUpdateInterval(40);

  useEffect(() => {
    Gyroscope.addListener(gyroscopeData => {
      setGyroData(gyroscopeData);
    });
  }, []);

  useEffect(() => {
    Accelerometer.addListener(accelerometerData => {
      setAccelData(accelerometerData);
    });
  }, []);

  let { x: gyroX, y: gyroY, z: gyroZ } = gyroData;
  let { x: accelX, y: accelY, z: accelZ } = accelData;

  let luminosityRaw = 50 + (Math.max(gyroX, gyroY, gyroZ) * 10) //getting luminosity value from Gyroscope
  let saturationRaw = 100 - Math.abs(accelX * 100) //getting saturation value from Accelerometer
  let hueRaw = accelY * 360 //getting hue value from Accelerometer

  luminosity = smooth(luminosity, luminosityRaw, 2) //smooting the data with some delay
  saturation = smooth(saturation, saturationRaw, 5)
  hue = smooth(hue, hueRaw, 5)

  //LinearGradient don't wor with styled components
  const styles = StyleSheet.create({
    background: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });

  if (!quote) {
    return <AppLoading />
  } else {
    return (
      <>
        <LinearGradient
          style={styles.background}
          start={[1, 0]}
          colors={[`hsl(${hue}, ${saturation}%, ${luminosity}%)}`, `hsl(${hue + 67}, ${saturation}%, ${luminosity}%)}`]}>
          <Quote
            quoteLength={quote.length}
            hslColor={`hsl(${hue - 45}, ${saturation + 10}%, ${luminosity - 5}%)`}>
            {quote}
            <Author
              quoteLength={quote.length}
              hslColor={`hsl(${hue - 45}, ${saturation + 10}%, ${luminosity - 5}%)`}>
              {"\n\n"}{author}
            </Author>
          </Quote>
        </LinearGradient>
      </>
    );
  }
}

export default QuoteContainer


const smooth = (prevValue, value, delay) => {
  if (!value) {
    return 0;
  }
  return Math.floor((prevValue * (delay - 1) + value) / delay)
}


