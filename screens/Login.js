import React, { useState, useContext } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import { Input, Button } from "react-native-elements";
import { auth } from "../firebase";
import { signInAnonymously, updateProfile } from "firebase/auth";
import { AuthContext } from "./AuthProvider";

const { width, height } = Dimensions.get("screen");

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const { user, setUser } = useContext(AuthContext);
  const { userid, setUserid } = useContext(AuthContext);

  const signin = () => {
    signInAnonymously(auth, username)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: username,
        });
        setUser(username);
        setUserid(user.uid);
        // navigation.navigate("Home");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to The Chat</Text>
      <Input
        placeholder="Enter your username"
        labelName="Username:"
        value={username}
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize="none"
      />
      <Button
        title="Start chatting!"
        style={styles.loginButton}
        onPress={signin}
        disabled={username.length < 4}
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
});

export default Login;
