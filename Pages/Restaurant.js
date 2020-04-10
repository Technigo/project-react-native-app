import React  from 'react'
import { Image } from 'react-native';
import styled from 'styled-components/native' 


export const Restaurant = ({ route }) => {

    const { item } = route.params 

    return (

        <Container>
  
        <PageTitle>Best place this week</PageTitle>
        
        <SubTitle>{item.restaurant.name}</SubTitle>
        <Image source={{ uri: item.restaurant.thumb }}  style={{ marginLeft: 15, width: 380, height: 400}}/>

        <SubText><Text>Cuisines:</Text> {item.restaurant.cuisines}</SubText>
        <SubText>{item.restaurant.location.address}</SubText>
        <SubText>{item.restaurant.location.locality}</SubText>
        <SubText>{item.restaurant.location.city}</SubText>
        <SubText><Text>Rating:</Text> {item.restaurant.user_rating.aggregate_rating} ⭐</SubText>
        
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
    margin-left: 15px;
    margin-bottom: 20px;
    font-size: 20px;
    color: black;
  `
  const SubTitle = styled.Text`
    font-weight: bold;
    margin-left: 15px;
    font-size: 30px;
    color: black;
    margin-bottom: 20px;
  `
  const SubText = styled.Text`
    margin-left: 20px;
    font-size: 20px;
    color: black;
    margin-top: 10px;
`

  const Text = styled.Text`
    margin-left: 20px;
    font-size: 20px;
    color: black;
    margin-top: 10px
    font-weight: bold;
`


  
  