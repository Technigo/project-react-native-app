import React, { useEffect, useState } from 'react'
import { FlatList, Text, ScrollView, Image } from 'react-native'
import styled from 'styled-components/native'
import clock from '../assets/clock.png'
import calender from '../assets/calender.png'


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
  <TextContainer>
    <Timecontainer>
      <ClockImage
        source={clock} />  
      <TimeText>Time:{movieDetails.runtime}</TimeText>
    </Timecontainer>
    <ReleaseContainer>
    <CalenderImage
      source={calender} /> 
    <DateText> {movieDetails.release_date}</DateText>
    </ReleaseContainer>
  </TextContainer>
  </>
 )
}

const TextContainer = styled.View`
display: flex;
flex-direction: column;
padding: 10px;
`
const Timecontainer = styled.View`
display: flex
flex-direction: row;
align-items: center;
`

const ClockImage = styled.Image`
  height:20px;
  width:20px;
`
const TimeText = styled.Text`
  color: #BDBDBD;
  padding: 5px;
  `
const ReleaseContainer = styled.View`
display: flex
flex-direction: row;
align-items: center;
padding-left: 4px;`

const CalenderImage = styled.Image`
  height:13px;
  width:13px;
`
const DateText = styled.Text`
  color: #BDBDBD;
  padding: 0px 5px;
  `