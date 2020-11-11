import * as React from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import 'react-native-gesture-handler';

// Styling-components
import {
  ActiveRoundedButton,
  ActiveButtonText,
  Card,
  Text_C32,
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
        <Card>
          <Text_C32>HEJ!</Text_C32>
        </Card>
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
