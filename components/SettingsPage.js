import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { useDispatch } from "react-redux";
import { settings } from "../reducers/Settings";

import { Header } from "./Header";

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "papayawhip",
    flex: 1,
    padding: 15,
  },
  input: {
    padding: 10,
    backgroundColor: "white",
    width: 340,
    alignSelf: "center",
    borderRadius: 5,
  },
  Heading: {
    textAlign: "center",
    fontSize: 25,
    color: "palevioletred",
    fontWeight: "bold",
  },
  inputContainer: {
    margin: 20,
  },
  inputText: {
    fontSize: 16,
    margin: 10,
  },
});

export const SettingsPage = () => {
  const dispatch = useDispatch();
  //   console.log(stepData);
  //   console.log(onStepChange);

  const [step, setStep] = useState();
  const [name, setName] = useState("");
  const onStepChange = () => {
    dispatch(settings.actions.setSteps(step), setStep(step));
  };
  const onNameChange = () => {
    dispatch(settings.actions.setUserName(name), setName(name));
  };
  console.log("this is step" + step);
  console.log("on change" + onStepChange);
  console.log("store" + settings.actions.setSteps(step));
  return (
    <View style={styles.Container}>
      <Header />
      <Text style={styles.Heading}>Settings</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>What is your daily step goal?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setStep(text)}
          value={step}
          onSubmitEditing={onStepChange}
          keyboardType={"default"}
          placeholder={step}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputText}>
          Your name is {name}, do you want to change it?
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
          value={name}
          onSubmitEditing={onNameChange}
          keyboardType={"default"}
          placeholder={name}
        />
      </View>
    </View>
  );
};
