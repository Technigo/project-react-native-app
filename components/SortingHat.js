import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

import Lottie from './Lottie';
//import LottieView from 'lottie-react-native';

//const API_KEY = '$2a$10$Z0lX96ZJ6P.Op9TcuriFReO68gPYx.pJ2YoxazzTHRFFHP/nwblpa';
//const BASE_URL = `https://www.potterapi.com/v1/houses?key=${API_KEY}`;
//const BASE_URL = 'https://www.potterapi.com/v1/sortingHat';
//const SPELLS_URL = 'spells';
//const URL = BASE_URL + SPELLS_URL + '?key=' + API_KEY;

const SortingHat = ({ navigation }) => {
  const [houses, setHouses] = useState([]);
  const [house, setHouse] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const API_KEY =
    '$2a$10$Z0lX96ZJ6P.Op9TcuriFReO68gPYx.pJ2YoxazzTHRFFHP/nwblpa';
  const BASE_URL = `https://www.potterapi.com/v1/houses?key=${API_KEY}`;

  useEffect(() => {
    fetch(BASE_URL)
      .then(result => {
        if (result.ok) {
          return result.json;
        } else {
          throw new Error('404');
        }
      })
      .then(json => {
        setHouses(json);
        setIsLoading(false);
      })
      .catch(() => {
        console.error('error');
      });
  }, []);

  const onPress = houses => {
    setHouse(houses[Math.floor(Math.random() * houses.length)]);
    return { house };
  };

  console.log(house);

  return (
    <Container>
      {isLoading && <Lottie />}
      {/* <Container>
         <LottieView
          source={require('../assets/animations/23217-sorting-hat.json')}
          autoPlay
        />
      </Container> */}
      <TouchableOpacity onPress={() => onPress(houses)}>
        <Title>Put on the sorting hat!</Title>
      </TouchableOpacity>
      {!isLoading && (
        <>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('House Details', {
                itemId: house._id,
              })
            }
          >
            <Title>{house.name}</Title>
          </TouchableOpacity>
        </>
      )}
    </Container>
  );
};

export default SortingHat;

const Container = styled.View`
flex = 1;
background-color = burgundy;
justify-content: center;
align-items: center;
`;

const Title = styled.Text`
  font-size: 50px;
  color: gold;
`;
