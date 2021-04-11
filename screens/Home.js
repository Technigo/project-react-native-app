import React from 'react'
import {
  ImageBackground,
  Text,
  Button,
  StyleSheet,
  View,
  TextInput,
} from 'react-native'
import styled from 'styled-components/native'

const image = {
  uri:
    'https://images.unsplash.com/photo-1615224572756-729e7d1cd942?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=934&q=80',
}

const HomeContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vw;
`

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#123490',
    backgroundColor: 'white',
  },
})

export const Home = ({ navigation }) => {
  return (
    <ImageBackground source={image} style={{ flex: 1 }}>
      <HomeContainer>
        <Text>Sign in</Text>
        <View>
          <TextInput style={styles.input} placeholder="Your username" />
          <TextInput style={styles.input} placeholder="Your email" />
        </View>
        <Button
          title="Login"
          color="orange"
          onPress={() => navigation.navigate('Profile', { name: 'profile' })}
        />
        <Button
          title="Toggle drawer"
          color="orange"
          onPress={() => navigation.toggleDrawer()}
        />
      </HomeContainer>
    </ImageBackground>
  )
}
