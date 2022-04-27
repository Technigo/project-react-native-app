import React, {useState} from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { Entypo } from '@expo/vector-icons';


import { Container, ButtonText, Button, Header1, Burger, SafeArea } from '../styles/styled-components';

import helpers from '../modules/helpers';

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Feed = ({ navigation }) => {
  const [phrase, setPhrase] = useState(null);
  const [loading, setLoading] = useState(false);

  const onPressphrase = async () => {
    setLoading(true)
    setPhrase(await helpers.getPhrase());
    setLoading(false);
  }

  return (
    // <SafeArea>
    <Container>
      <Burger onPress={() => navigation.openDrawer()}>
          <ButtonText>
          <Entypo name='menu' size={30} color='#000' />
          </ButtonText>
      </Burger>
      <Header1>Feed Screen</Header1>
      <View style={{width: '100%'}}>
        {loading ? <ActivityIndicator size="small" color="#0000ff" /> : <Text>{phrase}</Text>}
        <Button onPress={onPressphrase} accentColor={true}>
          <ButtonText
            accentColor={true}>
            New phrase
          </ButtonText>
        </Button>
      </View>
      
      <View style={{width: '100%'}}>
        {/* <Burger onPress={() => navigation.openDrawer()}>
          <ButtonText>
            Open drawer
          </ButtonText>
        </Burger> */}

        <Button onPress={() => navigation.toggleDrawer()}>
          <ButtonText>
            Toggle drawer
          </ButtonText>
        </Button>

        
      </View>
    </Container>
  );
};
