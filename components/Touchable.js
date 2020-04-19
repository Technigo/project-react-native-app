import React, { useState } from 'react';
import { TouchableOpacity, } from 'react-native';
import styled from 'styled-components/native'

const StyledView = styled.View`
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: palevioletred;
`

const BigTitle = styled.Text`
  font-size: 50px;
  color: palevioletred;
`

const Title = styled.Text`
  font-size: 25px;
  color: palevioletred;
`

export const Touchable = () => {
  const [count, setCount] = useState(0);
  const onPress = () => setCount(prevCount => prevCount + 1);

  return (
    <StyledView>
        <BigTitle> {count}</BigTitle>
      <TouchableOpacity
        onPress={onPress}
      >
        <Title>Press Here</Title>
      </TouchableOpacity>
    </StyledView>
  );
};
