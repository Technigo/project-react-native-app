import React from 'react';
import styled from 'styled-components/native';
import 'react-native-gesture-handler';

import backgroundImage from '../assets/sharon-mccutcheon-62vi3TG5EDg-unsplash.jpg';
import logoImage from '../assets/logo.png';

// Styling-components
import {
  ActiveRoundedButton,
  ActiveButtonText,
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

const Logo = styled.Image`
  width: 150px;
  height: 150px;
  margin-bottom: 50px;
`;

// ----------------------------------------------------------------

const HomeScreen = ({ navigation }) => {
  return (
    <Wrapper source={backgroundImage}>
      <InnerWrapper>
        <Logo source={logoImage}></Logo>
        <ActiveRoundedButton
          title="Go to Tips Screen"
          onPress={() => navigation.navigate('TipsScreen')}
        >
          <ActiveButtonText>Press for Advice</ActiveButtonText>
        </ActiveRoundedButton>
      </InnerWrapper>
    </Wrapper>
  );
};

export default HomeScreen;
