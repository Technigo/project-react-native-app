import React from 'react'
import styled from "styled-components/native"

const Title = styled.Text`
	font-size: 30px;
    font-weight:900;
	color: white;
    text-align:center;
    margin-bottom:70px;
    border: 2px solid #B6666F;
    padding:10px;
`;


export const DrinkHeader=()=>{
  return(
    <Title>SHAKE FOR DRINK!</Title>)
}