import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import {  ScrollView, View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Book from './Book.js';


const Container = styled.View`
margin-top: 30;

`
const List = styled.ScrollView`
margin-top: 20;
`

const HeadingContainer = styled.View`
margin-left: 15
`


const Heading = styled.Text`
    font-size: 22;
    font-weight: 700;
`

const BookList = (category) => {
    const API_KEY = 'IRSQzybQKfedytZHnANRlmGKIyo1XfHm';
    const URL = `https://api.nytimes.com/svc/books/v3/lists/current/${category.category}.json?api-key=${API_KEY}`; 
  
    const [books, setBooks] = useState([]) 
    const fetchBestSellers = () => {
      fetch(URL)
          .then(res => res.json())
          .then(data => setBooks(data.results.books))
          .catch(error => console.error(error));
    }
  
    useEffect(fetchBestSellers, []);
    
    return (
        <Container>
            <HeadingContainer>
                <Heading >{category.category}</Heading>
            </HeadingContainer>
            <List 
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                        {books.map(book => {
                            return (
                                <Book 
                                    key={book.title}
                                    title={book.title}
                                    author={book.author}
                                    image={book.book_image}
                                    navigation={category.navigation}
                                    description={book.description}
                                    buyLink={book.buy_links[0].url}
                                    
                                />
                            )
                        })}
                    </List>
        </Container>
    )
}
export default BookList;