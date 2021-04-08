import React, { useState } from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { useSaveUserInfo } from "../hooks/asyncStorage";

const RegisterContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #000;
`;
const RegisterTextInput = styled.TextInput`
  height: 40;
  margin: 12px;
  padding: 10px;
  border-width: 1;
  background: #fff;
  color: #000;
`;

const Submit = styled.Button``;

const GoBack = styled.TouchableOpacity`
  margin: 20px;
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
      <RegisterTextInput
        onChangeText={setfullName}
        value={fullName}
        placeholder="Add Full Name"
      />
      <RegisterTextInput
        onChangeText={setUserName}
        value={userName}
        placeholder="Add username"
      />
      <RegisterTextInput
        onChangeText={setPassword}
        value={password}
        placeholder="Add password"
      />
      <Submit title="Register" onPress={onSubmit} />
      <GoBack onPress={() => props.navigation.goBack()}>
        <Text style={{ color: "#fff" }}>Go Back</Text>
      </GoBack>
    </RegisterContainer>
  );
};
