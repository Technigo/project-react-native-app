import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create ({
    note: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FFA012',
      padding: 20,
      marginTop: 20,      
    }
  })
  
export const SubTitleTemp = () => {
    const [note, setNote] = useState('Ask your YES or NO question, then shake the Oracle and it will speak to you')

    useEffect(() => {
        setTimeout (() => {setNote('')}, 5000)
      }, [])
    
      return (
        <View>
          <Text style={styles.note}>{note}</Text>
        </View>
      )
}