import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const ButtonApi = () => {
  const [something, setSomething] = useState({});
  const generateSomething = () => {
    fetch(
      
      "https://www.affirmations.dev/"
    ) 
      .then((res) => res.json())
      .then((data) => setSomething(data));
     
  };
  return (
    <View>
      <Text>Click button to mess around</Text>
      <Button title="clicky" onPress={generateSomething} />
      
      <Text>{something.affirmation}</Text>

    
    </View>
  );
};

export default ButtonApi;
