import React, { useState } from "react"
import styled from "styled-components/native"
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Pressable,
} from "react-native"
import { useFonts, ubuntu_400Regular } from "@expo-google-fonts/ubuntu"
import Data from "./components/Data"
import AppLoading from "./components/AppLoading"
import Start from "./components/Start"

const Container = styled.View`
  flex: 1;
  /* font-family: "unbuntu_400Regular"; */
  justify-content: center;
  align-items: center;
`

// const image = {require("../assets/stripes.jpg") }

const App = () => {
  // const [currentTab, setCurrentTab] = useState("Shake")
  // const [fontsLoaded] = useFonts({
  //   ubuntu_400Regular,
  // })
  // if (!fontsLoaded) {
  //   return <AppLoading />
  // }
  const [currentPage, setCurrentPage] = useState("start")

  return (
    <>
      <View style={styles.container}>
        {/* <Text style={{ fontFamily: "unbuntu_400Regular" }}>mycket fint</Text> */}
        <ImageBackground
          source={require("./assets/stripes.png")}
          resizeMode="cover"
          style={styles.image}
        >
          {/* <Pressable
            style={styles.button}
            onPress={() => setCurrentPage("data")}
          >
            <Text style={styles.text}>Start game!</Text>
          </Pressable> */}
          {/* {currentPage === "data" && <Data />} */}
          <Data />
        </ImageBackground>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },

  button: {},
})

export default App

{
  /* <Container>




<Data />
</Container> */
}
