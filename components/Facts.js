import React, { useState, useEffect } from "react";
import { View, Text, TouchableHighlight } from "react-native";

export const Facts = () => {
  const [fact, setFact] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    generateFacts();
  }, [setFact]);

  const generateFacts = () => {
    setLoading(true);
    fetch("https://asli-fun-fact-api.herokuapp.com/")
      .then(response => response.json())
      .then(json => setFact(json))
      .finally(setLoading(false));
  };

  return (
    <View>
      <View>
        <TouchableHighlight onPress={generateFacts}>
          <Text>Gimme some sweet facts yo!</Text>
        </TouchableHighlight>
      </View>
      <Text>Fact: {fact.fact}</Text>
      <View></View>
    </View>
  );
};
