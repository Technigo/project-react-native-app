import React, { useEffect, useState } from "react"
import styled from "styled-components/native"
import { Image, View, Text, TouchableOpacity, Share, ScrollView, Dimensions, Alert, Vibration, Link } from 'react-native'

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
        <Title>This is your cool app, Nina!</Title>
        <Title>Fantasticoç</Title>
        <Title>💅💅💅</Title>
        <Title>Climate News!</Title>
        {news.map((articles) => (
          <View key={articles.publishedAt}>
            <Image
              source={{ uri: articles.urlToImage }}
              style={{ width: 310, height: 200 }} />
            <Title>
              {articles.title}
            </Title>
          </View>
        ))}
      </ScrollView>
    </Container>
  )
}

export default App

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`


