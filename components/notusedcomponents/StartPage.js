import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  TouchableHighlight,
  ImageBackground,
} from "react-native";
import styled from "styled-components/native";
import Judith from "../Judith";
import Frans from "../Frans";
import Johannes from "../Johannes";
import Rembrandt from "../Rembrandt";

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

const StartPage = () => {
  const [currentTab, setCurrentTab] = useState("Button");

  // const [url, setUrl] = useState("");

  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setUrl(data));
  // }, [url]);

  return (
    <StartBox>
      <Text>The golden age of Dutch</Text>

      <ImageBox>
        <ImageBoxSmall>
          <ArtistPic source={require("../assets/Judith.jpeg")} />

          <ArtisBtn onPress={() => setCurrentTab("Judiths Page")}>
            <Text>Judith</Text>
          </ArtisBtn>
        </ImageBoxSmall>

        <ImageBoxSmall>
          <ArtistPic source={require("../assets/Frans.png")} />
          <ArtisBtn onPress={() => setCurrentTab("Frans Page")}>
            <Text>Frans</Text>
          </ArtisBtn>
        </ImageBoxSmall>
        <ImageBoxSmall>
          <ArtistPic source={require("../assets/Johannes.jpeg")} />
          {/* <Button
            title="Johannes Page"
            onPress={() => setCurrentTab("Johannes Page")}
          /> */}
          <ArtisBtn onPress={() => setCurrentTab("Johannes Page")}>
            <Text>Joahnnes</Text>
          </ArtisBtn>
        </ImageBoxSmall>
        <ImageBoxSmall>
          <ArtistPic source={require("../assets/Rembrant.jpeg")} />
          <ArtisBtn onPress={() => setCurrentTab("Rembrantds Page")}>
            <Text>Rembrandt</Text>
          </ArtisBtn>
        </ImageBoxSmall>
        {currentTab === "Judiths Page" && <Judith />}
        {currentTab === "Johannes Page" && <Johannes />}
        {currentTab === "Frans Page" && <Frans />}
        {currentTab === "Rembrantds Page" && <Rembrandt />}
      </ImageBox>
    </StartBox>
  );
};

export default StartPage;
