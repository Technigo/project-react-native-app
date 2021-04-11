import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";

//global const
const json = require("../../assets/characters.json");

export const SetVillain = ({ route, navigation }) => {
  //local const
  const { hero } = route.params;
  const [villains, setVillains] = useState(json.villain);
  const [villain, setVillain] = useState([]);
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  //local function
  const randomVillain = () => {
    villains && setVillain(villains[Math.floor(Math.random() * 4)]);
  };

  //useEffect
  useEffect(() => {
    randomVillain();
  }, []);

  //render
  return (
    villain && (
      <Scroll>
        <Wrapper>
          <Image height={screenHeight / 2.5} source={{ uri: `${hero.image}` }}>
            <CharacterTitleContaier>
              <CharacterTitle>{hero.name}</CharacterTitle>
            </CharacterTitleContaier>
          </Image>
          <Text> VS </Text>
          <Image
            height={screenHeight / 2.5}
            source={{ uri: `${villain.image}` }}
          >
            <CharacterTitleContaier>
              <CharacterTitle>{villain.name}</CharacterTitle>
            </CharacterTitleContaier>
          </Image>
          <Button
            onPress={() =>
              navigation.push("PlayGame", {
                hero: hero,
                villain: villain,
                navigation: navigation,
              })
            }
          >
            <ButtonText>FIGHT</ButtonText>
          </Button>
        </Wrapper>
      </Scroll>
    )
  );
};

//styled components
const Scroll = styled.ScrollView`
  flex: 1;
`;
const Wrapper = styled.SafeAreaView`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Image = styled.ImageBackground`
  height: ${(props) => props.height};
  width: 100%;
  max-width: 400px;
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

const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

const Button = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: green;
  margin: 20px;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
`;
