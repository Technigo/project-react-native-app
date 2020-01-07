import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  View
} from "react-native";
import styled from "styled-components/native";

const randomizePokemon = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // max value is exclusive and min value inclusive, so the value is no lower than min but less than and not equal to max
};

const fetchRandomPokemon = async () => {
  const randomPokemonId = randomizePokemon(1, 151);
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`
  );
  const json = await response.json();

  if (json.status_code === 34 || !json.name) {
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
        <Title>Pokémon</Title>
      </Header>
      {loading && (
        <PokemonCard>
          <LoadingSpinner size="large" />
        </PokemonCard>
      )}
      {!loading && pokemon && (
        <PokemonCard>
          <ImageContainer>
            <PokemonSprite source={{ uri: pokemon.sprites.front_default }} />
          </ImageContainer>
          <PokemonName>{pokemon.name}</PokemonName>
          <PokemonTypes>
            <Label>Type:</Label>
            {pokemon.types.map(pokemonType => (
              <PokemonType key={pokemonType.slot}>
                {pokemonType.type.name}
              </PokemonType>
            ))}
          </PokemonTypes>
        </PokemonCard>
      )}
      <NewPokemonButton onPress={fetchPokemonData}>
        <ButtonText>New Pokémon</ButtonText>
      </NewPokemonButton>
    </Container>
  );
};

const LoadingSpinner = styled.ActivityIndicator`
  align-self: center;
  margin-top: auto;
`;

const Container = styled.SafeAreaView`
  align-items: stretch;
  background-color: #cc0000;
  flex: 1;
  justify-content: center;
`;

const ImageContainer = styled.View`
  align-items: center;
  background-color: #000;
`;

const Header = styled.View`
  align-items: center;
  background-color: #cc0000;
  flex: 1;
  justify-content: center;
`;

const PokemonSprite = styled.Image`
  height: 200;
  width: 200;
`;

const NewPokemonButton = styled.TouchableOpacity`
  align-items: center;
  background-color: #3b4cca;
  flex: 1;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const Label = styled.Text`
  color: #000;
  font-size: 18px;
  font-weight: bold;
`;

const PokemonCard = styled.View`
  background-color: #c0c0c0;
  flex: 8;
`;

const PokemonTypes = styled.View`
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

const Description = styled.Text`
  color: blue;
  font-size: 18px;
  font-weight: bold;
`;

const PokemonName = styled.Text`
  background-color: #f9a602;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  padding-top: 10px;
  padding-bottom: 10px;
  text-align: center;
  text-transform: capitalize;
`;

const PokemonType = styled.Text`
  color: blue;
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
`;

export default App;
