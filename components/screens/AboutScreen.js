import React, { useEffect } from 'react';
import styled from 'styled-components/native';

import mars from '../../assets/mars.jpg'; 

const Container = styled.ImageBackground`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`

const InfoBox = styled.View`
  width: 90%
  margin-top: 60px;
  padding: 10px;
`

const InfoText = styled.Text`
  color: white;
  font-size: 15px;
  margin-bottom: 20px;
  line-height: 18px;
`

const FooterBox = styled.View`
  width: 80%;
  position: absolute;
  bottom: 20px;
`

const FooterText = styled.Text`
  color: white;
  font-size: 12px;
  text-align: center;
`

export const AboutScreen = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  });

  return (
    <Container source={mars}>
      <InfoBox>
        <InfoText>
          The data shown in this app is collected by NASA's lander InSight on Mars. 
          The lander is located at Elysium Planitia, a flat, smooth plain nears Mars' equator.
          It landed on Mars on November 26, 2018. 
        </InfoText>
        <InfoText>
          The lander sends data to earth continously, but it sometimes can take some days until all the data is in place. 
          The app will show you data for the latest martian day for which air temperature data is provided.
          However, there might still be data missing for wind speed and air pressure. 
        </InfoText>
        <InfoText>
          The sols which are the martian equivalent to days on earth are counted from the moment in which the lander touched Mars' surface, starting with sol 0.
          One sol has a duration of 24 hours, 39 minutes and 35.244 seconds.
        </InfoText>
      </InfoBox>
      <FooterBox>
        <FooterText>
          App created by Henrike Wiemker during Technigo Bootcamp fall 2020.
          Source of data and image: NASA.
        </FooterText>
      </FooterBox>
    </Container>
  )
};
