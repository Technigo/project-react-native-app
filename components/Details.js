import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

const StyledView = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`
const InfoText = styled.Text`
  font-size: 18px;
  padding: 8px;
  background-color: black;
  color: white;
`
const Btn = styled.TouchableOpacity`
  background-color: black;
  height: 50px;
`
const BtnText = styled.Text`
  font-size: 25px;
  color: white;
  text-align: center
`

export const Details = ({navigation}) => {
  const [nasa, setNasa] = useState([])

  const nasaApi = 'https://api.nasa.gov/planetary/apod?api_key=08iR4WWfCjNzN30nufKyaR5LGHFjgXgynks7MDcF'

  useEffect(() => {
    fetch(nasaApi)
      .then((res) => res.json())
      .then((json) => setNasa(json))
  }, [])

  return (
    <>
      <StyledView>
        <InfoText>{nasa.explanation}</InfoText>
      </StyledView>
      <Btn title="Back" onPress={() => navigation.navigate('Home')}>
        <BtnText>Back to Picture</BtnText>
      </Btn>
    </>
  )
}
