import React from 'react'
import { useState } from 'react';
import styled from 'styled-components/native'
import { View, Text, Picker, StyleSheet } from 'react-native';
import { ImageBackground } from "react-native";
import { StyledPicker } from './components/StyledPicker'
import SelectButton from './components/SelectButton';

// const api_key = "lByN5BPEwk9MR74phtPh0JpBBBBWyuVH";


Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
  text-align: center;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: '#efdbb3',
    padding: 12,
  }
});


export default function App() {
  const [selectedValue, setSelectedValue] = useState('penguin')
  return (
    <View style={styles.container}>
      <Title>Make someone happy</Title>
      <Title>and share a fun giphy!</Title>
      <StyledPicker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <StyledPicker.Item label='Racoon Giphy 🦝' value='racoon' />
        <StyledPicker.Item label='Dog Giphy 🐶' value='dog' />
        <StyledPicker.Item label='Unicorn Giphy 🦄' value='unicorn' />
        <StyledPicker.Item label='Party Giphy 🍾' value='party' />
      </StyledPicker>
      {/* <SelectButton /> */}
    </View>
  );
}


