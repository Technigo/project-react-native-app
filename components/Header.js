import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useFonts, Modak_400Regular } from '@expo-google-fonts/modak'
import AppLoading from 'expo-app-loading'

//Installed google font and expo-app-loading and made an if else
//so that my content is not rendered until it can show my selected font
export const Header = () => {
  let [fontsLoaded] = useFonts({
    Modak_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    const styles = StyleSheet.create({
      headerTitle: {
        color: '#fff',
        fontSize: 40,
        fontWeight: '800',
        fontFamily: 'Modak_400Regular',
      },
      headerSpan: {
        fontSize: 25,
        color: '#eedf8b',
      },
    })
    return (
      <Text style={styles.headerTitle}>
        Shake<Text style={styles.headerSpan}>to</Text>Make
      </Text>
    )
  }
}
