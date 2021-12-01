import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native"

import styled from "styled-components/native"
import { Accelerometer } from "expo-sensors"

import { MOVIE_URL } from "../utils/Urls"

const TitleText = styled.Text`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
`

const OverviewText = styled.Text`
  font-size: 18px;
  color: black;
  text-align: center;
  margin-bottom: 20px;
`

const RatingText = styled.Text`
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: red;
  text-align: center;
`

const ReleasedText = styled.Text`
  font-size: 15px;
  text-align: center;
`

export const ShakeApi = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(false)
  const [subscription, setSubscription] = useState(null)

  const generateMovie = () => {
    setLoading(true)
    fetch(MOVIE_URL(randomizedMovie()))
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    generateMovie()
  }, [])

  useEffect(() => {
    if (isShaking(data)) {
      generateMovie()
    }
  }, [data])

  useEffect(() => {
    Accelerometer.setUpdateInterval(1000)
    subscribe()
    return () => unsubscribe()
  }, [])

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData)
      })
    )
  }

  const unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  const isShaking = (data) => {
    const totalForce = Math.abs(data.x) + Math.abs(data.y) + Math.abs(data.z)

    return totalForce > 1.78
  }

  // Function that gets a random number from the complete list of movies.
  const randomizedMovie = () => {
    const min = Math.ceil(1)
    const max = Math.floor(907331)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  if (loading) {
    return <ActivityIndicator />
  }

  const { x, y, z } = data

  return (
    <View>
      <TitleText>{movie.original_title}</TitleText>

      {movie.overview && <OverviewText>{movie.overview}</OverviewText>}

      <RatingText>
        {movie.vote_average ? (
          <Text> Rating {movie.vote_average}</Text>
        ) : (
          <Text>No rating found </Text>
        )}{" "}
        <Text>Released: {movie.release_date}</Text>
      </RatingText>
    </View>
  )
}
