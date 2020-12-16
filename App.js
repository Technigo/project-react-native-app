import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { CatList } from './components/CatList'
import { Footer } from './components/Footer'

const ScrollView = styled.ScrollView`
  background-color: #fff5a5;
`

const Section = styled.View`
  background-color: #fff5a5;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
`

const App = () => {

  const [cats, setCats] = useState([])
  const [isLoading, setisLoading] = useState(true) //remove id I don't use a loading

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
    .finally(() => setisLoading(false)) //remove if I don't use a loading state
  }, [])

  return (
    <ScrollView>
      <Section>
        <Header
          title = "Everyday is caturday."
        />
        <Container>
          <Intro
            title = "Can't get enough of cats?"
            paragraph = "In this app you can share your favorite cat pictures with all of your friends. Press the share button in the bottom left corner to send the picture to a friend."
          />
          {cats.map(cat => {
            return(
              <CatList
                key = {cat.id}
                url = {cat.url}
              />
            )
          })}
        </Container>
        <Footer
          title = 'Project by Linda Hintze'
        />
      </Section>
    </ScrollView>
  )
}

export default App
