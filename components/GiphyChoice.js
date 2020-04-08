import React from 'react'
import styled from 'styled-components/native';

const StyledPicker = styled.Picker`
  padding: 12px;
  color: #9839f7;
  height: 200px;
  font-size:36px;
`

export const GiphyChoice = ({ selectedValue, setSelectedValue }) => {

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

