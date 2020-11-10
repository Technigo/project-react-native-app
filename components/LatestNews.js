import React, {useEffect, useState }from 'react'
import {Text, View, Image, StyleSheet } from 'react-native'
import moment from 'moment'

export const LatestNews = () => {
  const API_URL = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=88804fd27daf4133b20f9cd7037177bf'
  const [latestNews, setLatestNews] = useState([])

  useEffect (() => { 
  fetch (API_URL)
    .then((response) => response.json())
    .then((json) => setLatestNews(json.articles))
    },[])

    const styles = StyleSheet.create({
      container: {
        paddingTop: 50,
      },
      tinyLogo: {
        width: 50,
        height: 50,
      },
      logo: {
        width: 66,
        height: 58,
      },
    });

    return (
      <View>
        {latestNews.map((news) => (
          <>
          <Text key={news.source.id}>{news.title}</Text>
          <Text>{news.author}</Text>
          <Text>{moment(news.publishedAt).startOf('hour').fromNow()}</Text>
          {/* <Text>{news.source.name}</Text> */}
          </>
        ))}
      </View>
    
    )
}
