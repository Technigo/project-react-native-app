import React, { useState, useEffect } from 'react'

import { Container } from './components/Container'
import { Title } from './components/Title'

export const ApiCall = () => {
  const [villagers, setVillagers] = useState([])
  const acApi = 'http://acnhapi.com/v1/villagers/'

  useEffect(() => {
    fetch(acApi)
      .then((res) => res.json())
      .then((json) => setVillagers(json))
      .catch((error) => {console.log(error)
      })

  }, [])

  return (
    <Container>
      <Title>Herro!</Title>
      {villagers.map((villager) => (
        <Title key={villager.id}>{villager.name}</Title> 
      ))}
    </Container>
  )
}