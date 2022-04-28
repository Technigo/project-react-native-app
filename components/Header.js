import React, { useEffect } from 'react'
import styled from 'styled-components/native';
import { View, StyleSheet, Text } from 'react-native'

const Header = () => {

  return(
    <View style={styles.container}>
    <Text style={styles.header}>
    <Text style={styles.headOne}>
    Randomly Funny / 
    </Text>
    <Text style={styles.headTwo}>
      Try not to laugh
    </Text>
    </Text>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
  width: 375,
  height: 120,
  marginTop: 40,
  
  display: 'flex',
  flexDirection: 'column',

  backgroundColor: 'yellow',
  width: 375,
},
header: {
  fontFamily: 'GillSans-SemiBold',
  fontSize: 40,
  paddingLeft: 20,
},
headTwo: {
  fontFamily: 'Optima-Italic',
  fontSize: 37,
}
})

export default Header