import React, { useCallback } from "react"
import { Alert, Text, Linking, StyleSheet, View } from "react-native"

import styled from 'styled-components/native'


import { SecondaryButton, SecondaryButtonText } from '../styles/GlobalStyles'


const OpenURLButton = ({ url }) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url)

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url)
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`)
    }
  }, [url])

  return (
  <SecondaryButton onPress={handlePress}>
    <SecondaryButtonText>More...</SecondaryButtonText>
  </SecondaryButton>
  )
}

export default OpenURLButton