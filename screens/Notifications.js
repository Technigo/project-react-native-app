import React from 'react'
import { Avatar } from 'react-native-elements'

export const Notifications = ({ navigation: {goBack} }) => {
  return (
    <>
    <Avatar
          size="large"
          rounded
          icon={{name: 'home', type: 'font-awesome'}}
          onPress={ () => goBack()} 
        />
    </>
  )
}