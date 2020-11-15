import React, {useEffect, useState }from 'react'
import {Linking, Image, View} from 'react-native'
import moment from 'moment'

import {
  Container, 
  Card, 
  ArticleImage, 
  ImageContainer, 
  TitleText, 
  AuthorName, 
  TimedText, 
  ReadMore,
  ClockImage} 
  from './Style/StyleLatestNews'

import clock from '../assets/clock.png'
import { ScrollView } from 'react-native-gesture-handler'

export const LatestNews = () => {
  const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=88804fd27daf4133b20f9cd7037177bf'
  const [latestNews, setLatestNews] = useState([])

  useEffect (() => { 
  fetch (apiUrl)
    .then((response) => response.json())
    .then((json) => setLatestNews(json.articles))
    },[])

  return (
    <ScrollView>
      <Container >
        {latestNews.map((news) => (
          <Card key={news.title}>
            <ClockImage source={clock}/>
            <ImageContainer>
              <ArticleImage source={{uri: news.urlToImage}}/>  
            </ImageContainer>
            <TitleText>{news.title}</TitleText>
            <AuthorName>{news.author}</AuthorName>
            <TimedText>
              {moment(news.publishedAt).startOf('hour').fromNow()}
            </TimedText>
            <ReadMore 
              title='Read More...'
              onPress={() => {
              Linking.openURL(news.url)
            }} />
          </Card>
        ))}
      </Container>
    </ScrollView>
  )
}

