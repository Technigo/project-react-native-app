import React, {useEffect, useState} from 'react'

import styled from 'styled-components/native'
import { View, Text, Image } from 'react-native';

import NewsCard from './NewsCard'

// import API_KEY from '../assets/urls'

const CardContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  padding: 10px;
`
const NewsList = () => {
    const API_KEY = 'https://newsapi.org/v2/top-headlines?country=se&apiKey=100a784cf0fb4828995b59dbf5a3276c'
    const [articleList, setArticleList] = useState([])

    useEffect(() => {
        fetchNews();
     }, []);

    const fetchNews = () => {
        fetch(API_KEY) 
            .then((response) => response.json()) 
            .then((data) => setArticleList(data.articles))
            .catch((err) => console.error(err))
    }

    if (articleList === undefined) {
        return (<View></View>)
    }

    console.log (articleList)

    return (
        <CardContainer>
       {articleList.map((article) => (
        <NewsCard {...article} key={article.publishedAt} />
       ))}
       </CardContainer>


    )
}

export default NewsList 

