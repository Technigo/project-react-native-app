import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AppLoading } from 'expo'
import { Gyroscope, Accelerometer } from 'expo-sensors';
import { LinearGradient } from 'expo-linear-gradient';

let red = 0;
let green = 0;
let blue = 0;

let hue = 1
let saturation = 100
let luminosity = 50

const QuoteContainer = ({ text, textStyle }) => {
  const [gyroData, setGyroData] = useState({});
  const [accelData, setAccelData] = useState({});
  Gyroscope.setUpdateInterval(100);
  Accelerometer.setUpdateInterval(100);


  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    containerBgColor: {
      width: 100,
      height: 100,
      // backgroundColor: `hsl(${hue}, ${saturation}%, ${luminosity}%)`,
    },
    text: {
      textAlign: 'center',
      fontFamily: 'Introspect-Bk',
      // color: `${HSLToRGB(hue, saturation, luminosity)}`,
      color: `white`,
      width: "80%",
      fontSize: 40,
    },
  });

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

  hue = Math.abs(Math.floor(accelY * 360))
  saturation = Math.floor(100 - Math.abs(accelX * 100))
  luminosity = Math.floor(50 + (Math.max(gyroX, gyroY, gyroZ) * 5))

  // red = Math.abs(Math.floor(round(x) * 255))
  // green = Math.abs(Math.floor(round(y) * 255))
  // blue = Math.abs(Math.floor(round(z) * 255))

  //hsl to rgb function
  //https://css-tricks.com/converting-color-spaces-in-javascript/


  return (
    <>
      <LinearGradient style={styles.container} colors={[`${HSLToRGB(hue, saturation, luminosity)}`, `${HSLToRGB(hue + 90, saturation, luminosity)}`]}>
        <Text style={styles.text}>
          {/* {text} */}
          {/* x: {round(x)} y: {round(y)} z: {round(z)} */}
          hue: {hue} sat: {saturation} lum: {luminosity}
          RGB: {HSLToRGB(hue, saturation, luminosity)}
        </Text>
      </LinearGradient>
    </>
  );
}

export default QuoteContainer


function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 10) / 10;
}


function HSLToRGB(h, s, l) {
  // Must be fractions of 1

  s /= 100;
  l /= 100;

  let c = (1 - Math.abs(2 * l - 1)) * s,
    x = c * (1 - Math.abs((h / 60) % 2 - 1)),
    m = l - c / 2,
    r = 0,
    g = 0,
    b = 0;


  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  return "rgb(" + r + "," + g + "," + b + ")";
}
