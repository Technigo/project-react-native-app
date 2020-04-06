import React from 'react'
import styled from 'styled-components/native'

const Item = styled.TouchableOpacity``
const ItemText = styled.Text`
  margin-top: 10px;
  padding: 20px;
  background-color: #f8b400;
`

export const TodoItem = ({ item, pressHandler }) => {
  return (
    <Item onPress={() => pressHandler(item.key)}>
      <ItemText>{item.text}</ItemText>
    </Item>
  )
}
