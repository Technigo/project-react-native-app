import React, {useState, useEffect} from 'react'
import styled from 'styled-components/native'
import { StyleSheet, View, ScrollView  } from 'react-native'
import {Search} from '../Components/Search'
// import {Results} from '../Components/Search'

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  }
})

const Container = styled.View`
  flex: 1;
  flex-direction: column;
  background-color: #FA4960;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-size: 18px;
  color: #3B2F90;
  text-align: center; 
  margin: 10px;
`
const AdressTitle = styled.Text`
  font-size: 10px;
  color: #3B2F90;
  text-align: center;
`
const RatingTitle = styled.Text`
  font-size: 10px;
  color: #3B2F90;
  text-align: center;
`

export const Results = ({route}) => {
  const {location} = route.params
  const [nails, setNails] = useState([])
  
  useEffect(() => {
    fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=nailsalon+in+${location}&key=AIzaSyBueKIP4VzTd2ksOIa-Gcd0p7ZbL5uWiFA`)
    .then((res) => res.json ())
    .then((json) => {
      setNails(json.results)
    })
  }, []) 

    return (
      <Container>
        <ScrollView>
        {nails.map((nail) => (
      <View key={nail.name}>
      <Title>{nail.name}</Title>
      <AdressTitle>{nail.formatted_address}</AdressTitle>
      <RatingTitle>{nail.rating}/5 ⭐️</RatingTitle>
      <Title>. . . </Title>
      </View>
        ))}
        </ScrollView>
      </Container>
    )   
  }