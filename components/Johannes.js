import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";

const Johannes = () => {
  const getJohannes = () => {
    fetch(
      "https://www.rijksmuseum.nl/api/en/collection?key=ixrIdKyM&f.involvedMaker=Johannes+Vermeer"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <View>
      <Text>hello from Johannes</Text>
      <Button title="get Johannes" onPress={getJohannes} />
    </View>
  );
};

export default Johannes;
