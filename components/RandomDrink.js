import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Accelerometer } from "expo-sensors";
import IngredientsList from "./IngredientsList";

const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"]

const RandomDrink = ({ route }) => {
  const [drink, setDrink] = useState({})

  const generateQuote = async () => {
    try {
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      const data = await response.json()
      setDrink(data.drinks[0])
    } catch (error) {
      console.log(error)
    }
     
  };

  useEffect(() => {
    generateQuote();
  }, []);

  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });

  const [subscription, setSubscription] = useState(null);

  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    subscribe();

    return () => unsubscribe();
  }, []);

  const isShaking = (data) => {
    const { x, y, z } = data;
    const totalForce = Math.abs(x) + Math.abs(y) + Math.abs(z);
    return totalForce > 2;
  }

  useEffect(() => {
    if (isShaking(data)) {
      generateQuote();
    }
  }, [data]);

  return (
    <View style={styles.container}>
      <Text>{route.params.title}</Text>
      <View>
      <Text>{drink.strDrink}</Text>
      <Text>Category: {drink.strAlcoholic}</Text>
      <Image source={{ uri: drink.strDrinkThumb }} style={styles.cover} />
      <Text>Ingredients:</Text>
      <IngredientsList drink={drink} />
      <Text style={styles.text}>{drink.strInstructions}</Text>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cover: {
    width: 350,
    height: 300,
    resizeMode: 'cover',
  },
  text: {
    marginTop: 30
  }
});

export default RandomDrink;