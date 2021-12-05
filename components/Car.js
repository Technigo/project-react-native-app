import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Accelerometer } from 'expo-sensors';

// data from Accelerometer
const Car = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0
  });
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  const { width, height } = Dimensions.get('window');

  // renamed height and width to now get confused with styling
  let boardWidth = width;
  let boardHeight = height;
  let box = width / 10;

  //   top and left positions the object in the screen
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/car.png')}
        style={{
          position: 'absolute',
          top: boardHeight / 2.0 - box / 2.0,
          left: (-1 * boardWidth * data.x + 240) / 2 - box / 2.0,
          width: boardWidth / 2.0,
          height: boardHeight / 1.3,
          resizeMode: 'contain'
        }}
      />
      <View style={styles.textContainer}>
        {/* <Text style={styles.paragraph}>Tilt your phone to move the car!</Text>
        <Text style={styles.paragraph}>
          x = {data.x.toFixed(2)}
          {', '}y = {data.y.toFixed(2)}
          {', '}z = {data.z.toFixed(2)}
        </Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e'
  },
  textContainer: {
    position: 'absolute',
    top: 40
  }
});

export default Car;
