import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { Image } from 'react-native'

const InfoText = styled.Text`
  font-size: 18px;
`

export const DailyNasa = () => {
  const [nasa, setNasa] = useState([])

  const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=08iR4WWfCjNzN30nufKyaR5LGHFjgXgynks7MDcF'

  useEffect(() => {
    fetch(nasaApi)
      .then((res) => res.json())
      .then((json) => setNasa(json))
  }, [])

  return (
    <>
      <InfoText>{nasa.title}</InfoText>
    <Image source={{uri: nasa.url}}  />
      </>
  

  )
}

