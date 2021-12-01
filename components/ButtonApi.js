import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const ArtistText = styled.Text`
  font-weight: 700;
  font-size: 4rem;
`;

const APIButton = styled.TouchableOpacity`
  width: 50%;
  background-color: green;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 2rem;
  color: white;
`;

const ButtonApi = () => {
  const [item, setItem] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateItems();
  }, []);

  const generateItems = () => {
    const randomOffset = Math.floor(Math.random() * 1900);

    setLoading(true);
    fetch(
      `https://api.smk.dk/api/v1/art/search/?keys=*&offset=${randomOffset}&rows=100&lang=en&filters=[has_image:true]`
    )
      .then((res) => res.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * 99);
        setItem(data.items[randomIndex]);
        console.log(data.items[randomIndex]);
      })
      .finally((data) => {
        setLoading(false);
      });
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  // Grafikers navn anført i trykpladen
  return (
    <View>
      <Text>Click button to generate an artwork!</Text>
      <APIButton onPress={generateItems}>
        <Text>Clique</Text>
      </APIButton>
      {item !== undefined && (
        <div>
          <ArtistText>{item.artist[0]}</ArtistText>
          <h3>Titles</h3>
          {item.titles.map((title) => (
            <p key={title.title}>{title.title}</p>
          ))}
          <img
            width="300"
            src={item.image_thumbnail}
            alt={item.titles[0].title}
          />
          <h3>Technique</h3>
          <p key="techniques">{item.techniques}</p>
          <h3>Time period</h3>
          <p key="timeperiod">{item.production_date[0].period}</p>
        </div>
      )}
    </View>
  );
};

export default ButtonApi;
