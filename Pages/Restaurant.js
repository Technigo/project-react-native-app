import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native' 


export const Restaurant = ({ route }) => {

    const { item } = route.params 

    return (

        <Container>
  
        <PageTitle>Best place this week</PageTitle>
        <SubTitle>{item.restaurant.name}</SubTitle>
        
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
  
  