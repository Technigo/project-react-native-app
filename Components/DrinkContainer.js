import React, { useState, useEffect } from "react"
import styled from "styled-components/native"
import { Text, View, Container, StyleSheet } from 'react-native'



export default function DrinkContainer() {
  const [drinks, setDrinks] = useState()

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
      .then((res) => res.json())
      .then((json) => {
        setDrinks(json.results)
      })

  }, [])

  return (
      <View>

    {drinks.map((drink) => (
      <Container> 
         <Image
         style={{width: 50, height: 50}}
         source={{uri:`${drinks.strDrinkThumb}`}}
         />
      <Title>{drinks.idDrink}</Title>
    {/* // <Text>{drink.xxx}</Text> */}
    </Container>

    )
  )
    }
        </View>
)
  }

// const Container = styled.View`
//   flex: 1;
//   border: 1,
//   border-color: blue,
//   background-color: powderblue;
//   align-items: center;
//   justify-content: space-around;
//   paddingTop: 60;
// `

const Title = styled.Text`
  font-size: 42px;
  color: palevioletred;
`