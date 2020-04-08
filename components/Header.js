import React from 'react'
import styled from 'styled-components/native'


const Section = styled.View`
  padding: 80px 30px 30px 30px;
  background-color: #004445;
`
const Title = styled.Text`
  font-family: 'Avenir';
  font-size: 24px;
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
