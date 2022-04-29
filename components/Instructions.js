import React, { useState, useEffect } from "react"
import { Alert, Modal, StyleSheet, Text, Pressable, Image, View, Button, SafeAreaView } from "react-native"

import styled from 'styled-components/native'
import OpenURLButton from './OpenURLButton'

import { Container, PrimaryButton, PrimaryButtonText } from '../styles/GlobalStyles'

import ShareButton from './ShareButton'



const Instructions = ({ instructionsText }) => {

  return (

        // <View style={styles.modalView}>
<InstructionsContainer>
          <InstructionsText>{instructionsText}</InstructionsText>
          </InstructionsContainer>
        // </View>
  )
}

const InstructionsText = styled.Text`
  color: #fff;
  text-align: justify;
  font-size: 16px;
`

const InstructionsContainer = styled.View`
  margin: 20px;
  background-color: #1d3557;
  border-radius: 20px;
  padding: 20px;
  align-items: center;
  justify-content: space-around;

`

// const styles = StyleSheet.create({
//   modalView: {
//     margin: 20,
//     backgroundColor: "#1d3557",
//     borderRadius: 20,
//     padding: 35,
//     alignItems: "center",
//     justifyContent: "space-around",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     width: 275
//   }
// })

export default Instructions