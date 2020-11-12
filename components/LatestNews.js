import React, {useEffect, useState }from 'react'
import {View, Image, Button} from 'react-native'
import styled from 'styled-components/native'
import moment from 'moment'

import clock from '../assets/clock.png'

const Container = styled.View`
  padding: 20px
  background: grey
`
const Card = styled.View`
  padding : 20px
  border: 2px solid grey
  marginTop: 20px
  borderRadius: 20px
  background: rgb(219,228,238)
  fontFamily: courier
`

const TitleText = styled.Text `
  paddingTop: 20px
  textAlign: justify
  fontSize: 20px
`

const TimedText = styled.Text `
  marginTop: 10px
  fontSize: 12px
  textAlign: right
  color: red
`

const AuthorName = styled.Text `
  letterSpacing: 2px
  marginTop: 20px
`

export const LatestNews = () => {
  const apiUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=88804fd27daf4133b20f9cd7037177bf'
  const [latestNews, setLatestNews] = useState([])

  useEffect (() => { 
  fetch (apiUrl)
    .then((response) => response.json())
    .then((json) => setLatestNews(json.articles))
    },[])

    return (
      <Container>
        {latestNews.map((news) => (
          <Card>
            <Image source={clock}/>
            <Image source={{url: news.urlToImage}}/>  
            {/* CANT SEEM TO GET THE IMAGE TO SHOW */}
            <TitleText key={news.source.id}>
              {news.title}
            </TitleText>
            <AuthorName>{news.author}</AuthorName>
            {/* <Button onPress={() =>  window.open({news.url}, "_blank")} 
                    title="Learn More"
                    color="#841584"
            /> */}
            <TimedText>
              {moment(news.publishedAt).startOf('hour').fromNow()}
            </TimedText>
          </Card>
        ))}
      </Container>
    )
}

