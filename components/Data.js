import React, { Component, useState } from "react"

import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from "react-native"
import { withTheme } from "styled-components/native"

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

  const fetchData = randomPokemon => {
    console.log("fetchData randomPokemon.url", randomPokemon.url)
    fetch(`${randomPokemon.url}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data)
      })
  }

  //   if (pokemon.sprites === undefined) return <p>hej </p>

  return (
    <>
      <View style={styles.Container}>
        {pokemon.sprites !== undefined && (
          <>
            <View style={styles.ImgContainer}>
              <Image
                style={styles.Pokemon}
                source={{
                  uri: pokemon.sprites.front_default,
                }}
              />

              <View style={styles.AnswerButtonContainer}>
                {" "}
                <TouchableOpacity style={styles.AnswerButton}>
                  {pokemon.name.toUpperCase()}
                </TouchableOpacity>
                {wrongPokemons.map(wrongPokemon => (
                  <TouchableOpacity style={styles.AnswerButton}>
                    {wrongPokemon}
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </>
        )}
        <Button
          color="palevioletred"
          style={styles.Button}
          title="Catch a pokemon"
          onPress={() => {
            resetWrongPokemons()
          }}
        />
      </View>
    </>
  )
}

export default Data

const styles = StyleSheet.create({
  Container: {},

  AnswerButtonContainer: {
    backgroundColor: "red",
    height: 200,
  },

  AnswerButton: {
    backgroundColor: "palevioletred",
    border: 1,
  },

  ImgContainer: {
    backgroundColor: "black",
    width: 200,
    justifyContent: "center",
  },

  Pokemon: {
    backgroundColor: "black",
    height: 200,
  },

  P: {
    color: "white",
  },

  Button: {},
})
