import 'react-native-gesture-handler'
import React, { useState, useEffect } from 'react'
import { View, ScrollView, Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'


// Styled components

const MovieDetails = styled.View`
  color: white;
  backgroundColor: white;
  padding: 15px;
  marginTop: 15px;
  marginRight: auto;
  marginLeft: auto;
  marginBottom: 15px;
  borderRadius: 6px;
`

const Label = styled.Text`
  fontSize: 24px;
  color: palevioletred;
  marginBottom: 15px;
`
const MovieTitle = styled.Text`
  fontSize: 24px;
  color: darkgrey;
  marginTop: 5px;
  marginRight: 15px;
  marginLeft: 15px;
  marginBottom: 5px;
`
const MovieDesc = styled.Text`
  fontSize: 18px;
  color: darkgrey;
  marginTop: 5px;
  marginRight: 15px;
  marginLeft: 15px;
  marginBottom: 5px;
`
const MovieImage = styled.Image`
  width: 100%;
  margin: auto;
  height: 500px;
`

const MovieRate = styled.Text`
  fontSize: 18px;
  color: palevioletred;
  marginTop: 0;
  marginRight: 5px;
  marginLeft: 5px;
  marginBottom: 5px;
  fontWeight: bold;
`

const MovieRelease = styled.Text`
  fontSize: 18px;
  color: palevioletred;
  margin: 15px;
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
      <ScrollView>
        <MovieDetails>
          <Label>{movie.title}</Label>
            <InfoDiv>
              <MovieImage
                source={{
                uri: `https://image.tmdb.org/t/p/w342${movie.poster_path}`,
                }}
              />
              <TextDiv>
                <MovieRelease>Released {movie.release_date}</MovieRelease>
                <MovieRate>Rating: {movie.vote_average}</MovieRate>
                <MovieDesc>{movie.overview}</MovieDesc>
              </TextDiv>
            </InfoDiv>  
        </MovieDetails>
      </ScrollView>
    )
}


