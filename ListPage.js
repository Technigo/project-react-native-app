import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text} from 'react-native'
import styled from 'styled-components/native'

const userKey = "494da9ce0d7d396b3dfc1e2b322b10bd";

const url = 'https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city'

export const ListPage = () => {

    const [foodplaces, setFoodplaces] = useState([])

    useEffect (() => {
      fetch( url, { Headers: { "user-Key": userKey }})
      .then((res) => res.json())
      .then((json) => setFoodplaces(json.restaurants))
    }, [])

    return (

      <Container>

      <Title>hej</Title>

      <ScrollView>

       
        

      </ScrollView>
      
      </Container>

    )
   
}


const Container = styled.View`
  flex: 1;
  background-color: blue;
  justify-content: center;
  align-items: center;
`


const Title = styled.Text`
font-size: 12px;
color: white;
`
