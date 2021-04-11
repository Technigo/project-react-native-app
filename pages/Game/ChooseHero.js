import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import styled from "styled-components/native";

//global const
const json = require("../../assets/characters.json");

export const ChooseHero = ({ navigation }) => {
  //local const
  const [heroes, setHeroes] = useState([]);

  //local functions
  const onSetChar = () => {
    setHeroes(json.hero);
  };

  //useEffects
  useEffect(() => {
    onSetChar();
  }, []);

  //render
  return (
    <Scroll>
      <Title>Choose a hero</Title>
      <Wrapper>
        {heroes.map((hero) => (
          <Button
            key={hero.name}
            onPress={() => navigation.push("SetVillain", { hero: hero })}
          >
            <ImageContainer>
              <Image source={{ uri: `${hero.image}` }}>
                <CharacterTitleContaier>
                  <CharacterTitle>{hero.name}</CharacterTitle>
                </CharacterTitleContaier>
              </Image>
            </ImageContainer>
          </Button>
        ))}
      </Wrapper>
    </Scroll>
  );
};

//styled componnents
const Scroll = styled.ScrollView`
  flex: 1;
`;

const Wrapper = styled.View`
  justify-content: space-evenly;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Button = styled.TouchableOpacity`
  height: 450px;
  width: 300px;
`;

const ImageContainer = styled.View`
  flex: 1 1 auto;
`;

const Image = styled.ImageBackground`
  flex: 1;
  height: 450px;
  width: 300px;
  margin-bottom: 20px;
`;

const CharacterTitleContaier = styled.View`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CharacterTitle = styled.Text`
  font-size: 24px;
  padding-vertical: 10px;
  font-weight: bold;
  color: white;
  width: 100%;
  text-align: center;
  background: rgba(0, 0, 0, 0.5);
`;

const Title = styled.Text`
flex: 1;
margin-top: 30px;
font-size: 30px;
text-align: center
font-weight: bold`;
