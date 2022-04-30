import React from 'react';
import { SensorComponent } from './components/SensorComponent';
import { ImageBackground, StyleSheet } from 'react-native';
import background from './assets/background.jpg';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
});

const App = () => {
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.image}>
      <SensorComponent></SensorComponent>
    </ImageBackground>
  );
};

export default App;
