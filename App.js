import React from "react";
import ShakePhone from "./components/ShakePhone";
import { StyleSheet, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.view} >
      <ShakePhone />
    </View>
  );
};


const styles = StyleSheet.create({
  view: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'papayawhip',
  },


});

export default App;
