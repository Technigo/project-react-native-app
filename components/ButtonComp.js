import React, {useState} from 'react';
import { Button, View, Text } from 'react-native';
import styled from 'styled-components/native';

const ButtonStyle = styled.Button`
  align-items: center;
  background-color: #ffffff;
  color: #f194ff;
`

const ButtonComp = () => {
  const [count, setCount] = useState(0);
  const PlayGame = () => {
    console.log('Lets play');
    setCount(count + 1)
  };

  return (
    <View>
      <Text>count: {count}</Text>
      <ButtonStyle
        title="Start to play"
        color="#f194ff"
        backgroundColor= '#f194ff'
        onPress={PlayGame}
      ></ButtonStyle>

    </View>
    
  )
}

export default ButtonComp;