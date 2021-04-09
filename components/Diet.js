import React from 'react';
import styled from "styled-components/native"
import { RadioButton } from 'react-native-paper';

const ChoiceView = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`
const StyledTouchable = styled.TouchableOpacity`  
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin: 0 10px;
`
const Label = styled.Text`
  font-size: 16px;
`

const Diet = ({ diets, chooseDiet, checkedDiet }) => {
  return (
    <ChoiceView>
      {diets.map(diet => (
        <StyledTouchable
          key={diet}
          onPress={() => chooseDiet(diet)}
        >
          <Label>{diet}</Label>
          <RadioButton
            color="#ff5447"
            key={diet}
            value={diet}
            status={checkedDiet === diet ? 'checked' : 'unchecked'}
            onPress={() => chooseDiet(diet)}
          />
        </StyledTouchable>
      ))}
    </ChoiceView>
  )
}

export default Diet