import React, { useState } from 'react';
import { Text, Button, TextInput } from 'react-native';
import styled from 'styled-components/native';

const ProfileContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TextContainer = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  text-align: justify;
`

const Profile = ({ navigation }) => {

    const [name, setName] = useState ('')

    return (
        <ProfileContainer>
            <TextContainer>
                Name:
                <TextInput 
                    placeholder="Name"
                    onChangeText={(value) => setName(value)}
                />
            </TextContainer>
                <Button title="Submit" onPress={() => navigation.navigate("Overview", {name})} />

        </ProfileContainer>
    );
};

export default Profile

