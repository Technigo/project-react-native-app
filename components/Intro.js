import React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin: 40px 0 0 0;
  background-color: #ff6464;
`

const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff5a5;
  text-align: center;
  margin-bottom: 5px;
`

const Paragraph = styled.Text`
  font-size: 14px;
  color: #fff5a5;
  text-align: center;
`

export const Intro = ({title, paragraph}) => {
  return (
    <Wrapper>
      <Title>
        {title}
      </Title>
      <Paragraph>
        {paragraph}
      </Paragraph>
    </Wrapper>
  )
}