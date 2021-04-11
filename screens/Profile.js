import React from 'react'
import { Text, Button } from 'react-native'
import styled from 'styled-components/native'

import { Touchable } from '../components/Touchable'

// This is the main container for this screen
const ProfileContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Profile = ({ navigation }) => {
  return (
    <ProfileContainer>
      <Text>Profile Screen</Text>
      {/* Here is an example of how to open/toggle the drawer via javascript */}
      <Touchable btnText="Hejhej" onPress={() => navigation.openDrawer()} />
      <Touchable btnText="Hejhej" onPress={() => navigation.toggleDrawer()} />
    </ProfileContainer>
  )
}