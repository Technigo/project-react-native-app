import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import "react-native-gesture-handler";
import {
  ActivityIndicator,
  ImageBackground,
  useWindowDimensions,
} from "react-native";

import { FULLCOMIC_URL } from "../reusables/urls";

export const ComicDetails = ({ route, navigation }) => {

  //local consts
  const [comic, setComic] = useState();
  const [loading, setloading] = useState(true);
  const { id } = route.params;
  const {height: windowHeight } = useWindowDimensions();

  //useEffect
  useEffect(() => {
    let mounted = true;
    fetch(FULLCOMIC_URL(id))
      .then((res) => res.json())
      .then((comic) => setComic(comic.data.results[0]))
      .then(() => {
        if (mounted) {
          setloading(false);
        }
      });
    return function cleanup() {
      mounted = false;
    };
  }, [setComic, id]);

  //render
  return loading ? (
    <LoadingContainer>
      <ActivityIndicator size="large" color="#00ff00" />
    </LoadingContainer>
  ) : (
    <>
      {comic && (
        <Wrapper>
          <ImageBackground
            source={
              comic.images[0] && {
                uri: `${comic.images[0].path}/portrait_uncanny.jpg`,
              }
            }
            style={{ flex: 1, minHeight: windowHeight}}
            imageStyle={{ resizeMode: "repeat" }}
          >
            <Overlay>
              <Container>
                <ImageContainer>
                  {comic.images[0] ? (
                    <Image
                      source={{
                        uri: `${comic.images[0].path}/portrait_uncanny.jpg`,
                      }}
                    />
                  ) : (
                    <Title>No Image available </Title>
                  )}
                </ImageContainer>
                <TextContainer>
                  <Title>{comic.title}</Title>
                  <DetailText>
                    {comic.textObjects[0]
                      ? comic.textObjects[0].text
                      : "No description"}
                  </DetailText>
                </TextContainer>
              </Container>
              <Button onPress={() => navigation.goBack()}>
                <ButtonText>Back</ButtonText>
              </Button>
            </Overlay>
          </ImageBackground>
        </Wrapper>
      )}
    </>
  );
};


//styled components
const LoadingContainer = styled.View `
    flex: 1;
    justify-content: center;
    flex-direction: row;
    padding: 10px;
`
const Wrapper = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: black;
`;

const Overlay = styled.ScrollView`
  flex: 1;
  background-color: rgba(255, 255, 255, 0.8);
`;

const Container = styled.View`
  flex: 1 1 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 700px;
`;
const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 50px;
  width: 300px;
  color:black;
`;

const ImageContainer = styled.View`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
`;
const Image = styled.Image`
  margin: 20px;
  height: 450px;
  width: 300px;
`;

const TextContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin: 20px;
  align-items: center;
`;

const DetailText = styled.Text`
  width: 300px;
  color:black;
`;

const Button = styled.TouchableOpacity`
  height: 30px;
  width: 100px;
  background: white;
  border-color: grey;
  border-style: solid;
  border-width: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px;
  border-radius: 10px;
`;

const ButtonText = styled.Text`
  color: black;
`;
