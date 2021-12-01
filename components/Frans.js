import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";

const Frans = () => {
  const getFrans = () => {
    fetch(
      "https://www.rijksmuseum.nl/api/en/collection?key=ixrIdKyM&f.involvedMaker=Frans+Hals"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <View>
      <Text>hello from Frans</Text>
      <Button title="get Frans" onPress={getFrans} />
    </View>
  );
};

export default Frans;
