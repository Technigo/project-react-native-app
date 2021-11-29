import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  TouchableHighlight,
} from 'react-native';
import styled from 'styled-components/native';

const QuoteText = styled.Text`
  font-weight: 700;
`;

const APIButton = styled.TouchableHighlight`
  border-radius: 10%;

  cursor: pointer;
  text-transform: uppercase;
  background: #161616;
  padding: 5px;
  width: 100%;
  text-align: center;
`;

const ApiButtonText = styled.Text`
  color: yellow;
`;

const ButtonContainer = styled.View`
  display: flex;
  justify-content: center;
`;

export const ButtonApi = () => {
  const [activity, setActivity] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateActivity();
  }, []);

  const generateActivity = () => {
    setLoading(true);
    fetch('https://www.boredapi.com/api/activity')
      .then(response => response.json())
      .then(json => setActivity(json))
      .finally(setLoading(false));
  };

  if (loading) {
    <ActivityIndicator />;
  }

  return (
    <>
      <ButtonContainer>
        <APIButton onPress={generateActivity}>
          <ApiButtonText>click me</ApiButtonText>
        </APIButton>
      </ButtonContainer>
      <View>
        <QuoteText>Activity: {activity.activity}</QuoteText>
        <Text>Type: {activity.type}</Text>
      </View>
    </>
  );
};
