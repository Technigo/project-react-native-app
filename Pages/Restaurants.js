import React, { useState, useEffect } from 'react'
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native'


const apiKey  = "494da9ce0d7d396b3dfc1e2b322b10bd";


export const Restaurants = ({navigation}) => {

    const [foodplaces, setFoodplaces] = useState([])

    useEffect(() => {
      fetch( `https://developers.zomato.com/api/v2.1/search?entity_id=280&entity_type=city`, {headers:{ "user-key": apiKey}})
      .then((res) => res.json())
      .then((json) => {
        setFoodplaces(json.restaurants)
        console.log(json.restaurants)
      })
      .catch((error) => console.log(error))
    }, [])

    return (

      <Container>

      <PageTitle>Trending this Week</PageTitle>
      <SubTitle>New York City</SubTitle>
      

    
      <FlatList 

      horizontal={true}
      data={foodplaces}
      renderItem={({ item }) => (

       
        <ItemTContainer>

        <TouchableOpacity onPress={() => navigation.navigate('Restaurant', { item })}>
        <Itemtext>{item.restaurant.name}</Itemtext>
        <Itemtext>{item.restaurant.location.city}</Itemtext>
        </TouchableOpacity>
        
        </ItemTContainer>
     
      )}
      keyExtractor={item => item.restaurant.id}
      
      />
      
      </Container>

    )
   
 }

const Container = styled.View`
  background-color: white;
  padding-top: 30px;
`
const PageTitle = styled.Text`
  margin-top: 60px;
  margin-left: 27px;
  margin-bottom: 20px;
  font-size: 24px;
  color: black;
`
const SubTitle = styled.Text`
  margin-left: 30px;
  font-size: 24px;
  color: black;
`
const ItemTContainer= styled.View`
  margin: 24px;
  padding: 50px;
  border: 2px solid black;
  height: 300px;
`
const Itemtext = styled.Text`
  margin-top: 20px;
  font-size: 24px;
  color: palevioletred;
`

