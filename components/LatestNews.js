import React, {useEffect, useState }from 'react'
import styled from 'styled-components/native'
import {Text, View, Image, StyleSheet } from 'react-native'
import moment from 'moment'

export const LatestNews = () => {
  const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=88804fd27daf4133b20f9cd7037177bf'
  const [latestNews, setLatestNews] = useState([])

  useEffect (() => { 
  fetch (apiUrl)
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
          <Container>
          <TitleText key={news.source.id}>{news.title}</TitleText>
          <AuthorName>{news.author}</AuthorName>
          <TimedText>{moment(news.publishedAt).startOf('hour').fromNow()}</TimedText>
          {/* <Text>{news.source.name}</Text> */}
          </Container>
        ))}
      </View>
    
    )
}
const Container = styled.View`
  margin: 10px
  flex: 1
  border: 2px solid grey
  padding: 20px
  borderRadius: 30px
`

const TitleText = styled.Text `
  fontSize: 20px
`

const TimedText = styled.Text `
  flex:1
  marginTop: 10px
  fontSize: 15px
  textAlign: right
`

const AuthorName = styled.Text `
  marginTop: 10px

`