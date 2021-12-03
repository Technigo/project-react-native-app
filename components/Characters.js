import React, { useState, useEffect } from 'react';
import {
  Text,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  View,
  Image,
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

  const renderItem = ({ item }) => <Text>{item.name}</Text>;

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={characters}
          renderItem={({ item }) => <Text>{item.name}</Text>}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default Characters;
