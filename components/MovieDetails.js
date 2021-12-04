import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { useFonts } from 'expo-font';


import {
  View,
  StyleSheet,
  StatusBar,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { DETAILS_URL } from '../utils/urls';


export const MovieDetails = ({ route, navigation }) => {

  const [loaded] = useFonts({
    AdventPro: require('../assets/fonts/AdventPro-SemiBold.ttf'),
});


  const { movieId } = route.params;
  const [details, setDetails] = useState();

  useEffect(() => {
    fetch(DETAILS_URL(movieId))
      .then((res) => res.json())
      .then((data) => {
        setDetails(data);

      });
  }, [movieId]);

  return (

    <Container>

      {details && (
        <View>
          <ScrollView style={styles.scrollView}>
            <MovieImage source={{ uri: `https://image.tmdb.org/t/p/w500${details.poster_path}` }} style={styles.image} />
            <Title>{details.title}</Title>
            <DetailsText>{details.overview}</DetailsText>
            <Rate>
              Rating {details.vote_average}/10
            </Rate>
          </ScrollView>
        </View>
      )
      }
    </Container>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'black',
  },
});

const Container = styled.View`
	flex: 1;
	background-color: black;
`;

const Title = styled.Text`
	color: white;
  text-transform: uppercase;
	font-size: 24px;
	font-weight: bold;
	margin: 10px auto;
	text-align:center;
  font-family: 'AdventPro';
`;

const DetailsText = styled.Text`
	font-size: 16px;
	font-weight: 100;
	color: white;
  text-align:center;
  padding: 0 5px 0 5px;
	margin-bottom: 10px;
  font-family: 'AdventPro';
`;

const Rate = styled.Text`
  text-align:center;
	font-size: 16px;
	font-weight: normal;
	margin-bottom: 20px;
  padding: 0 5px 0 5px;
  color: rgb(243,206,19);
  font-family: 'AdventPro';
`;

const MovieImage = styled.Image`
	width: 100%;
	height: 500px;
`;