import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {
  StyleSheet,
  View,
  ImageBackground,
  useWindowDimensions,
} from "react-native";

export const ComicCard = ({ title, path, id, navigation, setComicTitle }) => {
  const { width: windowWidth } = useWindowDimensions();

  const handlePress = () => {
    setComicTitle(title);
    navigation.navigate("ComicDetails", { id: id, navigation });
  };

  return (
    <TouchableOpacity onPress={() => handlePress()}>
      {windowWidth < 768 ? (
        <View style={{ width: windowWidth, height: 250 }}>
          <ImageBackground
            source={path && { uri: `${path}/portrait_uncanny.jpg` }}
            style={styles.backgroundImg}
          >
            <MobileTextContainer>
              <MobileTitle>{title}</MobileTitle>
            </MobileTextContainer>
          </ImageBackground>
        </View>
      ) : (
        <Card>
          <ImageContainer>
            <Image
              source={path && { uri: `${path}/portrait_uncanny.jpg` }}
            ></Image>
          </ImageContainer>
          <WebTextContainer>
            <WebTitle>{title}</WebTitle>
          </WebTextContainer>
        </Card>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backgroundImg: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const Card = styled.View`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

const ImageContainer = styled.View`
  height: 450px;
  width: 300px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
const WebTextContainer = styled.View`
  width: 300px;
  background-color: black;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

const MobileTextContainer = styled.View`
background-color: rgba(0,0,0, 0.7);
padding-horizontal: 24px;
padding-vertical: 8px;
border-radius: 5px;
`
const MobileTitle = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  `


const WebTitle = styled.Text`
  color: yellow;
`;
