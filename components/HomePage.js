import React, { useEffect } from 'react';
import styled from 'styled-components/native';
import headerImage from '../assets/mountain.jpg';
import { Button } from 'react-native';

const HomePage = ({ navigation, route }) => {

    useEffect(() => {
        navigation.setOptions({ headerShown: false });
    }, []);

    const navigateToHabits = () => {

        navigation.navigate("Habits")
    };

    return (
        <HomeContainer source={headerImage}>

            <TextContainer>
                <TextOne>
                    Do you want to make a diffrence
                    in you life?
            </TextOne>

                <TextTwo>
                    With New Habits you can make life
                    as you want it!
            </TextTwo>
            </TextContainer>
            <Footer>
                <Button title="New Habits >" onPress={navigateToHabits}> </Button>
            </Footer>

        </HomeContainer>
    )
};

const HomeContainer = styled.ImageBackground`
    flex: 1;    
`
const TextContainer = styled.View`
    align-items:center;
    justify-content: center;
    padding: 19px;
    margin-top: 100px;
    background: rgba(8, 8, 8, 0.565);
    margin-bottom: 80px;
`
const TextOne = styled.Text`
    font-size: 30px;
    text-align:center;
    margin-bottom: 20px;
    color: white;
`
const TextTwo = styled.Text`
    font-size: 40px;
    text-align:center;
    color: white;
`
const Footer = styled.View`
    height:180px;
    padding:58px;
    align-items:center;
`

export default HomePage;