import React, { useState, useEffect } from "react"
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from "react-native"

import styled from "styled-components/native"
import { Accelerometer } from "expo-sensors"

import { MOVIE_URL } from "../utils/Urls"

//Styled components 🎨
const TitleText = styled.Text`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
`

const OverviewText = styled.Text`
  font-size: 14px;
  color: black;
  text-align: center;
  margin-bottom: 20px;
`

const RatingText = styled.Text`
  display: flex;
  justify-content: space-evenly;
  font-size: 18px;
  color: red;
  text-align: center;
`

const ReleasedText = styled.Text`
  font-size: 15px;
  text-align: center;
`

const Moviebackground = styled.ImageBackground`
  height: 312px;
  width: 312px;
`

export const ShakeMovieApi = () => {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  })
  const [movie, setMovie] = useState({})
  const [loading, setLoading] = useState(false)
  const [subscription, setSubscription] = useState(null)

  //Fetching the movie API and passing in the randomise function
  const generateMovie = () => {
    setLoading(true)
    fetch(MOVIE_URL(randomizedMovie()))
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .finally(() => setLoading(false))
  }

  //Mounting the fetch of movies
  useEffect(() => {
    generateMovie()
  }, [])

  //checking that if the device is shaking enough
  //it will call on generateMovie.
  useEffect(() => {
    if (isShaking(data)) {
      generateMovie()
    }
  }, [data])

  useEffect(() => {
    // reads how often the program should read the accelerometer data in milliseconds
    Accelerometer.setUpdateInterval(1000)
    //On subscribe initiates a "listening" when the sensor is active and stops listening when we unsobscribe.
    subscribe()
    return () => unsubscribe()
  }, [])

  const subscribe = () => {
    setSubscription(
      //This listens to when new data is recieved and is controlled by the setUpdateInterval
      Accelerometer.addListener((accelerometerData) => {
        setData(accelerometerData)
      })
    )
  }
  //stops listening to the accelerometer
  const unsubscribe = () => {
    subscription && subscription.remove()
    setSubscription(null)
  }

  //calculates and combines the force of the shaking in three dimentions
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
      <Moviebackground source={require("../assets/entertainment.png")} />
      <TitleText>
        {movie.original_title ? (
          <Text>{movie.original_title}</Text>
        ) : (
          <Text>Shake again!</Text>
        )}
      </TitleText>

      <OverviewText>
        {movie.overview && <Text>{movie.overview}</Text>}
      </OverviewText>

      <RatingText>
        {movie.vote_average ? (
          <Text> Rating: {movie.vote_average}</Text>
        ) : (
          <Text>No rating found</Text>
        )}
        <Text>
          {movie.release_date ? (
            <Text>Released {movie.release_date}</Text>
          ) : (
            <Text>no release found</Text>
          )}
        </Text>
      </RatingText>
    </View>
  )
}
