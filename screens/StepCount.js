import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native'
import { Pedometer } from 'expo-sensors'



export const StepCount = () => {
  const [currentStepCount, setCurrentStepCount] = useState(0)
  const [number, onChangeNumber] = useState(null)
  // const [stepsLeft, setStepsLeft] = useState()

  let subscription

  const subscribe = () => {
    subscription = Pedometer.watchStepCount(result => {
      setCurrentStepCount(result.steps)
    })
  }

  const unsubscribe = () => {
    subscription && subscription.remove()
    subscription = null;
  }

  useEffect(() => {
    subscribe();
    return () => unsubscribe();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.quote}>All truly great thoughts are conceived while walking...</Text>
      <Text style={styles.pedometerHeading}>Set your goal for today</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Aim for health"
        keyboardType="numeric"
        returnKeyType='done'
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Set goal!</Text>
      </TouchableOpacity>
      <View style={styles.goal}>
        <Text style={styles.pedometerHeading}>Goal for today</Text>
        <Text style={styles.pedometerText}>{number}</Text>
      </View>
      <View style={styles.goal}>
        <Text style={styles.pedometerHeading}>Steps Taken</Text>
        <Text style={styles.pedometerText}>{currentStepCount}</Text>
      </View>
      <View style={styles.goal}>
        <Text style={styles.pedometerHeading}>Steps Left</Text>
        <Text style={styles.pedometerText}>{number - currentStepCount}</Text>
      </View>
    </SafeAreaView>
  )
}


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eee',
      },
      input: {
        borderColor: "#333333",
        padding: 16,
        borderWidth: 1,
        height: 56,
        marginBottom: 16,
        marginTop: 16,
        borderRadius: 8,
        minWidth: 343,
        textAlign: 'center',
        fontSize: 18,
      },
      button: {
        height: 56,
        backgroundColor: "#87AAAA",
        padding: 16,
        marginBottom: 32,
        borderRadius: 8,
        minWidth: 343,
      },
      buttonText: {
        fontSize: 18,
        color: '#333333',
        textAlign: 'center',
      },
      text: {
        fontSize: 24,
        color: '#333333',
      },
      pedometerText: {
        fontSize: 32,
        fontWeight: '700',
        marginTop: 8,
      },
      goal: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 32,
      },
      pedometerHeading: {
        fontSize: 18,
      },
      quote: {
        fontSize: 32,
        lineHeight: 36,
        fontWeight: '100',
        textAlign: 'center',
        marginBottom: 48,
        maxWidth: 343,
      }
    })
