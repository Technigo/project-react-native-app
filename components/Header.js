import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

const Headline = styled.Text `
  font-size: 36px;
  padding: 10px;
  margin: 10px;
`

export const Header = () => {
  return (
    <View>
      <Headline>My To-Do List</Headline>
    </View>
  );
};

