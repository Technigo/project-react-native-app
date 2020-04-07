import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Gyroscope } from 'expo-sensors';
import { LinearGradient } from 'expo-linear-gradient';

let red = 0;
let green = 0;
let blue = 0;

const GyroComponent = () => {
  const [gyroData, setGyroData] = useState({});
  Gyroscope.setUpdateInterval(100);

  const styles = StyleSheet.create({
    container: {
      width: 100,
      height: 100,
    },
    bgColor: {
      backgroundColor: `rgb(${red}, ${green}, ${blue})`,
    },
    buttonContainer: {
      flexDirection: 'row',
      alignItems: 'stretch',
      marginTop: 15,
    },
    button: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#eee',
      padding: 10,
    },
    sensor: {
      marginTop: 45,
      paddingHorizontal: 10,
    },
    text: {
      textAlign: 'center',
      color: "white",
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


  return (
    <>
      <LinearGradient style={styles.container} colors={[`rgb(${red}, ${green}, ${blue})`, `rgb(${red}, ${blue}, ${green})`]} />
      <LinearGradient style={styles.container} colors={[`rgb(${blue}, ${red}, ${green})`, `rgb(${green}, ${blue}, ${red})`]} />
      {/* <View style={styles.sensor}>
        <Text style={styles.text}>
          x: {round(x)} y: {round(y)} z: {round(z)}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={_toggleG} style={styles.button}>
            <Text>Toggle</Text>
          </TouchableOpacity>
        </View>
      </View> */}
    </>
  );
}

export default GyroComponent


function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 10) / 10;
}

