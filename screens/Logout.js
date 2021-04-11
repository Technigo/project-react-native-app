import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import YoutubePlayer from 'react-native-youtube-iframe'

const LogoutContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TextContainer = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  text-align: justify;
`

const Logout = () => {
  return (
    <LogoutContainer>
      <TextContainer>
        Here I wanted to implement a button, which would clear all states. Couldn't make that work unfortunately.
        So instead I leave you here a video beaver eating cabbage:
      </TextContainer>
      <View>
        <YoutubePlayer
        height={300}
        play={true}
        videoId={'h54NHiDzvsM'}
        />
      </View>
    </LogoutContainer>

  );
};

export default Logout


