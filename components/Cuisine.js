import React from 'react';
import styled from "styled-components/native"
import { Picker } from '@react-native-picker/picker';

const ChoiceView = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`

const StyledPicker = styled.Picker`
  width: 90%;
  padding: 10px;
  margin: 10px 0 20px;
`

const Cuisine = ({ cuisine, cuisineQuery, chooseCuisine }) => {
  return (
    <ChoiceView>
      <StyledPicker
        selectedValue={cuisineQuery}
        onValueChange={(itemValue) => chooseCuisine(itemValue)}
      >
        <Picker.Item
          label="Pick a cuisine!"
          value=""
        />
        {cuisine.map(eachCuisine => (
          <Picker.Item
            key={eachCuisine}
            label={eachCuisine}
            value={eachCuisine} />
        ))}
      </StyledPicker>
    </ChoiceView>
  )
}

export default Cuisine