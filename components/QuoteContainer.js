import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { AppLoading } from 'expo'
import { Gyroscope, Accelerometer } from 'expo-sensors';
import { LinearGradient } from 'expo-linear-gradient';

let red = 0;
let green = 0;
let blue = 0;

const QuoteContainer = ({ text, textStyle }) => {
  const [gyroData, setGyroData] = useState({});
  Gyroscope.setUpdateInterval(100);


  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      textAlign: 'center',
      fontFamily: 'Introspect-Bk',
      color: "white",
      width: "80%",
      fontSize: 40,
    },
  });


  useEffect(() => {
    _toggleG();
  }, []);

  useEffect(() => {
    return () => {
      _unsubscribeG();
    };
  }, []);

  const _toggleG = () => {
    if (this._subscriptionG) {
      _unsubscribeG();
    } else {
      _subscribeG();
    }
  };



  const _subscribeG = () => {
    this._subscriptionG = Gyroscope.addListener(gyroscopeData => {
      setGyroData(gyroscopeData);
    });
  };

  const _unsubscribeG = () => {
    this._subscriptionG && this._subscriptionG.remove();
    this._subscriptionG = null;
  };

  let { x, y, z } = gyroData;

  red = Math.abs(Math.floor(round(x) * 255))
  green = Math.abs(Math.floor(round(y) * 255))
  blue = Math.abs(Math.floor(round(z) * 255))

  //hsl to rgb function
  //https://css-tricks.com/converting-color-spaces-in-javascript/


  return (
    <>
      <LinearGradient style={styles.container} colors={[`rgb(${red}, ${green}, ${blue})`, `rgb(${red}, ${blue}, ${green})`]}>
        <Text style={styles.text}>
          {text}
          {/* x: {round(x)} y: {round(y)} z: {round(z)} */}
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
