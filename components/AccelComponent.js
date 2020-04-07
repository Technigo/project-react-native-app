import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Accelerometer } from 'expo-sensors';
import { LinearGradient } from 'expo-linear-gradient';

let red = 0;
let green = 0;
let blue = 0;

const AccelComponent = () => {

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
    middleButton: {
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: '#ccc',
    },
    sensor: {
      marginTop: 45,
      paddingHorizontal: 10,
    },
    text: {
      fontSize: 10,
      color: "white",
    }

  })


  const [data, setData] = useState({});

  useEffect(() => {
    _toggle();
  }, []);

  useEffect(() => {
    return () => {
      _unsubscribe();
    };
  }, []);

  const _toggle = () => {
    if (this._subscription) {
      _unsubscribe();
    } else {
      _subscribe();
    }
  };

  const _subscribe = () => {
    this._subscription = Accelerometer.addListener(accelerometerData => {
      setData(accelerometerData);
    });
  };

  const _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  let { x, y, z } = data;

  red = Math.abs(Math.floor(round(x) * 255))
  green = Math.abs(Math.floor(round(y) * 255))
  blue = Math.abs(Math.floor(round(z) * 255))

  // console.log(red)

  return (
    <><View >
      <LinearGradient style={styles.container} colors={[`rgb(${red}, ${green}, ${blue})`, `rgb(${red}, ${blue}, ${green})`]} />
      <LinearGradient style={styles.container} colors={[`rgb(${blue}, ${red}, ${green})`, `rgb(${green}, ${blue}, ${red})`]} />
      {/* </View>
      <View style={styles.sensor}>
        <Text style={styles.text}>
          x: {round(x)} y: {round(y)} z: {round(z)}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={_toggle} style={styles.button}>
            <Text>Toggle</Text>
          </TouchableOpacity>
        </View> */}
    </View>
    </>

  )
}

export default AccelComponent




function round(n) {
  if (!n) {
    return 0;
  }

  return Math.floor(n * 100) / 100;
}


