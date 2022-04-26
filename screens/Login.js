import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Input, Button } from "react-native-elements";
import { Title } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "./AuthProvider";

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, setUser } = useContext(AuthContext);

  const openSignupScreen = () => {
    navigation.navigate("Signup");
  };

  const signin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(email);
        // navigation.navigate("Home");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to The Chat</Text>
      <Input
        placeholder="Enter your email"
        labelName="Email"
        // leftIcon={{ type: "material", name: "email" }}
        value={email}
        style={styles.input}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
      />
      <Input
        placeholder="Enter your password"
        labelName="Password"
        // leftIcon={{ type: "material", name: "lock" }}
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
        // onPress={signin}
        style={styles.input}
      />
      <Button title="Login" style={styles.loginButton} onPress={signin} />
      <Button
        title="New user? Join here!"
        style={styles.signupButton}
        onPress={openSignupScreen}
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
  input: {
    marginTop: 10,
    marginBottom: 10,
    width: width / 2,
    height: height / 15,
  },
  loginButton: {
    width: width / 1.5,
    height: height / 15,
    marginTop: 10,
  },
  signupButton: {
    width: width / 1.5,
    height: height / 15,
    marginTop: 10,
  },
});

export default Login;
