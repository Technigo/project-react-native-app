import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import { View, TouchableOpacity } from 'react-native';

const Container = styled.View`
flex = 1;
background-color = darkred;
justify-content: center;
align-items: center;
`;

const Title = styled.Text`
  font-size: 50px;
  ${props => `color: ${props.color}`};
  color: ${props => (props.color === 'scarlet' ? 'red' : props.color)};
`;

const API_KEY = '$2a$10$Z0lX96ZJ6P.Op9TcuriFReO68gPYx.pJ2YoxazzTHRFFHP/nwblpa';

const HouseDetails = ({ route, navigation }) => {
  const [houses, setHouses] = useState([]);

  const { itemId } = route.params;
  console.log(itemId);

  const BASE_URL = `https://www.potterapi.com/v1/houses/${itemId}?key=${API_KEY}`;

  useEffect(() => {
    fetch(BASE_URL)
      .then(result => result.json())
      .then(json => setHouses(json));
    console.log(houses);
  }, []);

  console.log(houses);
  //console.log(houses.name);
  //console.log(houses.members);

  return (
    <Container>
      {houses.map(house => (
        <>
          <Title key={house.name} color={house.colors[1]}>
            {house.name}
          </Title>

          {house.members.map(member => (
            <View key={member._id}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Character Details', {
                    itemId: member._id,
                  })
                }
              >
                <Title color={house.colors[0]}>{member.name}</Title>
              </TouchableOpacity>
            </View>
          ))}
        </>
      ))}
    </Container>
  );
};

export default HouseDetails;
