import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import {quotes} from '../reducers/quotes'
import { Share } from "react-native";

const ScreenContainer = styled.View`
    background-color: black;
    justify-content: center;
    align-items: center;
    padding: 20px;
    min-height: 100%;
`
const Article = styled.View`
    justify-content: center;
    align-items: center;
    width:100%;
    padding-bottom: 50px;
`
const Quote = styled.Text`
    font-size: 20px;
    color: #fff;
`
const Author = styled.Text`
    font-style: italic;
    color: #fff;
    margin-bottom: 20px;
`

const APIButton = styled.TouchableOpacity`
        font-weight: 900;
        width: 30%;
        max-width: 100px;
        background-color: tomato;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        padding: 5px;
        margin:5px;
        font-size: 16px;

`
const Buttons = styled.View`
    display:flex;
    flex-direction:row;
    justify-content:center;
    width:100%;
`

export const YourQuotes = ()=> {
    
    const yourQuotes = useSelector(store=>store.quotes.items)
    
    console.log('yourQuotes', yourQuotes)
    const onDeleteQuote = (id) => {
        console.log('id', id)
        dispatch(quotes.actions.deleteQuote(id))
    }
    const dispatch = useDispatch()

    const onShare = async (id) => {
        const findItem = yourQuotes.find(item => item.id === id);
        console.log('findItem', findItem.quote)
        try {
            await Share.share({
            message: findItem.quote + ' - ' + findItem.author
          });
         
        } catch (error) {
          alert(error.message);
        
        }
    }

    if (yourQuotes.length > 0){
        return (
            <ScreenContainer>
                {yourQuotes.map((item, index)=>(
                    <Article key={item.id}>
                        <Quote>"{item.quote}"</Quote>
                        <Author>-{item.author}</Author>
                        <Buttons>
                            <APIButton onPress={() =>onDeleteQuote(item.id)}>
                                <Text>DELETE</Text>
                            </APIButton>   
                            <APIButton onPress={()=> onShare(item.id)}>
                                <Text>SHARE</Text>
                            </APIButton>
                        </Buttons>
                    </Article> 
                ))}
            </ScreenContainer>
        )
    }
    return(
        <ScreenContainer>
            <Quote>NO SAVED QUOTES</Quote>
        </ScreenContainer>
    )
    
}

