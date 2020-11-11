import React, { useState, useEffect } from "react"

//import {Text} from 'react-native'
import styled from "styled-components/native"
//import backgroundPicture from '../assets/hearts-background.jpg'

const API_KEY = 'UYfZ5JyvB0BI3EU5mxgcfbPWp4YrpQ3yFhsQKkRX'
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
console.log(API_URL)

const TitleText = styled.Text`
  font-size: 24px; 
`;

const InfoContainer = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 18px;
  width: 100vw;
`;

const InfoScreen = () => {
  const [spaceInfo, setSpaceInfo] = useState([])

  useEffect(() => {
    fetch(API_URL)
    .then(response => response.json())
    .then(data => {
      setSpaceInfo(data)
      console.log(data)
      console.log(data.title)
      console.log(data.hdurl)
      console.log(data.explanation)
    })
  }, [])

  //The image don't show on the phone. 
  //Says 'Failed prop type: Invalid prop `source` supplied to `Image`.
  //
  return (
    <InfoContainer source={spaceInfo.hdurl}>
      <TitleText>{spaceInfo.title}</TitleText>
    </InfoContainer>
  );
}
export default InfoScreen;