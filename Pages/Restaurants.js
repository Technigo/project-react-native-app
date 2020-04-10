import React, { useState, useEffect } from 'react'
import { FlatList, TouchableOpacity, Image } from 'react-native';
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

      <PageTitle>Trending this Week in</PageTitle>
      <SubTitle>New York City</SubTitle>
    
      <FlatList 

      showsHorizontalScrollIndicator={false}
      data={foodplaces}
      renderItem={({ item }) => (

       
        <ItemTContainer>

        <TouchableOpacity onPress={() => navigation.navigate('Restaurant', { item })}>
        <Image source={{ uri: item.restaurant.thumb }}  style={{ margin: 10, width: 330, height: 200}}/>
        <Itemtext>{item.restaurant.name}</Itemtext>
        </TouchableOpacity>
        
        </ItemTContainer>
     
      )}
      keyExtractor={item => item.restaurant.id}
      
      />
      
      </Container>

    )
   
 }

const Container = styled.View`
  flex: 1;
  background-color: white;
  padding-top: 30px;
`
const PageTitle = styled.Text`
  margin-top: 10px;
  margin-left: 32px;
  margin-bottom: 10px;
  font-size: 24px;
  color: black;
`
const SubTitle = styled.Text`
  font-weight: bold;
  margin-left: 35px;
  font-size: 30px;
  color: black;
`
const ItemTContainer= styled.View`
  margin: 24px;
  height: 250px;
  width: 360px;
`
const Itemtext = styled.Text`
  margin: 10px;
  font-size: 24px;
  color: black;
`

