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

export const Settings = ({ onstepChange, step, setStep }) => {
  console.log(step);
  //   console.log(onStepChange);
  console.log(setStep);
  //   const onSubmit = () => {};
  return (
    <View style={styles.Container}>
      <Header />

      <Text>Change me!</Text>
      <TextInput
        style={styles.input}
        // onChangeText={(value) => onStepChange(value)}
        // onChangeText={(text) => console.log(text)}
        onChangeText={(event) => setStep(event.target.value)}
        value={step}
        // onSubmitEditing={onstepChange}
        keyboardType={"default"}
      />
      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
};
