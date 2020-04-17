import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { Image } from "react-native";
import logo from "../assets/got.png";

const Container = styled.View`
  flex: 1;
  background-color: honeydew;
  justify-content: center;
  align-items: center;
`;
const Title = styled.Text`
  font-size: 18px;
  color: palevioletred;
  padding: 2px;
  font-style: italic;
  margin: 0px 5px 15px 5px;
`;
const InterTitle = styled.Text`
  font-size: 30px;
  font-family: "Inter-Black";
  color: whitesmoke;
  margin: 20px 5px 15px 5px;
  padding: 6px;
  background-color: palevioletred;
  border: 0px solid black;
  border-radius: 10px;
`;
const StripedText = styled.Text`
  font-size: 18px;
  color: palevioletred;
  padding: 2px;
  background: ${(props) => (props.index % 2 === 0 ? "honeydew" : "#FAFAD2")};
`;

export const Houses = ({ navigation }) => {
  let [fontLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Black.otf"),
  });
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("https://www.anapioficeandfire.com/api/houses")
      .then((res) => res.json())
      .then((json) => setHouses(json));
  }, []);

  if (!fontLoaded) {
    return <AppLoading />;
  } else {
    return (
      <Container>
        <Image source={logo} />
        <InterTitle>Houses</InterTitle>
        <Title>Click on House for more info:</Title>
        {houses.map((house, index) => (
          <TouchableOpacity
            key={house.name}
            onPress={() => navigation.navigate("Detail", { house })}
          >
            <StripedText index={index}>{house.name}</StripedText>
          </TouchableOpacity>
        ))}
      </Container>
    );
  }
};
