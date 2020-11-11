import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { StyleSheet, Button } from 'react-native'

import { Header } from './components/Header'
import { CatList } from './components/CatList'
import { Footer } from './components/Footer'

const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Section = styled.View`
  display: flex;
  background-color: #fff5a5;
  justify-content: space-between;
`

const App = () => {

  const [cats, setCats] = useState([])
  const [isLoading, setLoading] = useState(true)

  const url = 'https://api.thecatapi.com/v1/images/search?limit=10&page=8&order=Desc'

  useEffect (() => {
    fetch(url, {
      headers: {
        'x-api-key': '6935237a-0116-45be-af20-aefff1e7e239'
      }
    })
    .then((response) => response.json())
    .then((json) => setCats(json))
    .catch((error) => console.error(error))
    .finally(() => setLoading(false))
  }, [])

  console.log(cats)

  return (
    <Section>
      <Header
        title = 'Everyday is caturday.'
      />
      <Container>
        {cats.map(cat => {
          return(
            <CatList
              key = {cat.id}
              url = {cat.url}
              id = {cat.id}
            />
          )
        })}
      </Container>
      <Footer
        title = 'Project by Linda Hintze'
      />
    </Section>
  )
}

export default App
