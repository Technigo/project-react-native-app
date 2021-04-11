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

const Overview = ( {navigation} ) => {
    const pressHandler = ( ) => {
        navigation.goBack()
    }

    return (
        <OverviewContainer>
            <Text>What are you still doing here {navigation.getParam("name")}?</Text>
            <Text> Amazed by my React Skills?</Text>
            <Button title="Change Profile" onPress={pressHandler}/>
        </OverviewContainer>
  );
};

export default Overview
