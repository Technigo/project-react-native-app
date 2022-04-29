import React from 'react';
import { Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50
  }
});

const Loader = () => {
  return (
    <Image style={styles.image} source={require('../assets/loader.gif')} />
  )
}

export default Loader;