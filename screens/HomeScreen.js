import React from 'react'
import { Button, Text,  View, StyleSheet, SafeAreaView  } from 'react-native'

export const HomeScreen = () => {
    return (
      <View style={styles.center}>
        <Text>This is the home screen</Text>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  });
