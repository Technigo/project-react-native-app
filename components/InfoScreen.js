import React, { useState, useEffect } from "react"
import styled from "styled-components/native"

const API_KEY = 'UYfZ5JyvB0BI3EU5mxgcfbPWp4YrpQ3yFhsQKkRX'
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`

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
  font-size: 20px;
  color: #ffffff;
  margin-top: 30px;
`;

const CopyText = styled.Text`
  font-size: 10px
  color: lightgrey;
`;

const TextContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

const InfoTextTitle = styled.Text`
  font-size: 28px;
  margin: 10px;
  font-weight: bold;
`;

const SpaceInfoText = styled.Text`
  font-size: 18px;
  margin: 10px 15px;
  color: #000000;
  line-height: 24px;
`;

const FooterText = styled.Text`
  font-size: 12px;
  color: #000000;
  margin: 10px 15px;
`;

const InfoScreen = () => {
  const [spaceInfo, setSpaceInfo] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setSpaceInfo(data)
      })
  }, [])

  return (
    <ScrollContainer>
      <InfoContainer source={{ uri: spaceInfo.hdurl }}>
        <TitleText>{spaceInfo.title}</TitleText>
        {
          spaceInfo.copyright
            ? <CopyText>{'\u00A9'} {spaceInfo.copyright}</CopyText>
            : <CopyText>{ }</CopyText> //Don't show if the API has no info on copyright.
        }
      </InfoContainer>
      <TextContainer>
        <InfoTextTitle>Learn more</InfoTextTitle>
        <SpaceInfoText>{spaceInfo.explanation}</SpaceInfoText>
        <FooterText>
          Each day a different image or photograph of our fascinating
          universe is featured from the Nasa APOD API, along with a brief explanation written
          by a professional astronomer.
        </FooterText>
      </TextContainer>
    </ScrollContainer>
  );
}
export default InfoScreen;