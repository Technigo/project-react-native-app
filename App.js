import React from "react";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Judith from "./components/Judith";
import Frans from "./components/Frans";
import Johannes from "./components/Johannes";
import Rembrandt from "./components/Rembrandt";

const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Title = styled.Text`
  font-size: 30px;
  color: rgba(232, 209, 78, 1);
  margin-bottom: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 5px rgba(251, 173, 0, 0.8);
`;

const DescriptiveText = styled.Text`
  font-size: 16px;
  font-style: italic;
  color: rgba(232, 209, 78, 1);
  text-align: center;
  padding: 10px;
  width: 250px;
`;

const ArtistPic = styled.Image`
  width: 150px;
  height: 150px;
`;

const ImageBox = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const ImageBoxSmall = styled.View`
  display: flex;
  flex-direction: column;
  margin: 1px;
`;

const ArtisButton = styled.TouchableOpacity`
  background: rgba(232, 209, 78, 1);
  padding: 7px;
`;

const ButtonText = styled.Text`
  text-align: center;
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
`;

function StartScreen({ navigation }) {
  return (
    <Container>
      <Title>The Golden Age</Title>
      <ImageBox>
        <ImageBoxSmall>
          <ArtistPic source={require("./assets/Judith.jpeg")} />
          <ArtisButton onPress={() => navigation.navigate("Judith")}>
            <ButtonText>GO TO JUDITH</ButtonText>
          </ArtisButton>
        </ImageBoxSmall>
        <ImageBoxSmall>
          <ArtistPic source={require("./assets/Frans.png")} />
          <ArtisButton onPress={() => navigation.navigate("Frans")}>
            <ButtonText>GO TO FRANS</ButtonText>
          </ArtisButton>
        </ImageBoxSmall>
        <ImageBoxSmall>
          <ArtistPic source={require("./assets/Johannes.jpeg")} />
          <ArtisButton onPress={() => navigation.navigate("Johannes")}>
            <ButtonText>GO TO JOHANNES</ButtonText>
          </ArtisButton>
        </ImageBoxSmall>
        <ImageBoxSmall>
          <ArtistPic source={require("./assets/Rembrant.jpeg")} />
          <ArtisButton onPress={() => navigation.navigate("Rembrandt")}>
            <ButtonText>GO TO REMBRANDT</ButtonText>
          </ArtisButton>
        </ImageBoxSmall>
        <DescriptiveText>
          Welcome to the Golden Age of Dutch painting. Thanks to the Rijksmuseum
          you can here enjoy their collection of four of my favourite Dutch
          painters.
        </DescriptiveText>
      </ImageBox>
    </Container>
  );
}

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={StartScreen} />
        <Stack.Screen name="Judith" component={Judith} />
        <Stack.Screen name="Frans" component={Frans} />
        <Stack.Screen name="Johannes" component={Johannes} />
        <Stack.Screen name="Rembrandt" component={Rembrandt} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
