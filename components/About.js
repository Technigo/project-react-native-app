import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Linking } from "react-native";
import { Header } from "./Header";
const username = "madeleinesvensson";
const USERS_URL = `https://api.github.com/users/${username}`;

const styled = StyleSheet.create({
  userImage: {
    borderRadius: 200,
    height: 200,
    width: 200,
    margin: 30,
    alignSelf: "center",
  },
  Container: {
    backgroundColor: "papayawhip",
    flex: 1,
    padding: 15,
  },
  userText: {
    fontSize: 20,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 15,
  },
});
export const About = () => {
  const [user, setUser] = useState({});
  fetch(USERS_URL)
    .then((res) => res.json())
    .then((data) => {
      setUser(data);
    });

  return (
    <>
      <View style={styled.Container}>
        <Header />
        <Image
          style={styled.userImage}
          source={{ uri: `${user.avatar_url}` }}
        />
        <Text style={styled.userText}>{user.name}</Text>
        <Text style={styled.userText}>{user.bio}</Text>
        <Text style={styled.userText}>{user.location}</Text>
        <Text style={styled.userText}>{user.html_url}</Text>
      </View>
    </>
  );
};
