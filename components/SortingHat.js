import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import LottieLoader from './LottieLoader';
import SortingHatImage from '../assets/sorting-hat.jpg';

const SortingHat = ({ navigation }) => {
  //const [movies, setMovies] = useState([]);
  const [randomMovie, setRandomMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY = '29ee910f5072fe7c4bc00a08633532c0';
  const BASE_URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

  useEffect(() => {
    fetch(BASE_URL)
      .then(result => result.json())
      .then(json => {
        //setMovies(json.results);
        setRandomMovie(
          json.results[Math.floor(Math.random() * json.results.length)]
        );
        setIsLoading(false);
      });

    // .then(result => {
    //   if (result.ok) {
    //     return result.json;
    //   } else {
    //     throw new Error('404');
    //   }
    // })
    // .then(json => {
    //   setMovies(json.results);
    //   setRandomMovie(movies[Math.floor(Math.random() * movies.length)]);
    //   setIsLoading(false);
    // })
    // .catch(() => {
    //   console.error('error');
    // });
  }, []);

  //setRandomMovie(movies[Math.floor(Math.random() * movies.length)]);

  console.log(randomMovie);

  // const onPress = movies => {
  //   setRandomMovie(movies[Math.floor(Math.random() * movies.length)]);
  //   return { randomMovie };
  // };

  console.log(randomMovie);

  return (
    <>
      <Text>Hello</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Movie Detail', {
            itemId: randomMovie.id,
          });
          // onPress(movies);
          // {
          //   randomMovie &&

          // }
        }}
      >
        <Text>Click me</Text>
      </TouchableOpacity>
      {/* {!isLoading && (
        <>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Movie Detail', {
                itemId: randomMovie.id,
              })
            }
          >
            <Text>{randomMovie.title}</Text>
          </TouchableOpacity>
        </>
      )} */}
      {/* <HouseButton onPress={onPress(movies)}>
        <Text>Press me</Text>
      </HouseButton>
      <Text>{randomMovie}</Text> */}
    </>
    // <HatImageContainer source={SortingHatImage}>
    //   {/* <Image source={SortingHatImage} /> */}
    //   {/* <HatImage source={SortingHatImage} /> */}
    //   <SortingButton onPress={onPress(houses)}>
    //     <SortingText>Put on the sorting hat!</SortingText>
    //   </SortingButton>
    //   {/* {isLoading ? (
    //     <LottieLoader />
    //   ) : (
    //     <>
    //       <HouseButton
    //         onPress={
    //           onPress(houses)
    //           // navigation.navigate('Movie Detail', {
    //           //   itemId: house.id,
    //           // })
    //         }
    //       >
    //         {/* <HouseText color={house.colors[1]}>
    //         <HouseText color="red">{house.original_title}</HouseText>
    //       </HouseButton>
    //     </>
    //   )} */}
    // </HatImageContainer>
  );
};

export default SortingHat;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const SortingText = styled.Text`
  font-size: 18px;
  color: gold;
`;

// const HouseText = styled.Text`
//   font-size: 35px;
//   color: ${props => (props.color === 'scarlet' ? 'red' : props.color)};
// `;

const SortingButton = styled.TouchableOpacity`
  width: 90%;
  border: 2px solid gold;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.8)
  margin: 20px 0;
  padding: 20px;
  color: gold;
`;

const HouseButton = styled.TouchableOpacity`
  width: 90%;
  border-radius: 5px;
  margin: 20px 0;
  padding: 20px;
  color: #000;
`;

const HatImage = styled.Image`
  width: 30px;
  height: 30px;
  margin: 15px;
  color: gold;
`;

const HatImageContainer = styled.ImageBackground`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-top: 100px;
  text-align: center;
`;
