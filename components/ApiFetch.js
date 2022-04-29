import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Share } from 'react-native'

const ApiFetch = () => {
  const [quote, setQuote] = useState({})

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Shared wisdom: ${quote.en} by ${quote.author}`,
        title: 'a quote'
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

  const generateQuote = () => {
    fetch('https://programming-quotes-api.herokuapp.com/quotes/random')
      .then((res) => res.json())
      .then((data) => setQuote(data))
  }

  useEffect(() => {
    generateQuote()
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.quoteText}>"{quote.en}"</Text>
      <Text style={styles.author}>{quote.author}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={generateQuote}>
          <Text style={styles.buttonText}>MORE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={onShare}>
          <Text style={styles.buttonText}>SHARE</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ApiFetch

const styles = StyleSheet.create({
  quoteText: {
    fontSize: 25,
    color: '#56858f',
    fontFamily: 'Palatino-BoldItalic',
    lineHeight: 29,
    marginBottom: 20,
    alignItems: 'center'
  },
  author: {
    color: 'black',
    marginBottom: 30,
    fontFamily: 'Optima-Bold',
    fontSize: 16,
    alignItems: 'flex-start'
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#598e9c',
    alignItems: 'center',
    fontFamily: 'Optima-Bold',
    padding: 9,
    borderRadius: 4,
    marginRight: 30,
    width: 90
  },
  buttonText: {
    color: 'white',
    fontSize: 12
  }
})
