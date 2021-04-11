import React, {useEffect, useState} from 'react'
import styled from 'styled-components/native'
import { View, Text, Image, FlatList } from 'react-native';

import NewsCard from './NewsCard'
import Loading from './Loading'

const CardContainer = styled.View`
  flex: 1;
  justify-content: space-evenly;
  padding: 10px;
`

const Flat = styled.FlatList`
  flex: 1;
`;

const NewsList = ({API_KEY}) => {
    // const API_KEY = 'https://newsapi.org/v2/top-headlines?country=se&apiKey=100a784cf0fb4828995b59dbf5a3276c'
    const [articleList, setArticleList] = useState([])
    const [currentlyLoading, setCurrentlyLoading] = useState(true)

    useEffect(() => {
        fetchNews();
        setCurrentlyLoading(true);
     }, [API_KEY]);

    const fetchNews = () => {
        fetch(API_KEY) 
            .then((response) => response.json()) 
            .then((data) => setArticleList(data.articles))
            .then(() => setCurrentlyLoading(false))
            .catch((err) => console.error(err))
    }

    if (articleList === undefined) {
        return (<View></View>)
    }

    return (
        <CardContainer>
        {currentlyLoading && <Loading />}
        <Flat
            
          showsVerticalScrollIndicator = {false}
          keyExtractor={(item) => item.url}
          data={articleList}
          renderItem={({ item }) => <NewsCard {...item} />}

        />
       </CardContainer>


    )
}

export default NewsList 

