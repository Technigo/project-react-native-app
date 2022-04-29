import React from 'react'
import styled from "styled-components/native"

const Title = styled.Text`
	font-size: 30px;
    font-weight:900;
	color: white;
    text-align:center;
    margin-bottom:20px;
    padding:10px;
`;


export const StartHeader=({title})=>{
  return(
    <Title>{title}</Title>
      )
}