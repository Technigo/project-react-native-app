import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

import { REMBRANDT_URL } from '../utils/urls';

const HomeView = styled.ScrollView`
	background-color: papayawhip;
`

const ArtworkContainer = styled.ScrollView`
	background-color: papayawhip;
  padding: 35px;
`

const HeaderText = styled.Text`
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;
  padding: 5px;
  margin: 20px;
`

const TitleText = styled.Text`
  font-size: 16px;
  font-style: italic;
  text-align: left;
  margin: 0  5px 20px 5px;
`

const ArtworkImage = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 5px;
`

const Artworkslist = () => {
  const [artworks, setArtworks] = useState([])

  const generateArtworks = () => {
    fetch(REMBRANDT_URL)
    .then(res => res.json())
    .then(data => setArtworks(data.artObjects))
  }

  useEffect(() => {
    generateArtworks();
  }, []);

  return (
    <HomeView>
      <ArtworkContainer>
        <HeaderText>Rembrandt Randomizer</HeaderText>
        {artworks.map((artwork) => {
          return (
            <View key={artwork?.id}>
              <ArtworkImage source={artwork?.webImage?.url}/>
              <TitleText>{artwork?.title}</TitleText>
            </View>
          )
        })}
        </ArtworkContainer>
    </HomeView>
  )
}

export default Artworkslist;