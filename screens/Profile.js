import React, { useState } from 'react';
import { Text, Button, TextInput } from 'react-native';
import styled from 'styled-components/native';

const ProfileContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Profile = ({ navigation }) => {

    const [name, setName] = useState ('')

    return (
        <ProfileContainer>
            <Text>So what's your name, stranger?</Text>
            <TextInput 
                placeholder="Name"
                onChangeText={(value) => setName(value)}
            />
            <Button title="Don't click" onPress={() => navigation.navigate("Overview", {name})} />
        </ProfileContainer>
    );
};

export default Profile