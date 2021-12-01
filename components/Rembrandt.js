import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";

const Rembrandt = () => {
  const getRembrandt = () => {
    fetch(
      "https://www.rijksmuseum.nl/api/en/collection?key=ixrIdKyM&f.involvedMaker=Rembrandt+van+Rijn"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <View>
      <Text>hello from Rembrandt</Text>
      <Button title="get Rembrandt" onPress={getRembrandt} />
    </View>
  );
};

export default Rembrandt;
