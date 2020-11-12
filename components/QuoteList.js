import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import styled from 'styled-components/native'

import Quotes from '../data/quotes.json';
import StaticImages from './StaticImage.js';

export const QuoteList = ({navigation}) => {
    return ( 
        <SafeAreaView style={styles.container}>
            <ViewContainer>
                <TextContainer>
                    <TitleText>POSITIVE QUOTES</TitleText>
                    <SubtitleText>Click on a symbol to read a quote</SubtitleText>
                </TextContainer>
                <ButtonContainer>                
                    {Quotes.map((quotes) => (
                        <IconButton
                            title={'quotes.id'} 
                            onPress={()=> navigation.navigate('Detail', quotes)} 
                            key={quotes.id}>                    
                            <IconImage source={StaticImages[quotes.id]} resizeMode={'contain'}/> 
                        </IconButton>
                    ))}               
                </ButtonContainer>
            </ViewContainer>
        </SafeAreaView>      
    );
};

const ViewContainer = styled.View`
    background-color: white;
    align-items: center;
    
`;

const TextContainer = styled.View`
    flex-direction: row;
`;

const TitleText = styled.Text`
    font-size: 20px;
    color: #fff;
    text-align: center;
    background-color: rgb(236, 222, 95);
    padding: 30px 20px;
    font-weight: 600;
`;

const SubtitleText = styled.Text`
    font-size: 18px;
    text-align: center;
    color: #fff;
    font-weight: 400;
    background-color: rgb(255, 192, 203);
    padding: 30px 20px;
`; 

const ButtonContainer = styled.View`
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`;

const IconButton = styled.TouchableOpacity`
    width: 50%; 
    height: 100%;  
    padding: 5px;    
`;

const IconImage = styled.Image`
    width: 100%;
    height: 100%;     
`;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(255, 255, 255);",
    }
});

/* 
SafeAreaView: Renders content within the safe boundaries of a device
View: A cotainer that supports layout with flexbox, style etc. 
*/



