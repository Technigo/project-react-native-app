import React, { useEffect, useState } from 'react'
import { FlatList, Text, ScrollView } from 'react-native'
import styled from 'styled-components/native'


export const MovieDetails = ({ id }) => {
  const [movieDetails, setMovieDetails] = useState()
  //'https://api.themoviedb.org/3/movie/604822?api_key=e87ff9a70deb7f8f6f897b1efba6340a&language=en-US'
  
  useEffect(() => {
    fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=e87ff9a70deb7f8f6f897b1efba6340a&language=en-US`)
    .then ((res) => res.json())
    .then ((json) => {setMovieDetails(json)}) 
    .catch(err => console.error(err))
  }, [id])


  if(movieDetails === undefined) {
    return   <></>
 }

 return (
   <>
      <Text>Votes:{movieDetails.vote_count}</Text>
      <Text>Time:{movieDetails.runtime}</Text>
   </>
 )
}