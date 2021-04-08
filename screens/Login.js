import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { loginUser } from "../hooks/asyncStorage";

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
  background: #fff;
  color: #000;
`;
const Submit = styled.Button``;

const Signup = styled.TouchableOpacity`
  margin: 20px;
`;

export const Login = (props) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);

  const onSubmit = async () => {
    const userInfo = {
      userName,
      password,
    };
    const loginSuccess = await loginUser(userInfo);

    if (loginSuccess) {
      await props.route.params.recall();
    } else {
      setHasError(true);
    }
  };

  return (
    <LoginContainer>
      {hasError && (
        <Text style={{ color: "#fff" }}>Please validate your credentials.</Text>
      )}
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
      <Submit title="Login" onPress={onSubmit} />
      <Signup onPress={() => props.navigation.navigate("register")}>
        <Text style={{ color: "#fff" }}>SignUp here</Text>
      </Signup>
    </LoginContainer>
  );
};
