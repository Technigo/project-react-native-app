import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import Constants from "expo-constants";
import { Facts } from "./facts";


export const GenerateButton = () => {
    // const [count, setCount] = useState(0);
    // const newItem = Facts();
    //onPress I will generate the fetched information
    return (
      <View style={styles.container}> 
        <TouchableOpacity
          style={styles.button}
          // onPress={newItem()}
        >
          <Text>New image!</Text>
        </TouchableOpacity>
    
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,

      padding: 8,
      alignItems: 'center',
    },
    counterText: {
      color: 'pink',
      fontSize: 20,
    },
    button: {
      padding: 8,
      margin: 10,
      backgroundColor: 'pink',
      borderRadius: 2,
    }
  });
  