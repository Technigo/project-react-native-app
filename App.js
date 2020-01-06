import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { Image, View, ScrollView, Button, Linking, StyleSheet } from 'react-native'
import moment from 'moment'
import CustomButton from "./components/CustomButton"
import PickerDemo from "./components/CategoryPicker"


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
        <View>
          <Image
            source={require('./assets/bluesky.jpg')}
            style={{ width: 340, height: 150 }} />
          <PickerDemo />
        </View>
        <Title>Climate News</Title>
        <Title3>Updated from the world {moment().calendar()}</Title3>

        {news.map((articles) => (
          <View key={articles.publishedAt}>
            <Image
              source={{ uri: articles.urlToImage }}
              style={{ width: 340, height: 200 }} />
            <Title1>
              {articles.title}
            </Title1>
            <Title2>{moment(articles.publishedAt).fromNow()}</Title2>
            <CustomButton text="Read" textColor="#01d1e5" backgroundColor="lavenderblush" />

            <Title3>{articles.content}</Title3>
            <Title3>{articles.url}</Title3>

            <Button
              title="Open Article URL"
              onPress={() => Linking.openURL(articles.url)}
              style={styles.button}
            />
          </View>
        ))}
      </ScrollView>
      <Title3>News and Images from https://newsapi.org/</Title3>

    </Container >

  )
}




export default App

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
  },
});

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
  padding-top: 50; 
  padding-left: 20;
`

const Title = styled.Text`
  font-size: 44px;
  color: black;
  font-weight: 700;
`
const Title1 = styled.Text`
  font-size: 30;
  color: black;
  padding-bottom: 25;
  font-weight:800;
`
const Title2 = styled.Text`
  font-size: 20;
  color: black;
  padding-bottom: 10;
`
const Title3 = styled.Text`
  font-size: 14;
  color: black;
  padding-top:10;
  padding-bottom: 10;
`


