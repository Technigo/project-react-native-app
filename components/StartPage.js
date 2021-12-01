import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import Judith from "./Judith";
import Frans from "./Frans";
import Johannes from "./Johannes";
import Rembrandt from "./Rembrandt";

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

const ArtistPic = styled.Image`
  width: 150px;
  height: 150px;
`;

const ArtisBtn = styled.TouchableHighlight`
  align-items: center;
`;

// const GoToJudith = (navigation) => {
//   return (
//     <View>
//       <ArtisBtn onPress={() => navigation.navigate("Judith.js")}>
//         <Text>Judith</Text>
//       </ArtisBtn>
//     </View>
//   );
// };

const StartPage = (navigation) => {
  const [currentTab, setCurrentTab] = useState("");

  return (
    <StartBox>
      <Judith />
      <Frans />
      <Johannes />
      <Rembrandt />
      <Text>The golden age of Dutch</Text>
      <ImageBox>
        <ImageBoxSmall>
          <ArtistPic source={require("../assets/Judith.jpeg")} />
          <ArtisBtn>
            <Text>Judith</Text>
          </ArtisBtn>
        </ImageBoxSmall>
        <ImageBoxSmall>
          <ArtistPic source={require("../assets/Frans.png")} />
          <ArtisBtn>
            <Text>Frans</Text>
          </ArtisBtn>
        </ImageBoxSmall>
        <ImageBoxSmall>
          <ArtistPic source={require("../assets/Johannes.jpeg")} />
          <ArtisBtn>
            <Text>Joahnnes</Text>
          </ArtisBtn>
        </ImageBoxSmall>
        <ImageBoxSmall>
          <ArtistPic source={require("../assets/Rembrant.jpeg")} />
          <ArtisBtn>
            <Text>Rembrandt</Text>
          </ArtisBtn>
        </ImageBoxSmall>
      </ImageBox>
    </StartBox>
  );
};

export default StartPage;
