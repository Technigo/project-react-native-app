import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { FlatList, ActivityIndicator, View } from 'react-native';
import { CHARACTERS_URL } from '../utils/urls';

const CharacterContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15;
`;

const CharacterAvatar = styled.Image`
  width: 80px;
  height: 80px;
`;

const CharacterInfo = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 15px;
`;

const CharacterName = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: #f4f7ed;
`;

const CharacterSpecies = styled.Text`
  font-size: 16px;
  color: #f4f7ed;
`;

const CharacterStatus = styled.Text`
  font-size: 16px;
  font-style: italic;
  color: #f4f7ed;
`;

const CharacterList = () => {
  const [isLoading, setLoading] = useState(false);
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    generateData();
  }, []);

  const generateData = () => {
    setLoading(true);
    fetch(CHARACTERS_URL)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
      })
      .finally(setLoading(false));
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <FlatList
        data={characters}
        renderItem={({ item }) => (
          <CharacterContainer>
            <CharacterAvatar
              style={CharacterAvatar}
              source={{
                uri: item.image,
              }}
            />
            <CharacterInfo>
              <CharacterName>{item.name}</CharacterName>
              <CharacterSpecies>Species: {item.species}</CharacterSpecies>
              <CharacterStatus>Status: {item.status}</CharacterStatus>
            </CharacterInfo>
          </CharacterContainer>
        )}
        keyExtractor={(item) => item.id}
        // Solution to let the flatlist scroll down to the last element
        ListFooterComponent={<View style={{ height: 80 }} />}
      />
    </View>
  );
};

export default CharacterList;
