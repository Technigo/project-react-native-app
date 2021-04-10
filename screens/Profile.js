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
            <Text>Profile bla</Text>
            <TextInput 
                placeholder="Heinrich"
                onChangeText={(value) => setName(value)}
            />
            <Button title="Your Profile" onPress={() => navigation.navigate("Overview", {name})} />
        </ProfileContainer>
    );
};

export default Profile