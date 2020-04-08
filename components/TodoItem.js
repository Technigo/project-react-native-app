import React from 'react'
import styled from 'styled-components/native'

export const TodoItem = ({ index, item, pressHandler }) => {

  const Item = styled.TouchableOpacity``
  const ItemText = styled.Text`
  padding: 20px;
  background-color: ${index(item) % 2 === 0 ? '#f8b400' : '#e3a500'};
`

  return (
    <Item onPress={() => pressHandler(item.key)}>
      <ItemText>{item.text}</ItemText>
    </Item>
  )
}
