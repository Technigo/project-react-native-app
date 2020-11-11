import React from 'react'
import styled from 'styled-components/native'
import { Share } from 'react-native'

const Button = styled.Button`
  font-size: 12px;
  color: #fff5a5;
  background-color: red;
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
        } else {
          alert('You successfully shared the image!')
        }
      } else if (result.action === Share.dismissedAction) {
        alert('Please try again! Image was not shared.')
      }
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <Button 
      onPress={onShare} 
      title="Share" 
    />
  )
}