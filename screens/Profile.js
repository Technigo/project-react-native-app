import React from 'react'
import { Text, Button } from 'react-native'
import styled from 'styled-components/native'

const ProfileContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

export const Profile = ({ navigation }) => {
  return (
    <ProfileContainer>
      <Text>Profile Page</Text>
      <Button
        title="Logout"
        color="orange"
        onPress={() => navigation.navigate('Logout', { name: 'logout' })}
      />
      <Button
        title="Toggle drawer"
        color="orange"
        onPress={() => navigation.toggleDrawer()}
      />
    </ProfileContainer>
  )
}
