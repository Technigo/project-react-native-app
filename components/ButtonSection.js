import React, { useState } from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  justify-content: start;
  align-items: center;
`

const Button = styled.Button`
  font-size: 20px;
  background-color: green;
  border-radius: 20px;
  color: white;
  position: absolute;
  font-family: ? ; 
`

const Image = styled.Image`
  flex: 1;
  height: 100px;
  width: 200px;
  position: relative; 
`

const ButtonSection = () => {
const [randomMeals, SetRandomMeals] = useState("");


const onChangeMeals = () => {
fetch(API-KEY HERE)
.then((response) => response.json())
  .then(() => {
window.location.relode()
})
}

const handleButton = e => {
e.preventDefault()
onChangeMeals()
}

  return (

    <Container>
       <Image
         source={{ 
           uri: 'https://i.dlpng.com/static/png/6930919_preview.png',
         }}
       />

      <Button 
      title="FIND YOUR MEALS"
      onClick={handleButton} random data(recipes) from the api that's gone through the maping?
      />
    </Container>
  )
}

export default ButtionSection



