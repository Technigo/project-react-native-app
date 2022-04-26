import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { IconButton } from "react-native-paper";

import { auth } from "../firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const { width, height } = Dimensions.get("screen");

const Signup = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const register = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Registered
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoURL: avatar
            ? avatar
            : "https://gravatar.com/avatar/94d45dbdba988afacf30d916e7aaad69?s=200&d=mp&r=x",
        })
          .then(() => {
            alert("Registered, please login.");
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register to chat!</Text>
      <Input
        placeholder="Enter your display name"
        label="Display name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Input
        placeholder="Enter your email"
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Input
        placeholder="Enter your password"
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Input
        placeholder="Enter your image url"
        label="Profile Picture"
        value={avatar}
        onChangeText={(text) => setAvatar(text)}
      />
      <Button title="SIGNUP" onPress={register} style={styles.button} />
      <IconButton
        icon="keyboard-backspace"
        size={30}
        style={styles.navButton}
        color="#6646ee"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
  },
  button: {
    width: width / 1.5,
    height: height / 15,
    marginTop: 10,
  },
  navButton: {
    marginTop: 10,
  },
});

export default Signup;
