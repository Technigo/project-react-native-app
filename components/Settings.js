import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { settings } from "../reducers/Settings";

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

export const Settings = () => {
  const dispatch = useDispatch();
  //   console.log(stepData);
  //   console.log(onStepChange);

  const [step, setStep] = useState();
  const onStepChange = () => {
    dispatch(settings.actions.setSteps(step), setStep(step));
  };
  console.log(step);
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
        onSubmitEditing={onStepChange}
        keyboardType={"default"}
      />
      {/* <Button title="Submit" onPress={handleSubmit(onSubmit)} /> */}
    </View>
  );
};
