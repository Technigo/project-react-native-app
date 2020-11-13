import React from 'react' 
import styled from "styled-components/native"

const Earth = styled.Image`
  width: 200px;
  height: 200px;
  margin: 25px;
 `;

 export const AnimationEarth = () => {
   return (
     <Earth source={require('../assets/spinning-earth.gif')}/>
   )
 }