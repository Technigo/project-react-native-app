import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export const Header = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    width: 600,
    marginBottom: 400
  },
  title: {
    color: 'white',
    fontSize: 30
  }
});

export default Header;
