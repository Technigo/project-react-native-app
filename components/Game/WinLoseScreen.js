import React, { useEffect, useState } from "react";
import "react-native-gesture-handler";
import { useWindowDimensions } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

export const WinLoseScreen = ({ route, navigation }) => {
  const { hero, villain, winner } = route.params;
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  return (
    <>
      <Scroll>
        <Wrapper>
          {winner ? (
            <>
              <Text> Congratulations, you won!</Text>
              <Image
                height={screenHeight / 2.5}
                source={{ uri: `${hero.image}` }}
              >
                <CharacterTitleContaier>
                  <CharacterTitle>{hero.name}</CharacterTitle>
                </CharacterTitleContaier>
              </Image>
              <Text> BEAT </Text>
              <Image
                height={screenHeight / 2.5}
                source={{ uri: `${villain.image}` }}
              >
                <CharacterTitleContaier>
                  <CharacterTitle>{villain.name}</CharacterTitle>
                </CharacterTitleContaier>
              </Image>
            </>
          ) : (
            <>
              <Text> Sorry, you lost. </Text>
              <Image
                height={screenHeight / 2.5}
                source={{ uri: `${villain.image}` }}
              >
                <CharacterTitleContaier>
                  <CharacterTitle>{villain.name}</CharacterTitle>
                </CharacterTitleContaier>
              </Image>
              <Text> BEAT </Text>
              <Image
                height={screenHeight / 2.5}
                source={{ uri: `${hero.image}` }}
              >
                <CharacterTitleContaier>
                  <CharacterTitle>{hero.name}</CharacterTitle>
                </CharacterTitleContaier>
              </Image>
            </>
          )}
          <Button onPress={() => navigation.navigate("ChooseHero")}>
            <ButtonText>Play Again</ButtonText>
          </Button>
        </Wrapper>
      </Scroll>
    </>
  );
};

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

const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
