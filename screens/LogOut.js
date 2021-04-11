import React from 'react'
import { Button, View, Text } from 'react-native'
import styled from 'styled-components/native'

import { Touchable } from '../components/Touchable'

// This is the main container for this screen
const LogOutContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const LogOut = ({ navigation }) => {
  return (
    <LogOutContainer>
      <Text>Log Out Screen</Text>
      <Touchable btnText="Hejhej" onPress={() => navigation.openDrawer()} />
      <Touchable btnText="Hejhej" onPress={() => navigation.toggleDrawer()} />
    </LogOutContainer>
  )
}