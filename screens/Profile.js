import React from "react";
import { View, Text } from "react-native";
import styled from "styled-components/native";
import { logoutUser } from "../hooks/asyncStorage";

// This is the main container for this screen
const ProfileContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: #000;
`;

const Logout = styled.TouchableOpacity`
  margin: 20px;
`;

export const Profile = (props) => {
  const onLogout = async () => {
    await logoutUser();
    await props.route.params.recall();
  };
  return (
    <ProfileContainer>
      <Logout onPress={onLogout}>
        <Text style={{ color: "#fff" }}>Logout</Text>
      </Logout>
      <Text>Profile Screen</Text>
    </ProfileContainer>
  );
};
