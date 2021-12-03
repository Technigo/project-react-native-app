import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  ImageBackground,
} from 'react-native';
import styled from 'styled-components/native';
import { useFonts, Buda_300Light } from '@expo-google-fonts/buda';
import { Poppins_400Regular } from '@expo-google-fonts/poppins';

const Heading = styled.Text`
  font-size: 27px;
  text-align: center;
  margin-top: 10%;
`;

const TextBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 40%;
`;

const QuoteText = styled.Text`
  font-weight: 700;
  font-size: 25px;
  padding-bottom: 15px;
`;
const ThinkBackground = styled.ImageBackground`
  height: 100%;
`;

const APIbutton = styled.TouchableOpacity`
  border-radius: 6px;
  padding: 2% 3%;
  background-color: #fff;
  margin: 10%;
`;

const ButtonText = styled.Text`
  font-size: 15px;
`;

const ButtonApi = () => {
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(false);
  const [fontsLoaded] = useFonts({
    Buda_300Light,
    Poppins_400Regular,
  });

  useEffect(() => {
    generateQuote();
  }, []);

  const generateQuote = () => {
    setLoading(true);
    fetch('http://api.quotable.io/random')
      .then((res) => res.json())
      .then((quote) => setQuote(quote))
      .finally(() => setLoading(false));
  };

  if (loading || !fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ThinkBackground source={require('../assets/think_back.jpg')}>
      <Heading style={{ fontFamily: 'Poppins_400Regular' }}>
        Well-thought thoughts
      </Heading>
      <TextBox>
        <QuoteText style={{ fontFamily: 'Buda_300Light' }}>
          "{quote.content}"
        </QuoteText>
        <Text>{quote.author}</Text>
        <APIbutton onPress={generateQuote}>
          <ButtonText>New quote</ButtonText>
        </APIbutton>
      </TextBox>
    </ThinkBackground>
  );
};

export default ButtonApi;
