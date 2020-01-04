import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{'My Todos'.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 35,
    alignItems: 'center',
    backgroundColor: 'darkblue'
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontweight: 'bold'
  }
});
