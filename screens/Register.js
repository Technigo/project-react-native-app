import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { useSaveUserInfo } from "../hooks/asyncStorage";

const popcorn = require("../assets/popcorn.png");

const RegisterContainer = styled.View`
  align-items: center;
  height: 100%;
  background: #000;
`;
const RegisterTextInput = styled.TextInput`
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

const GoBack = styled.TouchableOpacity`
  margin: 20px;
`;

const HeaderImage = styled.Image`
  height: 280px;
  width: 50%;
`;

export const Register = (props) => {
  const [fullName, setfullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { storeData } = useSaveUserInfo();

  const onSubmit = async () => {
    const userInfo = {
      fullName,
      userName,
      password,
    };
    await storeData(userInfo);
    await props.route.params.recall();
  };

  //console.log(props);

  return (
    <RegisterContainer>
      <HeaderImage style={{ resizeMode: "contain" }} source={popcorn} />
      <RegisterTextInput
        onChangeText={setfullName}
        value={fullName}
        placeholder="Add Full Name"
      />
      <RegisterTextInput
        autoCapitalize="none"
        onChangeText={setUserName}
        value={userName}
        placeholder="Add username"
      />
      <RegisterTextInput
        autoCapitalize="none"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
        placeholder="Add password"
      />
      <Submit onPress={onSubmit}>
        <Text style={{ color: "#fff" }}>Register</Text>
      </Submit>
      <GoBack onPress={() => props.navigation.goBack()}>
        <Text style={{ color: "#fff" }}>Go Back</Text>
      </GoBack>
    </RegisterContainer>
  );
};
