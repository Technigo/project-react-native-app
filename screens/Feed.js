import React, {useState} from 'react';
import { Text, Button, TouchableOpacity } from 'react-native';
// import styled from 'styled-components/native';
import { Base, Typography } from '../styles';
import { Container } from '../styles/styled-components/styled-components';

import helpers from '../modules/helpers';

// This is the main container for this screen
// const FeedContainer = styled.View`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   width: 80%;
//   margin: 0 auto;
// `;

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Feed = ({ navigation }) => {
  const [insult, setInsult] = useState('')

  const onPressInsult = async () => {
    setInsult(await helpers.getInsult())
  }

  return (
    <Container>
      <Text>Feed Screen</Text>
      {/* {insult && ( */}
        <Text>{insult}</Text>
      {/* <Button title="Open drawer" onPress={() => navigation.openDrawer()} /> */}
      {/* <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} /> */}

      <TouchableOpacity onPress={() => navigation.openDrawer()} style={Base.button}>
        <Text style={Typography.button}>
          Open drawer
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={Base.button}>
        <Text style={Typography.button}>
          Toggle drawer
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressInsult} style={Base.button}>
        <Text style={Typography.button}>
        Get insult
        </Text>
      </TouchableOpacity>
      {/* <Button title="Get insult" onPress={onPressInsult} /> */}
    </Container>
  );
};
