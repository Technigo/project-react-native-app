import React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import Car from './components/Car';

const image = {
  uri: 'https://media.giphy.com/media/UT5C4hCvmlSzJ7QeQy/giphy.gif'
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
    justifyContent: 'center'
  }
});

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode='cover' style={styles.image}>
        <Car />
      </ImageBackground>
    </View>
  );
};

export default App;
