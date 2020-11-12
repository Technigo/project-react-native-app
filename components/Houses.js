import React, { useState, useEffect } from 'react'
import { Title, View } from 'react-native'
import styled from 'styled-components/native';

const HouseImg = styled.Image `
  width: 200px;
  height: 200px;
`

export const Houses = () => {
  const [house, setHouse] = useState({})
  /*const ApiKey = '$2a$10$EoDTiYP0YOqn40Pfycl39OojHiZzqKCrsyqMK4HA/h/iFZsAwyyJe'*/
  const houseUrl = 'https://www.potterapi.com/v1/sortingHat'

  useEffect(() => {
    fetch(houseUrl)
      .then(res => res.json())
      .then(json => setHouse(json))
      console.log(house)
    }, [])
    console.log(house)

    
  return (
    <>
    <View> 
      <Houses>{house}</Houses>
    </View>
     
    
    </>
  )  
}










/*export const Houses = () => {
  const [house, setHouses] = useState([])
  /*const ApiKey = '$2a$10$EoDTiYP0YOqn40Pfycl39OojHiZzqKCrsyqMK4HA/h/iFZsAwyyJe'
  const houseUrl = `https://www.potterapi.com/v1/sortinghat`

  useEffect(() => {
    fetch(houseUrl)
    .then((res) => res.json())
    .then(json => setHouses(json))
      console.log(json)
  }, [])
    

  return (
    <Container> 
      {house.map((house) => (
        <Title>{json}</Title>
      ))}
    <Button text="Lets try again" />
    </Container>
  )  
}*/