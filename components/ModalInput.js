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

const ModalInput = props => {
  const [modalVisible, setModalVisible] = useState(false)
  //   console.log(props.press)
  //   console.log("props.answer", props.answer)

  useEffect(() => {
    setModalVisible(props.press)
  }, [])

  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          {props.answer ? (
            <View style={styles.modalView}>
              <Text style={styles.modalText}>That was correct, good job!</Text>
              <Text style={styles.modalTextStrong}>
                This is {props.rightPokemon.toUpperCase()}!
              </Text>
              <Text style={styles.modalTextShake}>Shake for next question</Text>
              <Image
                style={styles.image}
                source={require("../assets/shake.png")}
              />
            </View>
          ) : (
            <View style={styles.modalView2}>
              <Text style={styles.modalText}>Oh no, that was wrong!</Text>
              <Text style={styles.modalTextStrong}>
                The right answer is {props.rightPokemon.toUpperCase()}!
              </Text>
              <Text style={styles.modalTextShake}>Shake for next question</Text>
              <Image
                style={styles.image}
                source={require("../assets/shake.png")}
              />
            </View>
          )}
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 400,
  },
  modalView: {
    margin: 20,
    minHeight: 230,
    width: 310,
    backgroundColor: "yellowgreen",
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

  modalText: {
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },

  modalTextStrong: {
    marginBottom: 15,
    textAlign: "center",
  },

  modalTextShake: {
    marginBottom: 15,
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },

  modalView2: {
    margin: 20,
    minHeight: 230,
    width: 310,
    backgroundColor: "#FD3A69",
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

  image: {
    width: 50,
    height: 50,
  },
})

export default ModalInput
