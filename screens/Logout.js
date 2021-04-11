import React from 'react'
import { Button, Text } from 'react-native'
import styled from 'styled-components/native'

const LogoutContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const Logout = ({ navigation }) => {
  return (
    <LogoutContainer>
      <Text>Logged Out Successfully</Text>
      <Button
        title="Back to Home"
        color="orange"
        onPress={() => navigation.navigate('Home', { name: 'home' })}
      />
      <Button
        title="Toggle drawer"
        color="orange"
        onPress={() => navigation.toggleDrawer()}
      />
    </LogoutContainer>
  )
}
