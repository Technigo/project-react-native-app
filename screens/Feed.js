import React from 'react';
import { Text, TouchableOpacity,View } from 'react-native';
import styled from 'styled-components/native';

// This is the main container for this screen
const FeedContainer = styled.View`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  background-color: #ddd8c5;
`;

const WelcomeView = styled(View)`
  flex:1;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`

const ButtonView = styled(View)`
  flex:2;
  justify-content: center;
`
const WelcomeText = styled(Text)`
  font-size:50px;
  color:#7f8b7c;
  text-align: center;
`
const TouchButton = styled(TouchableOpacity)`
  background-color:#e68577;
  height: 200px;
  width: 200px;
  border-radius:100%;
  justify-content: center;
  align-items: center;
`
const ButtonText = styled(Text)`
  color:#7f8b7c;
  text-align: center;
  font-size: 20px;
  word-wrap:break-word;
`


// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Feed = ({ navigation }) => {
  return (
    <FeedContainer>
      <WelcomeView>
        <WelcomeText>Hello and welcome!</WelcomeText>
      </WelcomeView>
      <ButtonView>
        <TouchButton onPress={()=> navigation.toggleDrawer()}>
          <ButtonText>Check some fun out!</ButtonText>
        </TouchButton>
      </ButtonView>
    </FeedContainer>
  );
};
