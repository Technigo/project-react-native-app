import React, { useState, useEffect }  from 'react'
import styled from 'styled-components/native'
import { Text, View } from 'react-native'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: space-between;
  align-items: center;
  justify-content: center;
`

export const CatInfo = () => {
  const [catInformation, setcatInformation] = useState ([])

  const BREEDINFO_API = 'https://api.thecatapi.com/v1/breeds'

  useEffect(() => {
    fetch (BREEDINFO_API)
      .then(res => res.json())
      .then(json => setcatInformation(json))
    },[]) 

  return (
    <Container>
      {catInformation.map(info => (
        <View key={info.id}>
        <Text>{info.name}</Text>
        </View>

      ))}
      
    </Container>

  )
}

