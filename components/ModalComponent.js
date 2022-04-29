import React, { useState, useEffect } from "react"
import { Alert, Modal, StyleSheet, Text, Pressable, Image, View, Button, SafeAreaView } from "react-native"

import styled from 'styled-components/native'
import OpenURLButton from './OpenURLButton'

import { Container, PrimaryButton, PrimaryButtonText } from '../styles/GlobalStyles'

import ShareButton from './ShareButton'



const ModalComponent = ({ tryAgainButtonText, catInfoURL, catBreed, startOver, modalVisible, setModalVisible, shareText, shareURL }) => {

  return (


    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.")
        setModalVisible(!modalVisible)
      }}
    >
      <ContainerModal>
        <View style={styles.modalView}>

          <ContainerImage>
            <CatImage source={{ uri: shareURL }} />
          </ContainerImage>
          <SecondaryButtonsContainer>
          <ShareButton shareURL={shareURL} shareText={shareText} />
          {catBreed !== undefined && <OpenURLButton url={catInfoURL}>{`More about ${catBreed}`}</OpenURLButton>}
          </SecondaryButtonsContainer>
          <PrimaryButton onPress={startOver}>
            <PrimaryButtonText>{tryAgainButtonText}</PrimaryButtonText>
          </PrimaryButton>

        </View>
      </ContainerModal>
    </Modal>
  )
}

const ContainerModal = styled(Container)`
background-color: #e63946;
    justify-content: center;
`

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-around",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 350
  }
})

const ContainerImage = styled.View`
  width: 330px;
  height: 330px;

`

const CatImage = styled.Image`
  resize-mode: contain;
  height: 330px;
`

const SecondaryButtonsContainer = styled.View`
  flex-direction: row;
`

export default ModalComponent