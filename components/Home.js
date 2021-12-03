import React from "react";
import { Text, View, Linking } from "react-native";
import styled from "styled-components/native";

import Header from "./Header";

const ApiLink = styled.Text`
margin: 3px;
`

const Container = styled.View`
    flex: 1;
    background-color: papayawhip;
    justify-content: center;
    align-items: center;
`;

const Home = () => {
    return (
        <Container>
            <Header />
            <Text>
                Welcome to DiceRoller, which uses
                <ApiLink
                    onPress={() => Linking.openURL("http://roll.diceapi.com/")}
                >
                     DiceApi 
                </ApiLink>
                to randomise the roll of a dice.
            </Text>
            <Text>Shake to roll a D6 (a standard 6 sided die).</Text>
            <Text>Or customise your roll by choosing how many sides your dice has (a D4, D20 or even a D100!) and how many of them to roll.</Text>

        </Container>
    );
};

export default Home;
