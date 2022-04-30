import React from "react"
import { Alert, Modal, StyleSheet, View, StatusBar } from "react-native"
import styled from 'styled-components/native'

import ShareButton from './ShareButton'
import OpenURLButton from './OpenURLButton'
import { PrimaryButton } from './Buttons'

import { Container } from '../styles/GlobalStyles'

//--------- Local styles ---------
const ModalContainer = styled(Container)`
  background-color: #e63946;
  justify-content: center;
`

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
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

const PictureContainer = styled.View`
  width: 330px;
  height: 330px;
`

const Picture = styled.Image`
  resize-mode: contain;
  height: 330px;
`

const SecondaryButtonsBox = styled.View`
  flex-direction: row;
`
//--------------------------------

const ModalComponent = ({
  tryAgainButtonText,
  catInfoURL,
  catBreed,
  tryAgain,
  modalVisible,
  setModalVisible,
  shareText,
  shareURL
}) => {

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.")
        setModalVisible(!modalVisible)
      }}>
      <StatusBar hidden />
      <ModalContainer>
        <View style={styles.modalView}>
          <PictureContainer>
            <Picture source={{ uri: shareURL }} />
          </PictureContainer>
          <SecondaryButtonsBox>
            <ShareButton shareURL={shareURL} shareText={shareText} />
            {catBreed !== undefined && <OpenURLButton url={catInfoURL} />}
          </SecondaryButtonsBox>
          <PrimaryButton
            onPress={tryAgain}
            primaryButtonText={tryAgainButtonText}
          />
        </View>
      </ModalContainer>
    </Modal>
  )
}

export default ModalComponent
