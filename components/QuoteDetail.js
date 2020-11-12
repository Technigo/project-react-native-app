import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import styled from 'styled-components/native'

import BackgroundImage from './icons/Background.png'

export const QuoteDetail = ({route, navigation}) => {

const { quote, author,  id } = route.params;
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
                        <QuoteText>{quote}</QuoteText>
                        <AuthorText>{author}</AuthorText>
                    </QuoteContainer>
                </BackgroundImageContainer>
            </ViewContainer>
        </SafeAreaView>
    );
};

const ViewContainer = styled.View`
    height: 100%;
    margin: auto;
    align-items: center;
    justify-content: center; 
`;

const ButtonContainer = styled.View`    
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 2;
`;

const BackButton = styled.TouchableOpacity`
    padding: 5px;
    margin: 10px;
    text-align: center;     
`;

const ArrowText = styled.Text`
    font-size: 20px;
    margin-right: 7px;
`;

const ButtonText = styled.Text`
    color: rgb(255, 192, 203);
    font-size: 18px;
    font-weight: 500;
`;

const BackgroundImageContainer = styled.ImageBackground`
    width: 100%;
    height: 100%;
    margin: auto;
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
