import React, { useState, useEffect } from "react";
import { Text, Button, ActivityIndicator } from "react-native";

export const Word = () => {
  const [word, setWord] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    generateWord();
  }, []);

  if (loading) return <ActivityIndicator />;

  const generateWord = () => {
    setLoading(true);
    fetch("http://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => setWord(data))
      .finally(() => setLoading(false));
  };

  return (
    <>
      <Text>Hello {word.author}</Text>
      <Button title="Click me" onPress={generateWord}></Button>
    </>
  );
};
