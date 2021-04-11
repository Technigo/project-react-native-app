import React from "react";
import styled from "styled-components/native";
import "react-native-gesture-handler";
import { ImageBackground } from "react-native";

export const BattleDisplay = ({ char, HP, alignment }) => {
  //render
  return (
    <>
      {HP && alignment === "hero" ? (
        <LifeBar>
          <Life
            life={`${(HP / char.hp) * 100}%`}
            lifecolor={`${(HP / char.hp) * 100 > 50 ? "green" : "red"}`}
          ></Life>
        </LifeBar>
      ) : (
        <></>
      )}
      <ImageContainer>
        <ImageBackground
          source={{ uri: `${char.image}` }}
          style={{
            width: "100%",
            height: 200,
            backgroundColor: "#000",
            position: "absolute",
            top: 0,
            overflow: "hidden",
          }}
          imageStyle={{
            resizeMode: "cover",
            alignSelf: "flex-end",
            height: 350,
            width: "100%",
          }}
        />
      </ImageContainer>
      {HP && alignment === "villain" ? (
        <LifeBar>
          <Life
            life={`${(HP / char.hp) * 100}%`}
            lifecolor={`${(HP / char.hp) * 100 > 50 ? "blue" : "red"}`}
          ></Life>
        </LifeBar>
      ) : (
        <></>
      )}
    </>
  );
};

//styled components
const LifeBar = styled.View`
  width: 200px;
  margin: 10px;
  height: 30px;
  position: relative;
  border-color: black;
  border-width: 2px;
  border-style: solid;
`;

const Life = styled.View`
  width: ${(props) => props.life};
  height: 27px;
  position: absolute;
  background: ${(props) => props.lifecolor};
  top: -1px;
  left: 0;
`;

const ImageContainer = styled.View`
  height: 200px;
  width: 100%;
  max-width: 400px;
  position: relative;
`;
