import React from 'react'
import styled from 'styled-components/native'

const View = styled.View`
  backgroundColor: #FDF8F5;
  colour: #4F4846;
  padding: 30px;
`

const Text = styled.Text`

`

const Header = () => {
  return (
    <View>
      <Text>Endless Pasta-bilities</Text>
    </View>
  )
}

export default Header;

