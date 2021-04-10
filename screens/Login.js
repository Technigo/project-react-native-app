import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { loginUser } from "../hooks/asyncStorage";

const ticket = require("../assets/ticket.png");

const LoginContainer = styled.View`
  align-items: center;
  height: 100%;
  background: #000;
`;
const LoginTextInput = styled.TextInput`
  width: 70%;
  height: 40;
  margin: 12px;
  padding: 10px;
  border-width: 1;
  background: #fff;
  color: #000;
`;
const Submit = styled.TouchableOpacity`
  width: 70%;
  height: 40px;
  margin: 12px;
  color: #000;
  justify-content: center;
  align-items: center;
  background-color: #cc1d1d;
`;

const Signup = styled.TouchableOpacity`
  margin: 20px;
`;

const HeaderImage = styled.Image`
  height: 280px;
  width: 50%;
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
      <HeaderImage style={{ resizeMode: "contain" }} source={ticket} />
      {hasError && (
        <Text style={{ color: "#fff" }}>Please validate your credentials.</Text>
      )}
      <LoginTextInput
        autoCapitalize="none"
        onChangeText={setUserName}
        value={userName}
        placeholder="Add username"
      />
      <LoginTextInput
        autoCapitalize="none"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="Add password"
      />
      <Submit onPress={onSubmit}>
        <Text style={{ color: "#fff" }}>Login</Text>
      </Submit>
      <Signup onPress={() => props.navigation.navigate("register")}>
        <Text style={{ color: "#fff" }}>SignUp here</Text>
      </Signup>
    </LoginContainer>
  );
};
