import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground, StyleSheet, ScrollView } from "react-native";

const firstFetch = fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic");
const secondFetch = fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");

const options = {
  tagmode: "any",
  type: "GET",
  crossDomain: "true"
};

const DrinksList = ({ route }) => {
  const [alcoholic, setAlcoholic] = useState([]);
  const [nonAlcoholic, setNonAlcoholic] = useState([]);

  useEffect(() => {
    Promise.all([firstFetch, secondFetch], options)
        .then(responses => {
          const arrayOfResponses = responses.map(res => res.json());
          return Promise.all(arrayOfResponses);
        })
        .then(data => { setAlcoholic(data[0].drinks), setNonAlcoholic(data[1].drinks)})
        .catch(error => console.log(error))

  }, []);

  return (
    <View style={styles.container}>
      <Text>{route.params.title} Drinks</Text>
      <Text style={styles.titles}>Alcoholic Drinks:</Text>
      <ScrollView horizontal style={styles.wrapper}>
      {alcoholic.map((drink) => (
        <ImageBackground
          source={drink.strDrinkThumb}
          resizeMode="contain"
          style={styles.image}
          key={drink.idDrink}>
          <Text style={styles.text}>{drink.strDrink}</Text>
        </ImageBackground>
      ))}
      </ScrollView>
      <Text style={styles.titles}>Non Alcoholic Drinks:</Text>
      <ScrollView horizontal style={styles.wrapper}>
      {nonAlcoholic.map((drink) => (
        <ImageBackground
          source={drink.strDrinkThumb}
          resizeMode="contain"
          style={styles.image}
          key={drink.idDrink}>
          <Text style={styles.text}>{drink.strDrink}</Text>
        </ImageBackground>
      ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%",
    textAlign: "center"
  },
  wrapper: {
    display: "flex",
    flexDirection: "row"
  },
  titles: {
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 30
  },
  image: {
    height: 350,
    width: 300,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  text: {
    color: "white",
    fontSize: 20,
    lineHeight: 35,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    marginBottom: 25,
    width: 300
  }
});

export default DrinksList;