import React from 'react';
import { Text, View } from 'react-native';

import { 
  Container,
  Button,
  ButtonText,
  LikedInsults, 
  SafeArea,
  Header1,
  LikedInsult,
  InsultListItem
} from '../styles/styled-components';

export const Likes = ({ navigation }) => {
  return (
    <SafeArea>
      <Container>
      <Header1>Likes Screen</Header1>
    
        <LikedInsults
          bounces={true}>
          <LikedInsult>
            <InsultListItem>Ins ul tI nsu ltI ndasdasd ul tI nsu ltI ndasdasd ul tI nsu ltI ndasdasdasd ddasd su In sult</InsultListItem>
            <Text>Heart Button</Text>
          </LikedInsult>
          <LikedInsult>
            <Text>Insult</Text>
            <Text>Heart Button</Text>
          </LikedInsult>
          <LikedInsult>
            <Text>Insult</Text>
            <Text>Heart Button</Text>
          </LikedInsult>
          <LikedInsult>
            <Text>Insult</Text>
            <Text>Heart Button</Text>
          </LikedInsult>
          <LikedInsult>
            <Text>Insult</Text>
            <Text>Heart Button</Text>
          </LikedInsult>
          <LikedInsult>
            <Text>Insult</Text>
            <Text>Heart Button</Text>
          </LikedInsult>
          <LikedInsult>
            <Text>Insult</Text>
            <Text>Heart Button</Text>
          </LikedInsult>
          <LikedInsult>
            <Text>Insult</Text>
            <Text>Heart Button</Text>
          </LikedInsult>
          <LikedInsult>
            <Text>Insult</Text>
            <Text>Heart Button</Text>
          </LikedInsult>
          <LikedInsult>
            <Text>Insult</Text>
            <Text>Heart Button</Text>
          </LikedInsult>

          <LikedInsult>
            <Text>Insult</Text>
            <Text>Heart Button</Text>
          </LikedInsult>
          <LikedInsult>
            <Text>Insult</Text>
            <Text>Heart Button</Text>
          </LikedInsult><LikedInsult>
            <Text>Insult</Text>
            <Text>Heart Button</Text>
          </LikedInsult><LikedInsult>
            <Text>Insult</Text>
            <Text>Heart Button</Text>
          </LikedInsult><LikedInsult>
            <Text>Insult</Text>
            <Text>Heart Button</Text>
          </LikedInsult><LikedInsult>
            <Text>Insult</Text>
            <Text>Heart Button</Text>
          </LikedInsult>
        


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
      </LikedInsults>
    </Container>
    </SafeArea>
  );
};
