import React, { useState } from 'react'
import styled from 'styled-components/native'
import { Button, TouchableOpacity, Text, View, StyleSheet, Alert } from "react-native";
import AccelComponent from "./components/AccelComponent.js"
import GyroComponent from "./components/GyroComponent.js"
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo'


const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 40px;
  font-family: 'Introspect-Bk';
  color: white;
`

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});


const App = () => {
  const [count, setCount] = useState(0)
  const onPress = () => setCount(prevCount => prevCount + 1);

  let [fontLoaded] = useFonts({
    'Introspect-Bk': require('./assets/fonts/Introspect-Bk.otf'),
  })

  if (!fontLoaded) {
    return <AppLoading />
  } else {
    return (
      <Container>
        <GyroComponent />
        <AccelComponent />
        <Title>{count}</Title>

        <TouchableOpacity
          style={styles.button}
          onPress={onPress}
        >
          <Text>Press Here</Text>
        </TouchableOpacity>

      </Container>
    )
  }
}
export default App
