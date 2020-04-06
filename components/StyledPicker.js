import React from 'react'
import { useState } from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

const StyledPicker = styled.Picker`
  padding: 8px;
  color: #9839f7;
  height: 60px;
`

export const GiphyChoice = () => {
  const [selectedValue, setSelectedValue] = useState('racoon')
  return (

    <StyledPicker selectedValue={selectedValue}
      onValueChange={(itemValue) => setSelectedValue(itemValue)}>
      <StyledPicker.Item label='Racoon Giphy 🦝' value='racoon' />
      <StyledPicker.Item label='Dog Giphy 🐶' value='dog' />
      <StyledPicker.Item label='Unicorn Giphy 🦄' value='unicorn' />
      <StyledPicker.Item label='Party Giphy 🍾' value='party' />
    </StyledPicker>


  );
}



