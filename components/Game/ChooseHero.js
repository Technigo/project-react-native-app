import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import styled from "styled-components/native";

const json = require("../../assets/characters.json");

export const ChooseHero = ({ navigation }) => {
  const Stack = createStackNavigator();
  const [characters, setCharacters] = useState([]);

  const onSetChar = () => {
    setCharacters(json.hero);
  };

  useEffect(() => {
    onSetChar();
  }, []);

  return (
    <Scroll>
    <Title>Choose a hero</Title>
    <Wrapper>
 
      {characters.map((hero) => (
        <Button
         key={hero.name}
          onPress={() => navigation.navigate("PlayGame", { hero: hero.name })}
        >
          <ImageContainer>
            <Image source={{ uri: `${hero.image}` }}></Image>
          </ImageContainer>
          <HeroName>{hero.name}</HeroName>
        </Button>
      ))}
    </Wrapper>
    </Scroll>
  );
};

const Scroll = styled.ScrollView`
  flex: 1;
`;

const Wrapper = styled.View `
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;`

const Button = styled.TouchableOpacity`
height: 450px;
width: 300px;
`;

const ImageContainer = styled.View`
  flex: 1 1 auto;
`;

const Image = styled.Image`
  flex: 1;
  height: 450px;
  width: 300px;
`;
const Title = styled.Text`
flex: 1;
font-size: 30px;
text-align: center
font-weight: bold`;
const HeroName = styled.Text``;
