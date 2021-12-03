import React, { useState } from "react";
import { View, ActivityIndicator, Text, Button } from "react-native";

const Dinner = () => {
  const [dinner, setDinner] = useState({});
  const [loading, setLoading] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const getDinner = () => {
    fetch("www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((dinner) => console.log(dinner));
  };

  return (
    <View>
      <Text>Hello from dinner</Text>
      <Button title="get dinner" onPress={getDinner} />
    </View>
  );
};

export default Dinner;
