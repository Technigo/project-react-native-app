import React, {useEffect, useState} from 'react'; 
import {View} from 'react-native';
import styled from 'styled-components/native';

const OracleText = styled.Text`
  padding: 30px;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: #f2f0f0;
`
const MagicImage = styled.Image`
  width: 200px;
  height: 200px;
  margin-left: 75px;
`
const ButtonText = styled.Text`
  font-size: 30px;
  color: #f2f0f0;
`

const RestartButton = styled.TouchableOpacity`
  background-color: #e076c3;
  border-radius: 10px;
  padding:20px;
  margin-top: 70px
` 


export const OracleMessage = ({onRestartOracle}) => { 

  const [message, setMessage] = useState({});

  useEffect (()=> { 
    fetch('https://api.adviceslip.com/advice')
      .then (response => response.json())
      .then ((json) => { 
        setMessage(json.slip) 
      });
  },[]);

  return (
    <>
      <View>
      <OracleText>{message.advice}</OracleText>
      <MagicImage
        source={require('../assets/magic.png')}
      />
      </View>
      <RestartButton onPress={onRestartOracle}>
          <ButtonText>Restart Oracle</ButtonText>
      </RestartButton>
    </>
  );
};