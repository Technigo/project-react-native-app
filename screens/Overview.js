import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';

// This is the main container for this screen
const OverviewContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
const Overview = ( {navigation} ) => {

    const pressHandler = ( ) => {
        navigation.goBack()
    }

    return (
        <OverviewContainer>
            <Text>{navigation.getParam("name")} what are you still doing here? Amazed by my React Skills? </Text>
            <Button title="wanna change your Profile?" onPress={pressHandler}/>
        </OverviewContainer>
  );
};

export default Overview
