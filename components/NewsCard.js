import React from 'react';
import {Text, ScrollView} from 'react-native'
import styled from 'styled-components/native'

const Card = styled.View`
    flex: 1;
    flex-direction: column;
    overflow: hidden;
`

const Title = styled.Text`
    flex: 4;
    font-size: 12px;
    font-weight: 700;
`

const Img = styled.Image`
    flex: 1;
    width: 10%;
    height: 70%;
`

const NewsCard = ({title, urlToImage, source}) => {
    console.log(source)
    return (
        <Card>
            <Title>{source.name}</Title>
            <Title>{title}</Title>
            <Img source={{uri: urlToImage}}/>
        </Card>
    )
}


export default NewsCard;




