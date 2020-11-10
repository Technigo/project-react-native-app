import React, {useEffect, useState }from 'react'
import {View, Image} from 'react-native'
import styled from 'styled-components/native'
import moment from 'moment'

import refresh from '../assets/refresh.png'
import clock from '../assets/clock.png'

export const LatestNews = () => {
  const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=88804fd27daf4133b20f9cd7037177bf'
  const [latestNews, setLatestNews] = useState([])

  useEffect (() => { 
  fetch (apiUrl)
    .then((response) => response.json())
    .then((json) => setLatestNews(json.articles))
    },[])

    return (
      <View>
        {latestNews.map((news) => (
          <Container>
            <TitleText key={news.source.id}>
              {/* <ClockImage source={clock}/> */}
              {news.title}
            </TitleText>
            <AuthorName>{news.author}</AuthorName>
            <TimedText>
              {/* <RefreshImage source={refresh}/> */}
              {moment(news.publishedAt).startOf('hour').fromNow()}
            </TimedText>
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
  fontSize: 30px
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

const ClockImage = styled.Image `

`

const RefreshImage = styled.Image `

`
