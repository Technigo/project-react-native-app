import React, {useEffect, useState }from 'react'
import {Linking} from 'react-native'
import styled from 'styled-components/native'
import moment from 'moment'

import clock from '../assets/clock.png'

const Container = styled.View`
  backgroundColor: 'rgba(128,128,128, 0.5)'

`

const ClockImage = styled.Image`
`

const Card = styled.View`
  margin: 10px
  background: rgb(219,228,238)
  borderRadius: 10px
  padding: 20px
  boxShadow: 3px 3px
  shadowColor: grey
`

const ArticleImage = styled.Image `
  margin: 10px
  borderRadius: 20px
`

const ImageContainer = styled.View `
  alignItems: center
  paddingTop: 10px
`
const TitleText = styled.Text `
  marginTop:10px
  fontSize: 20px
  textAlign: justify
`

const AuthorName = styled.Text `
  marginTop: 10px
  letterSpacing: 2px
`
const TimedText = styled.Text `
  marginTop: 10px
  color: red
  fontSize: 15px
  textAlign: right
  marginBottom: 20px
`
const ReadMore = styled.Button`
  fontSize : 20px
  paddingTop: 15px
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
      <Container >
        {latestNews.map((news) => (
          <Card>
            <ClockImage style={{height: 30, width: 30}} source={clock}/>
            <ImageContainer>
              <ArticleImage source={{url: `${news.urlToImage}`}} style={{height: 200, width: 330}}/>  
            </ImageContainer>
            <TitleText key={news.source.id}>
              {news.title}
            </TitleText>
            <AuthorName>{news.author}</AuthorName>
            <TimedText>
              {moment(news.publishedAt).startOf('hour').fromNow()}
            </TimedText>
            <ReadMore 
              title='Read More'
              onPress={() => {
              Linking.openURL(news.url)
            }} />
          </Card>
        ))}
      </Container>
    )
}

