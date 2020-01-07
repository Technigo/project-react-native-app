import React, { useState, useEffect } from "react"
import styled from "styled-components/native"
import { DeviceMotion } from "expo-sensors"

const songs = [
  "AC/DC - Thunderstruck",
  "Katy Perry - Last Friday Night",
  "The Killers - Mr. Brightside",
  "Taylor Swift - Shake it off",
  "Billie Eilish - Bad Guy",
  "Sam Cooke - Wonderful World",
  "Frank Sinatra - My way",
  "The Beatles - Hey Jude",
  "Madonna - Like a Virgin",
  "Abba - Dancing Queen",
  "Avicii - Wake up",
  "Imagine Dragons - Thunder",
  "George Ezra - Budapest",
  "Counting Crows - Accidentally in Love", 
  ""
]

const App = () => {
  const [song, setSong] = useState()

  const showRandomSong = () => {
    console.log("bytt")
    const randomIndex = Math.round(Math.random() * (songs.length - 1))
    setSong(songs[randomIndex])
  }

  return (
    <Container>
      <Image resizeMode='contain' source={require("./assets/note.png")} />
      <Title>
        {song ||
          "No idea what to listen today? Press the magic music button and get your daily song!"}
      </Title>
      {/* <Subtitle>Spin your phone to get a song!</Subtitle> */}
      <Button onPress={showRandomSong}>
        <H1>Magic music button</H1>
      </Button>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: purple;
  justify-content: center;
  align-items: center;
`

const Image = styled.Image`
  height: 330;
  margin-bottom: 70;
`

const Title = styled.Text`
  font-size: 21px;
  color: white;
  margin-bottom: 20;
  text-align: center;
  padding: 0 15px;
`

const Button = styled.TouchableOpacity`
  background-color: pink;
  border-radius: 50;
  text-align: center;
  padding: 10px 20px;
  margin-top: 30;
`

const H1 = styled.Text`
  font-size: 20px;
  color: white;
  padding: 10px 50px;
  text-align: center;
`

export default App
