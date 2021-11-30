import React from 'react'
import styled from 'styled-components/native'

const HeaderContainer = styled.View`
  padding: 40px;
  border: 1px solid black;
`

const Title = styled.Text`
  font-size: 70px;
  color: whitesmoke;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Title> WOW ITS WORKING </Title>
    </HeaderContainer>
  )
}

export default Header
