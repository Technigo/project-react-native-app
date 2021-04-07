import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const LoginContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #000;
`;
const LoginTextInput = styled.TextInput`
  height: 40;
  margin: 12px;
  padding: 10px;
  border-width: 1;
  background: #ffff;
  color: #000;
`;
const Submit = styled.Button``;

const Signup = styled.TouchableOpacity`
  margin: 20px;
`;

export const Login = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginContainer>
      <LoginTextInput
        onChangeText={setUserName}
        value={userName}
        placeholder="Add username"
      />
      <LoginTextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Add password"
      />
      <Submit title="Login" onPress={() => null} />
      <Signup onPress={() => navigation.navigate("register")}>
        <Text style={{ color: "#fff" }}>SignUp here</Text>
      </Signup>
    </LoginContainer>
  );
};
