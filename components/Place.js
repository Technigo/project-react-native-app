import React from 'react';
import { Text } from 'react-native'

import styled from 'styled-components/native'

const Location = styled.Text`
  color: white;
  font-size: 35px;
`

export const Place = () => {
  return (
    <Location>Elysium Planitia</Location>
  )
}