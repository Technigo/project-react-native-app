import React, { useState, useEffect } from 'react'
import { Gyroscope, Accelerometer } from 'expo-sensors';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native'
import styled from 'styled-components/native'

let hue = 0
let saturation = 100
let luminosity = 50

const Quote = styled.Text`
  textAlign: center;
  fontFamily: Introspect-Bk;
  color: ${props => props.hslColor};
  width: 80%;
  fontSize: ${props => props.quoteLength > 120 ? "35px" : "45px"};
`

const QuoteContainer = ({ quote }) => {
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

  let luminosityRaw = 50 + (Math.max(gyroX, gyroY, gyroZ) * 10)
  let saturationRaw = 100 - Math.abs(accelX * 100)
  let hueRaw = accelY * 360

  luminosity = smooth(luminosity, luminosityRaw, 2)
  saturation = smooth(saturation, saturationRaw, 5)
  hue = smooth(hue, hueRaw, 5)

  const styles = StyleSheet.create({
    background: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });

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
        </Quote>
      </LinearGradient>
    </>
  );
}

export default QuoteContainer

function smooth(prevnumber, number, delay) {
  if (!number) {
    return 0;
  }
  return Math.floor((prevnumber * (delay - 1) + number) / delay)
}


