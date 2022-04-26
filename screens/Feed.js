import React, {useState} from 'react';
import { Text, View } from 'react-native';
import { Container, ButtonText, Button, Header1} from '../styles/styled-components';

import helpers from '../modules/helpers';

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Feed = ({ navigation }) => {
  const [insult, setInsult] = useState('')

  const onPressInsult = async () => {
    setInsult(await helpers.getInsult())
  }

  return (
    <Container>
      <Header1>Feed Screen</Header1>
      <View style={{width: '100%'}}>
        <Text>{insult}</Text>
        <Button onPress={onPressInsult} accentColor={true}>
          <ButtonText
            accentColor={true}>
            New insult
          </ButtonText>
        </Button>
      </View>
      
      <View style={{width: '100%'}}>
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

        
      </View>
    </Container>
  );
};
