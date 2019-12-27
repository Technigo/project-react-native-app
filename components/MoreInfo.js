import React, { useState, useEffect } from "react";

import { Text, Button, View, Image } from "react-native";

export const MoreInfo = ({ navigation }) => {
  const title = navigation.getParam("title");
  const authors = navigation.getParam("authors");
  const categories = navigation.getParam("categories");
  const image = navigation.getParam("image");
  const description = navigation.getParam("description");

  return (
    <View>
      <Image
        source={image}
        style={{
          width: 70,
          height: 100,
          marginVertical: 30,
          marginLeft: 5
        }}
      ></Image>
      <Text>{title}</Text>
      <Text>{authors}</Text>
      <Text>{categories}</Text>
      <Text>{description}</Text>
    </View>
  );
};

export default MoreInfo;
