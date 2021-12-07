import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const Home = ({ navigation }) => {
  return (
    <View style={styles.homeWrapper}>
      <Text style={styles.homeText}>Welcome to my first app!</Text>
      <TouchableOpacity
        style={styles.homeButton}
        onPress={() => navigation.openDrawer()}
      >
        <Text style={styles.homeButtonText}>Open drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  homeWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'pink',
  },
  homeText: {
    fontSize: 25,
    color: '#000',
    marginBottom: 10,
  },
  homeButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 60,
    backgroundColor: 'red',
    borderRadius: 150,
  },
  homeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
