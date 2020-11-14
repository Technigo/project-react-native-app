import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import styled from 'styled-components/native'

import BackgroundImage from './icons/Background.png'

const Heart = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <ButtonContainer>
                <BackButton title="Back" onPress={() => navigation.navigate('Positive quotes')}>
                    <ButtonText><ArrowText>◀</ArrowText>Back</ButtonText>
                </BackButton>
            </ButtonContainer>
            <ViewContainer>
                <BackgroundImageContainer source={BackgroundImage} resizeMode={"contain"}>
                    <QuoteContainer>
                        <QuoteText>"The secret of attraction is to love yourself"</QuoteText>
                        <AuthorText>- DEEPAK CHOPRA -</AuthorText>
                    </QuoteContainer>
                </BackgroundImageContainer>
            </ViewContainer>
        </SafeAreaView>
    );
};

const ButtonContainer = styled.View`    
    background-color: rgb(236, 222, 95); 
`;

const BackButton = styled.TouchableOpacity`
    height: 68px;
    text-align: left;
    padding: 20px;    
`;

const ArrowText = styled.Text`
    font-size: 20px;
    margin-right: 7px;
`;

const ButtonText = styled.Text`
    color: rgb(255, 255, 255);
    font-size: 20px;
    font-weight: 500;
`;

const ViewContainer = styled.View`
    height: 700px;    
    align-items: center;
    justify-content: center;
`;

const BackgroundImageContainer = styled.ImageBackground`
    width: 98%;
    height: 100%;
    align-items: center;
    justify-content: center; 
`;

const QuoteContainer = styled.View`
    align-items: center;
    background-color: rgba(255, 192, 203, .9);
    padding: 20px;
    margin: 0 10px;
    text-align: center;
`;

const QuoteText = styled.Text`
    font-size: 30px;
    color: rgb(255, 255, 255);
    font-weight: 600;
    font-style: italic;  
`;

const AuthorText = styled.Text`
    font-size: 18px;
    padding: 10px;
    color: rgb(255, 255, 255);
    margin-top: 10px;
    font-weight: 500;
`;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(255, 255, 255)",
    }
});

export default Heart;