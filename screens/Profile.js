import React from 'react';
import { useState } from 'react'
import { View, Text, Button, TextInput } from 'react-native';
import styled from 'styled-components/native';


export const Profile = ({ navigation }) => {
  const [name, setName] = useState()
  const [age, setAge] = useState()
  const [nickname, setNickName] = useState()



  return (
    <>
      <ProfileContainer>
        <View style={{ padding: 10,alignItems: 'center', justifyContent: 'center' }}>
        <Button 
          onPress={() => navigation.goBack()} 
          title="Back to Welcome screen" 
        />
        </View>

        <Text style={{fontWeight: '800'}}>Current profile</Text>
        <StyledText>Profile name: {name} </StyledText>
        <StyledText>Age: {age} </StyledText>
        <StyledText>Nickname: {nickname} </StyledText>
      </ProfileContainer>

      <SignUpContainer>
        <Text style={{fontWeight: '800'}}>Sign up for this service</Text>
          <TextInput
            style={{
              backgroundColor: '#e5e5e5',
              borderWidth: '1px',
              borderColor: '#023047',
              width: '50vw',
              padding: '8px',
              margin: '10px'
            }}
            placeholder='Your name, e.g. John Doe'
            onChangeText={(val) => setName(val)}
          />

          <TextInput
            style={{
              backgroundColor: '#e5e5e5',
              borderWidth: '1px',
              borderColor: '#023047',
              width: '50vw',
              padding: '8px',
              margin: '10px'
            }}
            placeholder='Your age, e.g. 30'
            onChangeText={(val) => setAge(val)}
          />

          <TextInput
            style={{
              backgroundColor: '#e5e5e5',
              borderWidth: '1px',
              borderColor: '#023047',
              width: '50vw',
              padding: '8px',
              margin: '10px'
            }}
            placeholder='What should we call you?'
            onChangeText={(val) => setNickName(val)}
          />
      </SignUpContainer>
    </>
  );
};


const ProfileContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #8ECAE6;
`;
const StyledText = styled.Text`
  font-weight: 600;
  color: #023047;
  margin: 4px;
`;
const SignUpContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: #219EBC;
  padding: 20px;
`;






/* tried to make use of this, worked with import from home but couldn't figure out to setParam 
const { otherParam } = route.params
<StyledText>name: {JSON.stringify(otherParam.name)} </StyledText>
<StyledText>Age: {JSON.stringify(otherParam.age)} </StyledText>
<StyledText>Nickname: {JSON.stringify(otherParam.nickname)} </StyledText> */