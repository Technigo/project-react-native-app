import React from 'react'
import styled from 'styled-components/native'

const HeaderText = styled.Text`
  color: #FFF;
  font-weight: bold;
  font-size: 25px;
  text-align: center;
  font-family: futura;
  margin-top: 40px;
`

const Header = () => {
  
  return (
    <HeaderText>ASK A QUESTION AND SHAKE THE MAGIC 8-BALL</HeaderText>
  )
}

export default Header
