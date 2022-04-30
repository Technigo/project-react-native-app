import React, { useCallback } from "react"
import { Alert, Linking } from "react-native"

import { SecondaryButton } from './Buttons'

const OpenURLButton = ({ url }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      await Linking.openURL(url)
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`)
    }
  }, [url])

  return (
    <SecondaryButton onPress={handlePress} secondaryButtonText="More..." />
  )
}

export default OpenURLButton
