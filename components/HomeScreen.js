import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const HomeContainer = styled.ImageBackground`
    flex: 1;
    align-items: center; 
    justify-content: center; 
    padding: 18px; 
`;

const HeaderText = styled.Text`
    font-size: 40px;
    font-weight: bold;
    opacity: 1;
`;

const SubHeaderText = styled.Text`
    font-size: 15px;
    opacity: 1;
    font-weight: bold, italic; 
`;

const ButtonContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin: 15px;
    opacity: 1;
`;

const EachButton = styled.TouchableOpacity`
    background-color: pink;
    padding: 10px;
    margin: 10px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    opacity: 1;
`;

const ButtonText = styled.Text`
    color: #000;
    font-size: 15px;
`;

export const HomeScreen = ({ navigation }) => {
    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, []);

    const navigateToJumping = () => {
        navigation.navigate("Jumping", { name: "Jumping" });
    };

    const navigateToDressage = () => {
        navigation.navigate("Dressage", { name: "Dressage" });
    };

    return (
        <HomeContainer style={{ opacity: 0.9 }} source={{
            uri: "https://images.unsplash.com/photo-1584817791214-a47da4499486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"
        }}
        >
            <HeaderText>Övningsbanken</HeaderText>
            <SubHeaderText>Hitta övningar för dig och din häst.</SubHeaderText>

            <ButtonContainer>
                <EachButton title="Hoppning" onPress={navigateToJumping}>
                    <ButtonText>
                        Hoppning
                        </ButtonText>
                </EachButton>

                <EachButton title="Dressyr" onPress={navigateToDressage}>
                    <ButtonText>
                        Dressyr
                    </ButtonText>
                </EachButton>
            </ButtonContainer>
        </HomeContainer>
    );
};

export default HomeScreen;