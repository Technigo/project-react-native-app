import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import { CHARACTERS_URL } from '../utils/urls';

const Characters = () => {
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

  console.log('DATA', characters);

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={characters}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => {
            <Text>
              {item.name} {item.species}
            </Text>;
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Characters;
