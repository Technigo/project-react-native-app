import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native';
import { View, Text, StyleSheet, Button } from 'react-native'
import { Accelerometer } from 'expo-sensors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },
	text: {
	  color: "white",
	  fontSize: 20,
	  fontWeight: "bold",
	  textAlign: "center",
	  backgroundColor: "#000000c0"
	},
  ButtonContainer: {
    flex: 1,
  }
  })


const answers = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes - definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again"
  ]

const ShakeAnswer = () => {

    const [answer, setAnswer] = useState("")

    const [data, setData] = useState({
        x: 0,
        y: 0,
        z: 0,
      })

      const [subscription, setSubscription] = useState(null);
    
    
      const _subscribe = () => {
        setSubscription(
          Accelerometer.addListener(accelerometerData => {
            setData(accelerometerData);
          })
        )
      }
    
      const _unsubscribe = () => {
        subscription && subscription.remove();
        setSubscription(null);
      };
    
      useEffect(() => {
        _subscribe();
        return () => _unsubscribe();
      }, []);
    
      const isShaking = (data) => {
          const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)
          return totalForce > 2.5
      }


      useEffect(() => {
          if(isShaking(data)){
            const index = Math.floor(Math.random() * answers.length)
            setTimeout(() => setAnswer(answers[index]), 1000)
          }
      })

      const Refresh = () => {
        setAnswer('')
      }

    return(
        <View style={styles.container}>
            <Text style={styles.text}>{answer}</Text>
            <View style= {{height: 100}}></View>
              <Button title="Restart" color='black'onPress={() => Refresh()} />
        </View>
    )
}

// button color: color="#010464"
export default ShakeAnswer
