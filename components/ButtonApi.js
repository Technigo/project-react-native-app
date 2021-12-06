import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: pink;
  padding: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
`;

const BoredText = styled.Text`
  font-weight: 700;
`;

const APIButton = styled.TouchableOpacity`
  background-color: pink;
  justify-content: center;
  text-align: center;
  width: 50;
  margin: auto;
  margin-bottom: 2;
`;

const ButtonApi = () => {
  const [bored, setBored] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateActivity();
  }, []);

  const generateActivity = () => {
    setLoading(true);
    fetch("http://www.boredapi.com/api/activity/")
      .then((res) => res.json())
      .then((data) => setBored(data))
      .finally(() => setLoading(false));
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <Text>Click button to generate a new activity!</Text>
      <APIButton onPress={generateActivity}>
        <Text>Activity</Text>
      </APIButton>
      <Container>
        <BoredText>What to do: {bored.activity}</BoredText>
        <Text>People needed: {bored.participants}</Text>
      </Container>
    </View>
  );
};

export default ButtonApi;
