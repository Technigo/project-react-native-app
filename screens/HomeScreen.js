import React from 'react'
import { View, Text, Linking, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Roll a Dice!</Text>
      <Text style={styles.text}>
        Choose between Fun Chores or Boring Numbers
      </Text>
      <FontAwesome5 name='hand-point-up' size={80} color='#006600' />
      <Text style={styles.footer}>
        &#169; by{' '}
        <Text
          style={styles.link}
          onPress={() =>
            Linking.openURL('https://www.linkedin.com/in/katie-wu-213a82150/')
          }
        >
          Katie Wu
        </Text>
        &nbsp;| Team Foxes 🦊 | Technigo
      </Text>
    </View>
  )
}

// = StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: '#006600',
    fontSize: 40,
  },
  text: {
    color: '#006600',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  footer: {
    marginTop: 40,
  },
  link: {
    color: '#F4A442',
    fontWeight: 'bold',
  },
})

export default HomeScreen
