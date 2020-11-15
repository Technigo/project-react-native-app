import React from 'react'
import { useState } from 'react'
import { Vibration } from 'react-native'
import * as Linking from 'expo-linking';
import styled from 'styled-components/native'

const TouchButton = styled.TouchableOpacity`
  padding: 25px;
  margin: 30px 10px 0;
  width: 250px;
  borderRadius: 25px;
  backgroundColor: #266150;
  border: none; 
`;

const ButtonText = styled.Text`
  textAlign: center;
  fontSize: 20px;
  justifyContent: center;
  alignItems: center;
  color: #FDF8F5;
`;

const Text = styled.Text`
  textAlign: center;
  fontSize: 20px;
  justifyContent: center;
  alignItems: center;
  margin: 30px 10px;
  color: #FDF8F5; 
`

const Name = styled.Text`
 padding: 0;
 margin: 0;
 textDecoration: underline;
 textDecorationColor: #FDF8F5;
`

const View = styled.View`
  justifyContent: center;
  alignItems: center;
  backgroundColor: #DDAF94;
  padding: 35px;
  flex: 1;
`

const Pasta = ({ itemArray }) => {
  const [item, setItem] = useState()

  const getPasta = () => {
    const item = itemArray[Math.floor(Math.random() * itemArray.length)]
    setItem(item)
  }

  return (
    <View>
      {item && <Text>
        Maybe you're in the mood for{"\n"}<Name onPress={() => Linking.openURL(item.url)}>{item.name}</Name>?
      </Text>}
      <TouchButton onPress={() => {
        getPasta(); Vibration.vibrate()
      }}>
        <ButtonText>What type of Pasta do you want today?</ButtonText>
      </TouchButton>
    </View>
  )
}

export default Pasta