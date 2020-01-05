import React, { useEffect, useState } from "react"
import styled from "styled-components/native"
import { Image, View, Text, TouchableOpacity, Share, ScrollView, Dimensions, Alert, Vibration, Link } from 'react-native'
import moment from 'moment'


const apiKey = `ceaaa691942f4f51925568bcf5183b80`
const url = "https://newsapi.org/v2/everything?q=climate&from=2020-01-01"

const App = () => {

  const [news, setNews] = useState([])
  useEffect(() => {
    fetch(url,
      {
        headers:
          { Authorization: apiKey }
      })
      .then(res => res.json())
      .then(json => {
        setNews(json.articles)

      })
  }, [])

  return (


    <Container>
      <ScrollView>
        <Title3>This is your cool app, Nina!</Title3>
        <Image
          source={require('./assets/bluesky.jpg')}
          style={{ width: 340, height: 150 }} />
        <Title>Climate News</Title>
        <Title3>Updated from the world</Title3>
        <Title3>{moment().calendar()}</Title3>

        {news.map((articles) => (
          <View key={articles.publishedAt}>
            <Image
              source={{ uri: articles.urlToImage }}
              style={{ width: 340, height: 200 }} />
            <Title1>
              {articles.title}
            </Title1>
            <Title2>{moment(articles.publishedAt).fromNow()}</Title2>
            <Title2>{articles.publishedAt}</Title2>
            <Title3>{articles.content}</Title3>

          </View>
        ))}
      </ScrollView>
      <Title3>News and Images from https://newsapi.org/</Title3>
    </Container >

  )
}

export default App

const Container = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
  padding-top: 50; 
  padding-left: 20;
`

const Title = styled.Text`
  font-size: 44px;
  color: white;
  font-weight: 700;
`
const Title1 = styled.Text`
  font-size: 30;
  color: white;
  padding-bottom: 25;
  font-weight:800;
`
const Title2 = styled.Text`
  font-size: 20;
  color: white;
  padding-bottom: 10;
`
const Title3 = styled.Text`
  font-size: 14;
  color: white;
  padding-top:10;
  padding-bottom: 10;
`


