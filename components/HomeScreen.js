import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import 'react-native-gesture-handler';

import backgroundImage from '../assets/sharon-mccutcheon-62vi3TG5EDg-unsplash.jpg';

// Styling-components
import {
  ActiveRoundedButton,
  ActiveButtonText,
  Card,
  Text_C32,
} from '../styling-components/Global';

const Wrapper = styled.ImageBackground`
  background: #fff;
  flex: 1;
`;

const InnerWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

// ----------------------------------------------------------------

const HomeScreen = ({ navigation }) => {
  return (
    <Wrapper source={backgroundImage}>
      <InnerWrapper>
        <ActiveRoundedButton
          title="Go to Tips Screen"
          onPress={() => navigation.navigate('TipsScreen')}
        >
          <ActiveButtonText>Get some brilliant tips now</ActiveButtonText>
        </ActiveRoundedButton>
      </InnerWrapper>
    </Wrapper>
  );
};

export default HomeScreen;
