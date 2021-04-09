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
const Icon = styled.Image`
  width: 50px;
  height: 50px;
  margin: 0 10px;
`

const Dish = ({ dishes, chooseDish, checkedDish }) => {
  return (
    <ChoiceView>
      {dishes.map(dish => (
        <StyledTouchable
          key={dish}
          onPress={() => chooseDish(dish)}
        >
          <Icon source={require(`../assets/dishes/${dish}.png`)} alt={dish} />
          <RadioButton
            color="#ff5447"
            value={dish}
            status={checkedDish === dish ? 'checked' : 'unchecked'}
            onPress={() => chooseDish(dish)}
          />
        </StyledTouchable>
      ))}
    </ChoiceView>
  )
}

export default Dish