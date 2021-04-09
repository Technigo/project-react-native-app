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
        < StyledTouchable
          key={dish.name}
          onPress={() => chooseDish(dish.name)}
        >
          <Icon source={dish.icon} alt={dish.name} />
          <RadioButton
            color="#ff5447"
            value={dish.name}
            status={checkedDish === dish.name ? 'checked' : 'unchecked'}
            onPress={() => chooseDish(dish.name)}
          />
        </StyledTouchable>
      ))
      }
    </ChoiceView >
  )
}

export default Dish