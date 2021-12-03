import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';


import {
  Text,
  Image,
  View,
  StyleSheet,
  Button,
  StatusBar,
  ImageBackground,
  ScrollView,
  TouchableOpacity
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
          <GoBackButton>
              <Icon.Button
                name="arrow-left"
                backgroundColor="transparent"
                size={20}
                onPress={() => navigation.goBack()} g title="Back">
              </Icon.Button>
            </GoBackButton>
            <ImageBackground source={{ uri: `https://image.tmdb.org/t/p/w780${details.poster_path}` }} resizeMode="cover" style={styles.background} />
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
  moviePoster: {
    width: '100%',
    height: 500,
  }, container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight,
  },

  background: {
    width: '100%',
    height: 500,
  },

  scrollView: {
    backgroundColor: 'black',
    marginHorizontal: 10,
  },
});


const Container = styled.SafeAreaView`
	background-color: black;
`;

const GoBackButton = styled.TouchableOpacity`
margin-top: 10px;
padding-right: 0px;
color: white;
height: 40px;
width:15%;
border-radius: 50px;
`;

const Title = styled.Text`
	color: white;
	font-size: 25px;
	font-weight: bold;
	margin: 10px auto;
	text-align:center;
  text-transform: uppercase;
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
	font-size: 16px;
	font-weight: 100;
  text-transform: uppercase;
  text-align:center;
	margin-bottom: 20px;
  padding: 0 5px 0 5px;
  color: rgb(243,206,19);
  font-family: 'AdventPro';
`;