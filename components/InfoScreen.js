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
  height: 500px;
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
  background-color: #2f4156;
`;

const InfoTextTitle = styled.Text`
  font-size: 28px;
  margin: 10px;
  font-weight: bold;
  color: #fff;
`;

const SpaceInfoText = styled.Text`
  font-size: 18px;
  margin: 10px 15px;
  color: #fff;
  line-height: 24px;
`;

const FooterText = styled.Text`
  font-size: 12px;
  color: #fff;
  padding: 10px;
  margin: 10px 15px;
  border: 1px solid #fff;
  border-radius: 12px;
`;

const HomeButton = styled.TouchableOpacity`
  margin-top: 25px;
  background: #000000;
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 2px solid #fff;
  width: 200px;
  height: 80px;
  margin: 15px;
`;

const ButtonText = styled.Text`
  font-size: 32px;
  color: #fff;
  font-weight: bold;
`;

const InfoScreen = ({navigation}) => {
  const [spaceInfo, setSpaceInfo] = useState([])

  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setSpaceInfo(data)
        navigation.setOptions({ headerShown: false });
      })
  }, [])

  const navigateToHome = () => {
    navigation.navigate('Home');
  }

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
        <HomeButton
        onPress={navigateToHome}>
        <ButtonText>
          Back
        </ButtonText>
      </HomeButton>
      </TextContainer>
    </ScrollContainer>
  );
}
export default InfoScreen;