import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import {
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  View,
  ImageBackground,
  Animated,
  useWindowDimensions
} from "react-native";

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

export const ComicCard = ({
  title,
  path,
  id,
  navigation,
  setComicsId,
  comicIndex
}) => {
  const { width: windowWidth } = useWindowDimensions();
  const dimensions = useWindowDimensions();

  const handlePress = () => {
    setComicsId(title);
    navigation.navigate("ComicDetails", { id: id });
  };


    return (
      
      <TouchableOpacity onPress={() => handlePress()}>
      {dimensions.width < 768 ?(
      <View
        style={{ width: windowWidth, height: 250 }}
        key={comicIndex}
      >  
        <ImageBackground source={{ uri: `${path}/portrait_uncanny.jpg` }} style={styles.card}>
          <View style={styles.textContainer}>
            <Text style={styles.infoText}>
              {title}
            </Text>
          </View>
        </ImageBackground>
        
      </View>): (
        <Card>
        
          <ImageContainer>
            <Image source={{ uri: `${path}/portrait_uncanny.jpg` }}></Image>
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
    justifyContent: "center"
  },
  scrollContainer: {
    height: 300,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 16,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    backgroundColor: "rgba(0,0,0, 0.7)",
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 5
  },
  infoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold"
  },
  normalDot: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: "silver",
    marginHorizontal: 4
  },
  indicatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }
});
