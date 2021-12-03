import React, { Component, useEffect, useState } from "react"
import styled from "styled-components/native"
import { Accelerometer } from "expo-sensors"

import {
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native"

import ModalInput from "./ModalInput"
import AppLoading from "./AppLoading"

const Container = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 375px;
  height: 100%;
  align-items: center;
  margin-bottom: 20px;
`

const TitleContainer = styled.View`
  width: 450px;
  background-color: rgba(0, 0, 0, 0.5);
  align-items: center;
  margin-top: 30px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  /* box-shadow: 2px 2px 2px #fff338; */
`
const Title = styled.Text`
  font-size: 28px;
  color: #212121;
  margin-top: 20px;
  margin-bottom: 10px;
  color: white;
  font-weight: 700;
`
const CounterText = styled.Text`
  /* color: white; */
  font-size: 20px;
  background-color: white;
  padding: 5px;
`
const HightlighText = styled.Text`
  color: #fff338;
`

const ImgContainer = styled.View`
  background-color: #f6f6f6;
  width: 230px;
  height: 230px;
  border-radius: 200px;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px #000;
`

const ImgPokemon = styled.Image`
  height: 60%;
  width: 60%;
`

const AnswerButtonContainer = styled.View`
  width: 320px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
`

const AnswerButton = styled.TouchableOpacity`
  background-color: #000009;
  border-color: #fff338;
  border-width: 3px;
  min-width: 140px;
  margin: 2px;
  border-radius: 3px;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 25px;
`
const ButtonText = styled.Text`
  font-size: 14px;
  text-align: center;
  color: white;
`

const RestartButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-color: #fff338;
  border-width: 3px;
  width: 290px;
  margin-top: 0px;
  margin-bottom: 10px;
  border-radius: 3px;
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
`

const RestartText = styled.Text`
  font-size: 14px;
  text-align: center;
`

//  * * * * * *  SHAKE DATA PART  * * * * ** * * *

const Data = () => {
  const [shakeData, setShakeData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
  const [subscription, setSubscription] = useState(null)
  const { x, y, z } = shakeData

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000)
    subscribe()
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (isShakingEnough(shakeData) && answer !== null) {
      resetPokemonArray()
    }
  }, [shakeData])

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setShakeData(accelerometerData)
      })
    )
  }

  const unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  const isShakingEnough = () => {
    const totalForce =
      Math.abs(shakeData.x) + Math.abs(shakeData.y) + Math.abs(shakeData.z)
    return totalForce > 2.38
  }

  //  * * * * * *  POKEMON PART  * * * * ** * * *
  const [pokemon, setPokemon] = useState({})
  const [pokemonArray, setPokemonArray] = useState([])
  const [answer, setAnswer] = useState(null)
  const [counter, setCounter] = useState(0)
  const [rightAnswerCounter, setRightAnswerCounter] = useState(0)
  const [loading, setLoading] = useState(false)

  const resetPokemonArray = () => {
    // setPokemonArray((pokemonArray.length = 0))
    pokemonArray.length = 0
    fetchAllData()
    setAnswer(null)
  }

  const resetApp = () => {
    pokemonArray.length = 0
    setAnswer(null)
    setCounter(0)
    setRightAnswerCounter(0)
    fetchAllData()
  }

  const checkIfRightPokemon = chosenPokemon => {
    if (chosenPokemon === pokemon.name) {
      setAnswer(true)
      setRightAnswerCounter(rightAnswerCounter => rightAnswerCounter + 1)
    } else {
      setAnswer(false)
    }
    setCounter(counter => counter + 1)
  }

  useEffect(() => {
    resetPokemonArray()
  }, [])

  const fetchAllData = () => {
    setLoading(true)
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
        fetchData(randomPokemon)
      })
      .finally(() => setLoading(false))
  }

  const fetchData = secretPokemon => {
    fetch(`${secretPokemon.url}`)
      .then(res => res.json())
      .then(data => {
        setPokemon(data)
      })
  }

  return (
    <>
      {loading ? (
        <AppLoading />
      ) : (
        <>
          <Container>
            <TitleContainer>
              <Title>
                {" "}
                Which <HightlighText>pokemon</HightlighText> is this ?
              </Title>
              <CounterText>
                {rightAnswerCounter} out of {counter}
              </CounterText>
            </TitleContainer>
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

            <RestartButton>
              <RestartText
                onPress={() => {
                  resetApp()
                }}
              >
                Start over
              </RestartText>
            </RestartButton>
          </Container>
          {answer !== null && (
            <>
              <ModalInput
                press={true}
                answer={answer}
                rightPokemon={pokemon.name}
              />
            </>
          )}
        </>
      )}
    </>
  )
}

export default Data
