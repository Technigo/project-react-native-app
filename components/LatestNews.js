import React, {useEffect, useState }from 'react'
import {FlatList, ScrollView, Text, View } from 'react-native'

export const LatestNews = () => {
  const API_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=88804fd27daf4133b20f9cd7037177bf'
  const [latestNews, setLatestNews] = useState([])

  useEffect (() => { 
  fetch (API_URL)
    .then((response) => response.json())
    .then((json) => setLatestNews(json.articles))
    },[])

    return (
      <View>
        {latestNews.map((news) => (
          <>
          <Text>{news.title}</Text>
          <Text>{news.author}</Text>
          <Text>{news.publishedAt}</Text>
          {/* <Text>{news.source.name}</Text> */}
          </>
        ))}
      </View>
    
    )
}
