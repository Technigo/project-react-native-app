import React from "react";
import { View, Text, Image, Button, TouchableHighlight } from "react-native";
import styled from "styled-components/native";
import Judith from "./Judith";

const StartBox = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImageBox = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 80vw;
`;

const ImageBoxSmall = styled.View`
  display: flex;
  flex-direction: column;
`;

const ArtisBtn = styled.TouchableHighlight`
  align-items: center;
`;

const StartPage = () => {
  return (
    <StartBox>
      <Judith />
      <Text>The golden age of Dutch</Text>
      <ImageBox>
        <ImageBoxSmall>
          <Image
            source={require("../assets/Judith.jpeg")}
            style={{ width: 150, height: 150 }}
          />
          <ArtisBtn>
            <Text>Judith</Text>
          </ArtisBtn>
        </ImageBoxSmall>
        <ImageBoxSmall>
          <Image
            source={require("../assets/Frans.png")}
            style={{ width: 150, height: 150 }}
          />
          <ArtisBtn>
            <Text>Frans</Text>
          </ArtisBtn>
        </ImageBoxSmall>
        <ImageBoxSmall>
          <Image
            source={require("../assets/Johannes.jpeg")}
            style={{ width: 150, height: 150 }}
          />
          <ArtisBtn>
            <Text>Joahnnes</Text>
          </ArtisBtn>
        </ImageBoxSmall>
        <ImageBoxSmall>
          <Image
            source={require("../assets/Rembrant.jpeg")}
            style={{ width: 150, height: 150 }}
          />
          <ArtisBtn>
            <Text>Rembrant</Text>
          </ArtisBtn>
        </ImageBoxSmall>
      </ImageBox>
    </StartBox>
  );
};

export default StartPage;
