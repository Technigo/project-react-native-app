import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import { Header } from "./Header";

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "papayawhip",
    flex: 1,
  },
  input: {
    padding: 10,
    backgroundColor: "white",
    width: 300,
    alignSelf: "center",
    borderRadius: 5,
  },
});

export const Settings = ({ onStepChange, step }) => {
  console.log(step);
  console.log(onStepChange);
  const onSubmit = () => {};
  return (
    <View style={styles.Container}>
      <Header />

      <Text>Change me!</Text>
      <TextInput
        style={styles.input}
        onChangeText={onStepChange}
        value={step}
        onSubmitEditing={onStepChange}
        keyboardType={"default"}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};
