import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import styled from "styled-components/native";
import Header from "./assets/components/Header";
import Title from "./assets/components/Title";
import CustomButton from "./assets/components/CustomButton";
import LoadingPokemonCard from "./assets/components/LoadingPokemonCard";
import PokemonCard from "./assets/components/PokemonCard";

const randomizePokemon = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // max value is exclusive and min value inclusive, so the value is no lower than min but less than and not equal to max
};

// Fetch a random pokemon from Pokeapi
const fetchRandomPokemon = async () => {
  const randomPokemonId = randomizePokemon(1, 151);
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`
  );
  const json = await response.json();

  if (!json.name) {
    return fetchRandomPokemon();
  } else {
    return json;
  }
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState();

  const fetchPokemonData = () => {
    setLoading(true);
    fetchRandomPokemon().then(pokemonData => {
      setPokemon(pokemonData);
      setLoading(false);
    });
  };

  useEffect(() => {
    fetchPokemonData();
  }, []);

  return (
    <Container>
      <Header>
        <Title>Random Pokémon</Title>
      </Header>
      {loading && <LoadingPokemonCard />}
      {!loading && pokemon && (
        <PokemonCard
          image={pokemon.sprites.front_default}
          name={`${pokemon.name}`}
        />
      )}
      <CustomButton onPress={fetchPokemonData} text="New Pokémon" />
    </Container>
  );
};

const Container = styled.SafeAreaView`
  align-items: stretch;
  background-color: #cc0000;
  flex: 1;
  justify-content: center;
`;

export default App;
