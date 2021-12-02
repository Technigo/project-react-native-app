import * as React from "react"
import {
  Text,
  View,
  StyleSheet,
  Image,
  Modal,
  Alert,
  Pressable,
} from "react-native"
import { useState, useEffect } from "react"

import Shake from "./Shake"

const ModalInput = props => {
  const [modalVisible, setModalVisible] = useState(false)
  //   console.log(props.press)
  //   console.log("props.answer", props.answer)

  useEffect(() => {
    setModalVisible(props.press)
  }, [])

  return (
    <View style={styles.centeredView}>
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
          {props.answer ? (
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Right guess!</Text>
            </View>
          ) : (
            <View style={styles.modalView2}>
              <Text style={styles.modalText}>Wrong guess!</Text>
            </View>
          )}

          {/* <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => <>{setModalVisible(!modalVisible)}</>}
          >
            <Text style={styles.textStyle}>Next one</Text>
          </Pressable> */}
          {setModalVisible && (
            <>
              <Shake press={false} />
            </>
          )}
        </View>
      </Modal>
    </View>
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
    backgroundColor: "green",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },

  modalView2: {
    margin: 20,
    backgroundColor: "red",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
})

export default ModalInput
