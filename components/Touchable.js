import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const Touchable = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text>Count: {count}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: "lightyellow"
  },
  button: {
    alignItems: "center",
    justifyContent: 'center',
    backgroundColor: "yellow",
    padding: 10,
    height: 100,
    width: 100
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});
