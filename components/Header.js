import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TRENDING IMAGES FROM PEXELS</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: 400,
    marginBottom: 10,
    marginTop: 10
  },
  title: {
    color: 'white',
    fontSize: 20
  }
});

export default Header;
