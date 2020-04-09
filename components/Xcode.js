import React, { useEffect, useState} from 'react'
import styled from 'styled-components/native'

// STYLE:
const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`
const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

export const Xcode = () => {
  const [xlist, setXlist] = useState([])

  useEffect(() => {

  }, [])

  return (
    <Container>
      <Title>Xcode info here: MASSOR</Title>
      
    </Container>
  )
}



