import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

// Styling-components
import {
  ActiveRoundedButton,
  ActiveButtonText,
} from '../styling-components/Global';

const Wrapper = styled.View`
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
    <Wrapper>
      <InnerWrapper>
        <ActiveRoundedButton
          title="Go to Recept"
          onPress={() => navigation.navigate('ReceptNamn')}
        >
          <ActiveButtonText>Get some tips</ActiveButtonText>
        </ActiveRoundedButton>
      </InnerWrapper>
    </Wrapper>
  );
};

export default HomeScreen;
