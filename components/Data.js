import React, { Component, useState } from "react"
import styled from "styled-components/native"

import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native"
import { withTheme } from "styled-components/native"

const Container = styled.View`
  display: flex;
  flex-direction: column;
  /* background-color: blue; */
  min-width: 375px;
  height: 80vh;
  align-items: center;
`

const ImgContainer = styled.View`
  background-color: #f6f6f6;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 20px 0;
`

const ImgPokemon = styled.Image`
  height: 100%;
  width: 100%;
`

const AnswerButtonContainer = styled.View`
  height: 100px;
  width: 320px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px 0;
`

const AnswerButton = styled.TouchableOpacity`
  background-color: #6d9886;
  min-width: 140px;

  margin: 0 2px;
  border-radius: 2px;
  text-align: center;
  padding: 10px;
`

const Data = () => {
  const [pokemon, setPokemon] = useState({})
  const [wrongPokemons, setWrongPokemons] = useState([])

  const resetWrongPokemons = () => {
    // setWrongPokemons(wrongPokemons)

    wrongPokemons.length = 0
    console.log("wrongpokemons in reset", wrongPokemons)
    fetchAllData()
  }

  const fetchAllData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100&offset=100"`)
      .then(res => res.json())
      .then(pokemons => {
        // console.log("All pokemons", pokemons)
        const randomNumber =
          pokemons.results[Math.floor(Math.random() * pokemons.results.length)]
        // console.log("random no", randomNumber)
        fetchData(randomNumber)

        // console.log("before if", wrongPokemons)
        const NoOfWrongPokemon = 3
        for (let i = 0; i < NoOfWrongPokemon; i++) {
          wrongPokemons.push(
            pokemons.results[
              Math.floor(Math.random() * pokemons.results.length)
            ].name.toUpperCase()
          )
        }
        setWrongPokemons(wrongPokemons)
        console.log("This is the array", wrongPokemons)
      })
  }

  const fetchData = secretPokemon => {
    console.log("fetchData randomPokemon.url", secretPokemon.url)
    fetch(`${secretPokemon.url}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data)
        console.log("This is secret pokemon", secretPokemon.name)
      })
  }

  //   if (pokemon.sprites === undefined) return <p>hej </p>

  return (
    <>
      <Container>
        {pokemon.sprites !== undefined && (
          <>
            <ImgContainer>
              <ImgPokemon
                source={{
                  uri: pokemon.sprites.front_default,
                }}
              />
            </ImgContainer>
            <AnswerButtonContainer>
              {" "}
              <AnswerButton>{pokemon.name.toUpperCase()}</AnswerButton>
              {wrongPokemons.map(wrongPokemon => (
                <AnswerButton>{wrongPokemon}</AnswerButton>
              ))}
            </AnswerButtonContainer>
          </>
        )}
        <Button
          color="#212121"
          title="Catch a pokemon"
          onPress={() => {
            resetWrongPokemons()
          }}
        />
      </Container>
    </>
  )
}

export default Data

// const styles = StyleSheet.create({
//   Container: {},

//   AnswerButtonContainer: {
//     backgroundColor: "red",
//     height: 200,
//   },

//   AnswerButton: {
//     backgroundColor: "palevioletred",
//     border: 1,
//   },

//   ImgContainer: {
//     backgroundColor: "black",
//     width: 200,
//     justifyContent: "center",
//   },

//   Pokemon: {
//     backgroundColor: "black",
//     height: 200,
//   },

//   P: {
//     color: "white",
//   },

//   Button: {},
// })
