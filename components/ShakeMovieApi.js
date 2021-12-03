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

const HeadTitle = styled.Text`
  font-weight: 700;
  font-size: 22px;
  color: #000;
  text-align: center;
  margin-top: 20%;
`

const TitleText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: 700;
  margin-bottom: 40px;
  text-align: center;
`

const OverviewText = styled.Text`
  font-size: 16px;
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`

const RatingText = styled.Text`
  display: flex;
  font-size: 14px;
  color: #fff;
  text-align: center;
`

const MovieContainer = styled.View`
  align-items: center;
  background-color: #edb506;
  width: 100%;
  height: 100%;
`

const ShakeImage = styled.Image`
  margin-top: 10px;
  width: 50px;
  height: 50px;
  margin-bottom: 20%;
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

  //Fetching the movie API and passing in the randomise function it also filters only movies with adult value false
  const generateMovie = () => {
    setLoading(true)
    fetch(MOVIE_URL(randomizedMovie()))
      .then((res) => res.json())
      .then((data) => {
        if (data.adult === false) {
          setMovie(data)
        }
      })
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

  const { x, y, z } = data

  // Function that gets a random number from the complete list of movies.
  const randomizedMovie = (max, min) => {
    return Math.random() * (907331 - 1) + 1
  }

  if (loading) {
    return <ActivityIndicator />
  }
  return (
    <MovieContainer>
      <HeadTitle>Shake me for a movie suggestion!</HeadTitle>
      <ShakeImage source={require("../assets/shake.png")} />
      <TitleText>
        {movie.original_title ? (
          <Text>{movie.original_title}</Text>
        ) : (
          <Text>Something went wrong, Shake again!</Text>
        )}
      </TitleText>

      <OverviewText>
        {movie.overview ? (
          <Text>{movie.overview}</Text>
        ) : (
          <Text>We couldn't find an overview of this movie</Text>
        )}
      </OverviewText>

      <RatingText>
        {movie.vote_average ? (
          <Text> Rating: {movie.vote_average}</Text>
        ) : (
          <Text>No rating found</Text>
        )}
      </RatingText>
    </MovieContainer>
  )
}
