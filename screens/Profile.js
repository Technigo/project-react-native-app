import React from 'react';
import { useState } from 'react'
import { View, Text, TextInput } from 'react-native';
import styled from 'styled-components/native';


export const Profile = () => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [social, setSocial] = useState('')
  return (
    <ProfileContainer>
      <Text>Your current profile</Text>
      <Text>Profile name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Social profile: {social}</Text>

      <Text>Enter your name:</Text>
      <TextInput 
        style={{borderWidth: "1px"}, {backgroundColor: "#7777"}, {padding: "8px"}, {margin: "10px"}}
        placeholder='e.g. John Doe'
        onChangeText={(val) => setName(val)}/>

      <Text>Enter your age:</Text>
      <TextInput 
        style={{borderWidth: "1px"}, {backgroundColor: "#7777"}, {padding: "8px"}, {margin: "10px"}}
        keyboardType='numeric'
        placeholder='e.g. 30'
        onChangeText={(val) => setAge(val)}/>

      <Text>Enter your age:</Text>
      <TextInput 
        style={{borderWidth: "1px"}, {backgroundColor: "#7777"}, {padding: "8px"}, {margin: "10px"}}
        placeholder='LinkedIn url'
        onChangeText={(val) => setSocial(val)}/>
    </ProfileContainer>
  );
};

// This is the main container for this screen
const ProfileContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
