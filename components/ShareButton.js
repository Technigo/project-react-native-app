import React from 'react'
import { Share } from 'react-native'

import { SecondaryButton } from './Buttons'

const ShareButton = ({ shareURL, shareText }) => {

  const onShare = async () => {

    try {
      const result = await Share.share({
        message: shareText,
        url: shareURL,
        title: shareURL
      })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <SecondaryButton onPress={onShare} secondaryButtonText="Share" />
  )
}

export default ShareButton
