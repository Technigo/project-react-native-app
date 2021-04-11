import React from 'react';
import { View, Text, Button } from 'react-native';
import styled from 'styled-components/native';
import UserInput from '../components/UserInput';


export const Profile = ({ route, navigation }) => {
  const { otherParam } = route.params
  return (
    <>
      <ProfileContainer>
        <View style={{ padding: 10,alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Back to Welcome screen" />
    </View>
        <Text style={{fontWeight: '800'}}>Current profile</Text>
        <StyledText>Profile name: {JSON.stringify(otherParam.name)} </StyledText>
        <StyledText>Age: {JSON.stringify(otherParam.age)} </StyledText>
        <StyledText>Social profile: {JSON.stringify(otherParam.nickname)} </StyledText>
      </ProfileContainer>
      <SignUpContainer>
        <Text style={{fontWeight: '800'}}>Sign up for this service</Text>
        <UserInput />
      </SignUpContainer>
    </>
  );
};


// This is the main container for this screen
const ProfileContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #8ECAE6;
`;
const StyledText = styled.Text`
  font-weight: 600;
  color: #023047;
`;
const SignUpContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #219EBC;
  padding: 20px;
`;
