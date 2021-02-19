import React from 'react';
import styled from 'styled-components/native';
import { TouchableHighlight } from 'react-native';

//Style
const Container = styled.View`
    margin-left: 15;
`

const Bookcover = styled.Image`
    border-radius: 10;
    width: 144;
    height: 227;
`

const Title = styled.Text`
    font-size: 13;
    color: #161616;
    font-weight: 700;
    padding-top: 5;
    letter-spacing: 0.5;
    text-transform: capitalize; 
    width: 140;
`

const Author = styled(Title)`   
    font-size: 13;
    font-weight: 400;
    color: #757575;
`

//Show book.
const Book = ({ navigation, title, author, image, description, buyLink }) => {
    return (
        <TouchableHighlight
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => navigation.navigate('Details', { title, author, image, description, buyLink })}
        >
            <Container >
                <Bookcover
                    source={{ uri: `${image}` }}
                />
                <Title>{title}</Title>
                <Author>{author}</Author>
            </Container>
        </TouchableHighlight>
    );
}

export default Book