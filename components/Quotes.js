import React, { useState } from "react";
import styled from "styled-components/native";
import { Text, View, Vibration, TouchableOpacity } from "react-native";

const Container = styled.View`
  height: 300;
  width: 200;
  border-radius: 4;
  align-items: center;
  background: #ffffff;
  margin: 20px auto;
  padding: 30px 20px;
`;

const Button = styled.TouchableOpacity`
  height: 50;
  width: 150;
  border-radius: 4;
  align-items: center;
  justify-content: center;
  background: #c1539f;
  margin: 20px auto;
`;

const Quotes = () => {
  const quoteArray = [
    "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV.",

    "Listen, Morty, I hate to break it to you but what people call love is just a chemical reaction that compels animals to breed.",

    "Weddings are basically funerals with cake.",
    "I turned myself into a pickle. I'm Pickle Riiiiick.",

    "Hey listen, you know, if we're all bored over here, wouldn't the common denominator be you?",

    "Have fun with empowerment. It seems to make everyone that gets it really happy.",

    "Nobody exists on purpose. Nobody belongs anywhere. We’re all going to die. Come watch TV.",

    "Don’t move. Gonorrhea can’t see us if we don’t move...Wait! I was wrong! I was thinking of a T-rex.",

    "Traditionally, science fairs are a father-son thing.Well, scientifically, traditions are an idiot thing.",
  ];

  const [quote, setQuote] = useState([]);

  const getQuote = () => {
    const theQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    setQuote(theQuote);
  };

  return (
    <View>
      <Container>
        <Text style={{ fontSize: 20 }}>{quote}</Text>
      </Container>
      <Button
        onPress={() => {
          getQuote();
          Vibration.vibrate();
        }}
      >
        <Text
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Get quote
        </Text>
      </Button>
    </View>
  );
};

export default Quotes;
