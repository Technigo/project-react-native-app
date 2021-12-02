import React, { Component, useEffect, useState } from "react"
import styled from "styled-components/native"

import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native"

import ModalInput from "./ModalInput"
import Shake from "./Shake"

const Container = styled.View`
  display: flex;
  flex-direction: column;

  min-width: 375px;
  height: 80%;
  align-items: center;
`

const ImgContainer = styled.View`
  background-color: #f6f6f6;
  width: 150;
  height: 150;
  border-radius: 200;
`

const ImgPokemon = styled.Image`
  height: 100%;
  width: 100%;
`

const AnswerButtonContainer = styled.View`
  height: 100;
  width: 320;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
`

const AnswerButton = styled.TouchableOpacity`
  background-color: #6d9886;
  min-width: 120;
  margin: 2px;
  border-radius: 2px;
  text-align: center;
  padding: 10px;
`
const ButtonText = styled.Text`
  font-size: 16px;
  text-align: center;
`

const Data = () => {
  const [pokemon, setPokemon] = useState({})
  const [pokemonArray, setPokemonArray] = useState([])
  const [answer, setAnswer] = useState(null)

  const resetPokemonArray = () => {
    // setPokemonArray((pokemonArray.length = 0))
    pokemonArray.length = 0
    console.log("pokemonArray in reset", pokemonArray)
    fetchAllData()
    setAnswer(null)
  }

  const checkIfRightPokemon = chosenPokemon => {
    // console.log("answer", answer)
    // console.log("chosen", chosenPokemon)
    // console.log("pokemon", pokemon.name)
    if (chosenPokemon === pokemon.name) {
      // console.log("JEJ")
      setAnswer(true)
    } else {
      // console.log("nooo")
      setAnswer(false)
    }
    // console.log("answer2", answer)
  }

  useEffect(() => {
    fetchAllData()
  }, [])

  const fetchAllData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/?limit=100&offset=100"`)
      .then(res => res.json())
      .then(pokemons => {
        const NoOfPokemons = 4

        for (let i = 0; i < NoOfPokemons; i++) {
          pokemonArray.push(
            pokemons.results[
              Math.floor(Math.random() * pokemons.results.length)
            ]
          )
        }
        const randomPokemon =
          pokemonArray[Math.floor(Math.random() * pokemonArray.length)]
        // console.log("chosen pokemon", randomPokemon)
        fetchData(randomPokemon)
      })
  }

  const fetchData = secretPokemon => {
    // console.log("fetchData randomPokemon.url", secretPokemon.url)
    fetch(`${secretPokemon.url}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data)
        // console.log("i cant use useState", data)

        // console.log("This is secret pokemon", secretPokemon)
        // console.log("This is everys array pokemon", pokemonArray)
      })
  }

  return (
    <>
      {/* {console.log("answer")} */}
      <Container>
        {/* {console.log("pokemonArray in return", pokemonArray)}
        {console.log("pokemon in return", pokemon.sprites)} */}
        {pokemon.sprites !== undefined && (
          <>
            <ImgContainer>
              <ImgPokemon
                source={{
                  uri: pokemon.sprites.front_default,
                }}
              />
            </ImgContainer>
            {/* {console.log("answer2 in return", answer)} */}

            <AnswerButtonContainer>
              {pokemonArray.map((wrongPokemon, index) => (
                <AnswerButton
                  key={index}
                  onPress={() => {
                    checkIfRightPokemon(wrongPokemon.name)
                  }}
                >
                  <ButtonText>{wrongPokemon.name.toUpperCase()}</ButtonText>
                </AnswerButton>
              ))}
            </AnswerButtonContainer>
          </>
        )}

        <Button
          color="#212121"
          title="Catch a pokemon"
          onPress={() => {
            resetPokemonArray()
          }}
        />
      </Container>
      {answer !== null && (
        <>
          <ModalInput press={true} answer={answer} />
        </>
      )}
    </>
  )
}

// {resetPokemonArray()}

export default Data
