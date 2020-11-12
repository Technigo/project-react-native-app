import React from 'react'
import styled from 'styled-components/native'

const BB8 = styled.Image`
  width: 60px;
  height: 60px;
`

export const Animation = () => {
  return(
  <BB8 source={require('../assets/bb8_animation.gif')}/>
  )
}