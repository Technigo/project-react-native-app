import React from 'react'
import { Share, View, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

import { SecondaryButton, SecondaryButtonText } from '../styles/GlobalStyles'

const ShareButton = ({ shareURL, shareText }) => {

const onShare = async () => {

  try {
    const result = await Share.share({
      message: shareText,
      url: shareURL,
      title: shareURL
    })
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message)
  }
}

  return (
    <SecondaryButton onPress={onShare}>
      <SecondaryButtonText>Share</SecondaryButtonText>
    </SecondaryButton>
  )
}

export default ShareButton

