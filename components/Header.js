import React from 'react'
/* import { View } from 'react-native' */
import styled from 'styled-components/native'

const Heading = styled.Text`
color: white;
font-size: 25px;
font-family: 'Helvetica';
font-weight: bold;
margin: 25px 0 25px 0;
`

const Header = () => {

  return (
    <Heading>
      POPULAR MOVIES
    </Heading>
  )

}
export default Header