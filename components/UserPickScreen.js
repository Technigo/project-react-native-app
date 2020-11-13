import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Button, TouchableOpacity, Text } from "react-native";

const InfoText = styled.Text`
  font-size: 48px;
`;

const InfoContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
`;

const UserPickScreen = ({ navigation }) => {
  const [userPick, setUserPick] = useState('');
  const navigateToResult = () => {
    navigation.navigate("Result")
  }
  console.log(userPick)
  return (
    <InfoContainer>
      <InfoText> Infooo!</InfoText>
      <TouchableOpacity onPress={() => setUserPick('rock')}>
        <Text>Press here</Text>
      </TouchableOpacity>


      <Button title="Result" onPress={navigateToResult} ></Button>
    </InfoContainer>

  )
    
  
}

export default UserPickScreen;