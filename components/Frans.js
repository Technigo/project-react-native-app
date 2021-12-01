import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Frans = () => {
  const [frans, setFrans] = useState([]);

  const getFrans = () => {
    fetch(
      "https://www.rijksmuseum.nl/api/en/collection?key=ixrIdKyM&f.involvedMaker=Frans+Hals"
    )
      .then((res) => res.json())
      .then((data) => setFrans(data));
  };

  //   const mapFrans = getFrans.map((item) => {
  //     return <Text>{item.title}</Text>;
  //   });

  return (
    <View>
      <Text>hello from Frans</Text>
      <Button title="get Frans" onPress={getFrans} />
      {/* <Text>{mapFrans}</Text> */}
    </View>
  );
};

export default Frans;
