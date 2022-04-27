import React, { useState, useEffect } from "react"
import { Alert, Modal, StyleSheet, Text, Pressable, Image, View, Button, SafeAreaView, TextInput } from "react-native"

import styled from 'styled-components/native'


import ShareButton from './ShareButton'



const ModalComponent = ({startOver, modalVisible, setModalVisible, shareTitle, shareText, shareURL}) => {


  // const startOver = () => {
  //   setCatMemeURL('')
  //   setMemeAction('')
  //   setMemeText('Too lazy to make a meme...')
  //   setMemeColor('sienna')
  //   setModalVisible(!modalVisible)
  // }

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
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <ContainerImage>
                <CatImage source={{ uri: shareURL }} />
              </ContainerImage>
              <ShareButton shareURL={shareURL} shareText={shareText} shareTitle={shareTitle} />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={startOver}
              >
                <Text style={styles.textStyle}>Start over!</Text>
              </Pressable>

            </View>
          </View>
        </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: 350
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "red",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
})

const ContainerImage = styled.View`
  width: 330px;
  height: 330px;

`

const CatImage = styled.Image`
  resize-mode: contain;
  height: 330px;
`

const Container = styled.View`
	flex: 1;
	/* background-color: papayawhip; */
	justify-content: center;
	align-items: center;
`

const Title = styled.Text`
	font-size: 24px;
	color: black;
`



export default ModalComponent