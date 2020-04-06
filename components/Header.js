import React from 'react'
import styled from 'styled-components/native'


const Section = styled.View`
  padding: 80px 40px 40px 40px;
  background-color: #004445;
`
const Title = styled.Text`
  font-family: 'Avenir';
  font-weight: bold;
  color: #fff;
`

export const Header = () => {
  return (
    <Section>
      <Title>Todo Today</Title>
    </Section>
  )
}
