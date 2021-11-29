import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import ButtonApi from "./components/ButtonApi";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <ButtonApi />
      <Text style={styles.counterText}> {count}</Text>
      <Button title="Tape me" onPress={() => setCount(count + 1)} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "powderblue",
    alignItems: "center",
    paddingTop: 90,
    color: "red",
  },

  counterText: {
    color: "red",
    padding: "20",
  },
});
