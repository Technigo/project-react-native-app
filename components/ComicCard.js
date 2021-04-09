import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  useWindowDimensions,
} from "react-native";


export const ComicCard = ({
  title,
  path,
  id,
  navigation,
  setComicTitle,
}) => {
  const { width: windowWidth } = useWindowDimensions();

  const handlePress = () => {
    setComicTitle(title);
    navigation.navigate("ComicDetails", { id: id });
  };

  return (
    <TouchableOpacity onPress={() => handlePress()}>
      {windowWidth < 768 ? (
        <View style={{ width: windowWidth, height: 250 }}>
          <ImageBackground
            source={path &&{ uri: `${path}/portrait_uncanny.jpg` }}
            style={styles.card}
          >
            <View style={styles.textContainer}>
              <Text style={styles.infoText}>{title}</Text>
            </View>
          </ImageBackground>
        </View>
      ) : (
        <Card>
          <ImageContainer>
            <Image source={path &&{ uri: `${path}/portrait_uncanny.jpg` }}></Image>
          </ImageContainer>
          <TextContainer>
            <Title>{title}</Title>
          </TextContainer>
        </Card>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5,
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
const TextContainer = styled.View`
  width: 300px;
  background-color: black;
  height: 100px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.Text`
  color: yellow;
`;
