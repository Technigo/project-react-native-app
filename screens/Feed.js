import React, {useState} from 'react';
import { Text, View, ActivityIndicator, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';


import { Container, ButtonText, Button, Header1, Burger, WhiteBackground } from '../styles/styled-components';

import helpers from '../modules/helpers';

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Feed = ({ navigation, isLoggedIn, setPhrases, image }) => {
  const [phrase, setPhrase] = useState(null);
  const [loading, setLoading] = useState(false);
  const [disableButton, setDisableButton] = useState(true);

  const onPressphrase = async () => {
    setLoading(true)
    setPhrase(await helpers.getPhrase());
    setLoading(false);
    setDisableButton(false);
  }

  const onSavePhrase = () => {
    if (phrase) {
      setPhrases(phrases => [...phrases, phrase]);
      setDisableButton(true);
    }
  } 

  return (
    <ImageBackground source={image} resizeMode='cover' style={{width: '100%', flex: 1}}>
        <WhiteBackground>
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
        <Button disabled={(disableButton || !isLoggedIn)} onPress={onSavePhrase} accentColor={true}>
          <ButtonText accentColor={true}>Save</ButtonText>
        </Button>
      </View>
      
      <View style={{width: '100%'}}>
        <Button onPress={() => navigation.toggleDrawer()}>
          <ButtonText>
            Toggle drawer
          </ButtonText>
        </Button>
      </View>
    </Container>
    </WhiteBackground>
    </ImageBackground>
  );
};
