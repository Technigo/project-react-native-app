import React, {Button, Container} from 'react'
import styled from 'styled-components/native'

const Containz = styled.View`
display: flex;
justify-content: center;
align-items: center;
background: white;
height: 100%;
width: 100%;
color: red;
`

export const HouseButtons = () => (
  <Containz>
    <Button
        title="Gryffindor"
        onPress={() => {
          setHouse = "Gryffindor"
          return (
            houseMatch(house)
          )
        }}
      >
        Gryffindor
      </Button>
      <Button
        title="Slytherin"
        onPress={() => {
          setHouse = "Slytherin"
          return (
            houseMatch(house)
          )
        }}>
        Slytherin
      </Button>
      <Button
        title="Hufflepuff"
        onPress={() => {
          setHouse = "Hufflepuff"
          return (
            houseMatch(house)
          )
        }}
      >
        Hufflepuff
      </Button>
      <Button
        title="Ravenclaw"
        onPress={() => {
          setHouse = "Ravenclaw"
          return (
            houseMatch(house)
          )
        }}
      >
        Ravenclaw
      </Button>
  </Containz>
)