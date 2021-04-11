import React from 'react'
import styled from 'styled-components/native'

const HeaderContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #443a70;
`

const TextContainer = styled.Text`
  color: white;
`

const Header = () => {
  return (
    <HeaderContainer>
      <TextContainer>HEADER</TextContainer>
    </HeaderContainer>
  )
}

export default Header











