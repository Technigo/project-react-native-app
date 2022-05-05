import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

const ButtonApi = () => {
  const [quote, setQuote] = useState({});

  const generateQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => setQuote(data));
  };

  useEffect(() => {
    generateQuote();
  }, []);

  const image = {
    uri: "https://images.unsplash.com/photo-1607908427546-abb631ce41e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  };
  return (
    <View>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.quote}>"{quote.content}"</Text>
        <Text style={styles.author}>{quote.author}</Text>
        <TouchableOpacity style={styles.button} onPress={generateQuote}>
          <Text style={styles.btnTitle}>Generate quote</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  quote: {
    fontStyle: "italic",
    marginTop: 17,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 18,
    color: "white",
    padding: 15,
    fontWeight: '500',
  },
  button: {
    alignItems: "center",
    backgroundColor: "tomato",
    padding: 15,
    borderRadius: 50,
    marginBottom: 30,
    marginTop: 20,
    alignSelf: "center",
  },
  btnTitle: {
    color: "#FFE4C4",
  },
  author: {
    fontStyle: "italic",
    marginTop: 17,
    marginBottom: 10,
    textAlign: "center",
    fontSize: 18,
    color: "white",
    padding: 15,
    fontWeight: '400',
  },
  image: {
    marginTop: 30,
    borderWidth: 5,
    borderColor: "#fff",
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 10,
  }
});

export default ButtonApi;