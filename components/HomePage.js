import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View, Text, Button, StyleSheet, Pressable } from 'react-native'
import { Header } from './Header'
import { useNavigation } from '@react-navigation/native'
import { ShakeAPI } from './ShakeAPI'

const styles = StyleSheet.create({
  homeContainer: {
    width: '80%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    margin: '4%',
    padding: '3%',
    backgroundColor: '#f59084',
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
  },
  hidden: {
    display: 'none',
  },
  paragraph: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    margin: 15,
  },
})

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState('Home')

  return (
    <View style={styles.homeContainer}>
      <Text style={currentPage === 'Drinks' ? styles.hidden : styles.paragraph}>
        Welcome to
      </Text>
      <Header />
      <Text style={currentPage === 'Drinks' ? styles.hidden : styles.paragraph}>
        Find inspiration for your next cocktail party by shaking your phone!
      </Text>
      <View style={styles.buttonWrapper}>
        <Pressable
          style={currentPage === 'Home' ? styles.button : styles.hidden}
          onPress={() => setCurrentPage('Drinks')}
        >
          <Text style={styles.buttonText}> 🥂 Drinks</Text>
        </Pressable>
        <Pressable
          style={currentPage === 'Drinks' ? styles.button : styles.hidden}
          onPress={() => setCurrentPage('Home')}
        >
          <Text style={styles.buttonText}> 👈 Home</Text>
        </Pressable>
      </View>
      {currentPage === 'Drinks' && <ShakeAPI />}
    </View>
  )
}
