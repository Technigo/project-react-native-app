import React from 'react'
import styled from 'styled-components/native'
import { Share } from 'react-native'

import ShareIcon from './assets/share.png'

const TouchableOpacity = styled.TouchableOpacity`
  padding: 10px;
`

const Icon = styled.Image`
  width: 35px;
  height: 35px;
`

export const ShareButton = ({url}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Hey! Look at this cute cat.',
        url: url,
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          alert('You successfully shared the image!')
        } 
      } else if (result.action === Share.dismissedAction) {
        alert('Image was not shared. Please try again.')
      }
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <TouchableOpacity onPress={onShare}>
      <Icon
        source={ShareIcon}
      />
    </TouchableOpacity> 
  )
}