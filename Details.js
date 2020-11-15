import React from 'react';
import styled from 'styled-components/native';
import { Linking } from 'react-native';

//Style
const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`

const Title = styled.Text`
    font-size: 22;
    color: #161616;
    font-weight: 700;
    padding-top: 5;
    letter-spacing: 0.5;
    text-transform: capitalize; 
    width: 300;
    text-align: center;
    margin-top: 15;
`

const Author = styled(Title)`   
    font-size: 16;
    font-weight: 400;
    color: #757575;
    margin-top: 0;
`

const BookDescription = styled.Text`   
    text-align: center;
    margin-left: 30;
    margin-right: 30;
    margin-top: 20;
`

const Bookcover = styled.Image`
    border-radius: 10;
`

const BuyButton = styled.Button`
    margin-top: 50;
`

//Show book details and buy link.
const Details = ({ route }) => {
    const { title, author, image, description, buyLink } = route.params;
    return (
        <Container>
            <Bookcover
                    source={{ uri: `${image}` }}
                    style={{
                        width: 230,
                        height: 400,
                    }}
                />
            <Title>{title}</Title>
            <Author>{author}</Author>
            <BookDescription>{description}</BookDescription>
            <BuyButton 
                title="Buy" 
                onPress={()=>{ Linking.openURL(buyLink).catch((err) => console.error('An error occurred', err));}}
            />
        </Container>
    );
}

export default Details;