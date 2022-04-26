import React, {useState} from 'react';
import { Text, TouchableOpacity } from 'react-native';
// import styled from 'styled-components/native';
// import { Base } from '../styles';
import { Container, ButtonText, Button} from '../styles/styled-components';

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

      <Button onPress={() => navigation.openDrawer()}>
        <ButtonText>
          Open drawer
        </ButtonText>
      </Button>

      <Button onPress={() => navigation.toggleDrawer()}>
        <ButtonText>
          Toggle drawer
        </ButtonText>
      </Button>

      <Button onPress={onPressInsult}>
        <ButtonText>
          Get insult
        </ButtonText>
      </Button>
      {/* <Button title="Get insult" onPress={onPressInsult} /> */}
    </Container>
  );
};
