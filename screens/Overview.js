import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';

const OverviewContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TextContainer = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
  text-align: justify;
`

const Overview = ( {navigation} ) => {
    const pressHandler = ( ) => {
        navigation.goBack()
    }

    return (
        <OverviewContainer>
            <TextContainer>
              So, how does that nested Stack-Navigation feel {navigation.getParam("name")}?
              You can now either go back by using the button or the arrow.
            </TextContainer>
            <Button title="Go back" onPress={pressHandler}/>
        </OverviewContainer>
  );
};

export default Overview
