import React, {useState, useEffect} from "react";
import { Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { useDispatch, useSelector } from "react-redux";
import {quotes} from '../reducers/quotes'
import {Share} from 'react-native'



const APIButton = styled.TouchableOpacity`
        font-weight: 900;
        width: 40%;
        max-width: 200px;
        background-color: tomato;
        margin-bottom: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50px;
        padding: 5px;
        font-size: 16px;
    `;


const ScreenContainer = styled.View`
    background-color: black;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 20px;
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

const ButtonApi = ()=> {

    const [quote, setQuote] = useState({})
    const yourQuotes = useSelector(store=>store.quotes.items)
    const [content, setContent] = useState('')
    console.log('yourQuotes', yourQuotes)
    console.log('quote', quote)
  
    
    const generateQuote = () => {
        fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => setQuote(data))
    };

    useEffect(()=> {
        generateQuote();
    }, []);

    const dispatch = useDispatch()
    const addQuote = () => {
        if(content !== quote.content){
            dispatch(quotes.actions.addQuote([quote._id, quote.content, quote.author]))
        }
        setContent(quote.content)
    }

    const onShare = async () => {
        try {
            await Share.share({
            message:  quote.content + ' - ' + quote.author
          });
         
        } catch (error) {
          alert(error.message);
        
        }
    }

    return (
        <ScreenContainer>
            <Quote>"{quote.content}"</Quote>
            <Author>-{quote.author}</Author>
            <APIButton onPress={generateQuote}>
                <Text>NEW QUOTE</Text>
            </APIButton>
            <APIButton onPress={addQuote}>
                <Text>SAVE QUOTE</Text>
            </APIButton>
            <APIButton onPress={onShare}>
                <Text>SHARE QUOTE</Text>
            </APIButton>
            
        </ScreenContainer>
    )
}

export default ButtonApi;