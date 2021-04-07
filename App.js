import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import axios from 'axios'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'

const Container = styled.View`
  flex: 1;
  background-color: hotpink;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  margin: 5px;
  color: black;
`

const SearchField = styled.TouchableOpacity`
  width: 180;
  height: auto;
  padding: 10px
  border: 2px solid black;
  background-color: lightyellow;
  margin: 40px;
  
  `

const App = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch('https://api.quarantine.country/api/v1/summary/latest')
    .then((response) => response.json ())
    .then((json) => {
      setStats(json.results) 
    })
    }, [])

  return (
    <Container>
      <Title>Get the latest covid stats for Sweden!</Title>
      <Title>Click below and get informed.</Title>
      <Title>😷😷😷</Title>
      <SearchField onClick = {fetchData}><Text>Sweden Covid stats</Text></SearchField>
      <ScrollView>
        {stats.map((stat) => (
        <View key = {stat.regions.name}> 
          <Title>Total cases: {stat.regions.sweden.total_cases} </Title>
          <Title>Tested: {stat.regions.sweden.tested}</Title>
          <Title>Deaths: {stat.regions.sweden.deaths}</Title>
          <Title>Death ratio: {stat.regions.sweden.death_ratio}</Title>
          </View>
      ))}
      </ScrollView>
    </Container>
  )
}

export default App
