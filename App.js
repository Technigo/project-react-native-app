import React, { useState, useEffect } from "react"
import styled from "styled-components/native"
import { Linking } from 'react-native';

const defaultImage = require("./assets/note.png")
const acdc = require("./assets/acdc.png")
const abba = require("./assets/abba.png")
const avicii = require("./assets/avicci.png")
const billie = require("./assets/billie.png")
const despacito = require("./assets/despa.png")
const thor = require("./assets/galaxy.png")
const katy = require("./assets/katy.png")
const killers = require("./assets/killers.png")
const sexy = require("./assets/lmfao.png")
const love = require("./assets/love.png")
const jude = require("./assets/one.png")
const sam = require("./assets/sam.png")
const taylor = require("./assets/taylor.png")
const dragons = require("./assets/thunder.png")
const woodkid = require("./assets/woodkid.png")
const zombie = require("./assets/zombie.png")

const songs = [
  {
    title: "Katy Perry - Last Friday Night",
    link: "https://open.spotify.com/track/455AfCsOhhLPRc68sE01D8?si=BpJ2QJHuQNC96DtYYPyVzw",
    img: katy, 
  },
  {
    title: "The Killers - Mr. Brightside",
    link: "https://open.spotify.com/track/7d8GetOsjbxYnlo6Y9e5Kw?si=5CYoFh8nRiCWhJt12nrz2g",
    img: killers, 
  },
  {
    title: "Taylor Swift - Shake it off",
    link: "https://open.spotify.com/track/0cqRj7pUJDkTCEsJkx8snD?si=-ojkPj2CQtm9BIrkQX_O-w",
    img: taylor, 
  },
  {
    title: "Billie Eilish - Bad Guy",
    link: "https://open.spotify.com/track/2Fxmhks0bxGSBdJ92vM42m?si=fgFS9DBZRIah6HmVRoZBOw",
    img: billie, 
  },
  {
    title: "Sam Cooke - Wonderful World",
    link: "https://open.spotify.com/track/5Fih0qlqrBjPIE0dFamuBr?si=gfSbMn9kTpm63Zinu1TubA",
    img: sam, 
  },
  {
    title: "The Beatles - Hey Jude",
    link: "https://open.spotify.com/track/1eT2CjXwFXNx6oY5ydvzKU?si=h5SSm4WxQeuTnpT-3uPiVQ",
    img: jude, 
  },
  {
    title: "Abba - Dancing Queen",
    link: "https://open.spotify.com/track/0GjEhVFGZW8afUYGChu3Rr?si=8DBj1xgeS6K-eiHoOnX0NA",
    img: abba, 
  },
  {
    title: "Avicii - Wake me up",
    link: "https://open.spotify.com/track/6g1NlCpW7fgqDnWbCCDrHl?si=eakJSZmfQHGU7fPyqvXTCg",
    img: avicii, 
  },
  {
    title: "Imagine Dragons - Thunder",
    link: "https://open.spotify.com/track/1zB4vmk8tFRmM9UULNzbLB?si=tvA7XEXVRfu6U8mnHuafYA",
    img: dragons, 
  },
  {
    title: "Thorsteinn Einarsson - Galaxy",
    link: "https://open.spotify.com/track/2qZNc3C2ZzobXwvLkJMhGy?si=ja98PzT7Sm-nAJjlSH8RXg",
    img: thor, 
  },
  {
    title: "Counting Crows - Accidentally in Love",
    link: "https://open.spotify.com/track/7FQSD5JjWqGtS1BaQQiT6V?si=aaOVJhdiT5yHLHj1WdDuqg",
    img: love, 
  },
  {
    title: "LMFAO - Sexy and I know it",
    link: "https://open.spotify.com/track/70Vdd1gx5tn84jkAU31ASv?si=cSn9xHB3RHi16_TTJ28UUQ",
    img: sexy, 
  },
  {
    title: "Woodkid - Run boy run",
    link: "https://open.spotify.com/track/0boS4e6uXwp3zAvz1mLxZS?si=blOoeg9WRM2Nb1RJK3n5-w",
    img: woodkid, 
  },
  {
    title: "AC/DC - Thunderstruck",
    link: "https://open.spotify.com/track/57bgtoPSgt236HzfBOd8kj?si=7lg-nTsrSmmOf_FVsJlYQw",
    img: acdc, 
  },
  {
    title: "Luis Fonsi - Despacito",
    link: "https://open.spotify.com/track/6habFhsOp2NvshLv26DqMb?si=hITPsHxRTcKtYdulXvoVVg",
    img: despacito, 
  },
  {
    title: "Jamie T - Zombie",
    link: "https://open.spotify.com/track/22eNdxGb4tEvBt0nBCp52o?si=AbMsT4DfRZqBXJ7WpAOz5A",
    img: zombie, 
  },
  ""
] 

const App = () => {
  const [song, setSong] = useState()

  const showRandomSong = () => {
    /* console.log("bytt") */
    const randomIndex = Math.round(Math.random() * (songs.length - 1))
    setSong(songs[randomIndex])
  } 

  const image = song && song.img || defaultImage

  return (
    <Container>
      <Image resizeMode='contain' source={image} />
      <Title 
      onPress={() => Linking.openURL(song && song.link)}>
        {song && song.title ||
          "No idea what to listen today? Press the magic music button and get your daily song!"}
      </Title>

      <Button onPress={showRandomSong}>
        <H1>Magic music button</H1>
      </Button>
    </Container>
  )
}

const Container = styled.View`
  flex: 1;
  background-color: black;
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
  font-size: 22px;
  color: grey;
  padding: 10px 50px;
  text-align: center;
` 

export default App
