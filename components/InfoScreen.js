import React, { useState, useEffect } from "react"

//import { ScrollView } from 'react-native'
import styled from "styled-components/native"

const API_KEY = 'UYfZ5JyvB0BI3EU5mxgcfbPWp4YrpQ3yFhsQKkRX'
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`
console.log(API_URL)

const ScrollContainer = styled.ScrollView`
  flex: 1;
  `;

const InfoContainer = styled.ImageBackground`
  
  align-items: flex-start;
  justify-content: flex-end;
  padding: 18px;
  height: 450px;
  width: 100%;
`;

const TitleText = styled.Text`
  font-size: 24px;
  color: #ffffff;
  margin-top: 30px;
`;
const TextContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const InfoTextTitle = styled.Text`
  font-size: 28px;
  margin: 10px;
`;

const InfoText = styled.Text`
  font-size: 16px;
  margin: 10px;
  color: #000000;
`;

const CopyText = styled.Text`
  font-size: 10px
  color: lightgrey;
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

  //If I want the user to be able to touch a button that would trigger downward scroll
  return (
    <ScrollContainer> 
      <InfoContainer source={{uri: spaceInfo.hdurl}}>
        <TitleText>{spaceInfo.title}</TitleText>
        <CopyText>Copyright: {spaceInfo.copyright}</CopyText>
      </InfoContainer>
      <TextContainer> 
        <InfoTextTitle>Learn more</InfoTextTitle>
        <InfoText>{spaceInfo.explanation}</InfoText>
      </TextContainer>
    </ScrollContainer>
  );
}
export default InfoScreen;