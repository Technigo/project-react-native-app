import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import styled from "styled-components/native";

// const QuoteText = styled.Text`
//   font-weight: 700;
// `;

const ApiButton = styled.TouchableOpacity`
  width: 50%;
  background-color: green;
`;

const ButtonApi = () => {
  const [activity, setActivity] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateActivity();
  }, []);

  const generateActivity = () => {
    setLoading();
    fetch("https://www.boredapi.com/api/activity/")
      .then((res) => res.json())
      .then((data) => setActivity(data))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <ApiButton onPress={generateActivity}>
        <Text>Click on the button! </Text>
      </ApiButton>
      <Text> Activity:{activity.activity}</Text>
      <Text> Type of activity:{activity.type}</Text>
    </View>
  );
};

export default ButtonApi;

//  const generateArt = () => {
//     fetch("https://api.artic.edu/api/v1/artworks")
//       .then((res) => res.json())
//       .then((data) => setArt(data));
//   };

// setTimeout(function(){
//  	alert("Sup!");
// }, 2000);
