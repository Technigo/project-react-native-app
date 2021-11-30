import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";

const Judith = () => {
  const getJudiths = () => {
    fetch(
      "https://www.rijksmuseum.nl/api/en/collection?key=ixrIdKyM&f.involvedMaker=Judith+Leyster"
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <View>
      <Text>hello from judith</Text>
      <Button title="get Judiths" onPress={getJudiths} />
    </View>
  );
};

export default Judith;
