import React from 'react'
import styled from 'styled-components/native'

const View = styled.View`
  backgroundColor: #FDF8F5;
  color: #4F4846;
  padding: 60px 30px 30px 30px;
  margin: 0;
  width: 100%;
`

const Text = styled.Text`
  fontSize: 22px;
  fontWeight: bold; 
  textAlign: center;
`

const Header = () => {
  return (
    <View>
      <Text>Endless Pasta-bilities</Text>
    </View>
  )
}

export default Header;

