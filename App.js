import React, { useState } from 'react'
import styled from 'styled-components/native'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  }
});


const App = () => {
  const [count, setCount] = useState(0)
  const onPress = () => setCount(prevCount => prevCount + 1);


  return (
    <Container>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
        <Text>Press Here</Text>
      </TouchableOpacity>
      <Title>{count}</Title>
      <Title>💅💅💅</Title>
    </Container>
  )
}

export default App
