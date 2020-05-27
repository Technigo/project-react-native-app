import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'


// Styled components

const MovieDetails = styled.View`
  color: white;
  background-color: white;
  padding: 1.5em;
  margin: 1em auto 1em;
  border-radius: 6px 6px;
`

const Label = styled.Text`
  font-size: 24px;
  color: palevioletred;
  margin-bottom: 1em;
`
const MovieTitle = styled.Text`
  font-size: 24px;
  color: darkgrey;
  margin: .5em 1em;
`
const MovieDesc = styled.Text`
  font-size: 18px;
  color: darkgrey;
  margin: .5em 1em;
`

const MovieRate = styled.Text`
  font-size: 18px;
  color: palevioletred;
  margin: 0 1em 1em 1em;
  font-weight: bold;
`

const MovieRelease = styled.Text`
  font-size: 18px;
  color: palevioletred;
  margin: 1em;
`
const InfoDiv = styled.View`
  display: flex;
  flexDirection: column;
`
const TextDiv = styled.View`
  display: flex;
  flexShrink: 1
  flexDirection: column;
`

export const Details = ({ route }) => {
  const { movie } = route.params
    return (
      <MovieDetails>
        <Label>{movie.title}</Label>
          <InfoDiv>
            <img src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt={movie.title} />
            <TextDiv>
              <MovieRelease>Released {movie.release_date}</MovieRelease>
              <MovieRate>Rating: {movie.vote_average}</MovieRate>
              <MovieDesc>{movie.overview}</MovieDesc>
            </TextDiv>
          </InfoDiv>  
      </MovieDetails>
   );
  }


