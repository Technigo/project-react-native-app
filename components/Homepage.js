import React from 'react'
import styled from 'styled-components/native'
import { Linking } from 'react-native'

const HeaderContainer = styled.View`
  flex: 1;
  padding: 25px;
  border: 3px solid white;
  background-color: limegreen;
  margin: 5px;
  border-radius: 10px;
`

const Title = styled.Text`
  font-size: 35px;
  font-family: monospace;
  color: whitesmoke;
  text-shadow: 1px 1px 10px;
  text-align: right;
`
const ParagraphContainer = styled.View`
  margin-top: 100px;
  padding: 40px;
  box-shadow: 1px 1px 10px green;
`

const Paragraph = styled.Text`
  font-size: 20px;
  color: whitesmoke;
  text-align: center;
  padding: 10px;
`
const Link = styled.Text`
  font-size: 25px;
  color: whitesmoke;
  text-align: center;
  padding: 10px;
  text-decoration: underline;
`

const Header = () => {
  return (
    <HeaderContainer>
      <Title> Welcome to my first React Native App </Title>
      <ParagraphContainer>
        <Paragraph> Application developed in December 2021 </Paragraph>
        <Paragraph>by</Paragraph>
        <Paragraph>
          <Link
            style={{ color: 'white' }}
            onPress={() => Linking.openURL('https://www.jakoblindstrom.com')}
          >
            Jakob Lindström
          </Link>{' '}
          for Technigo{' '}
        </Paragraph>
      </ParagraphContainer>
    </HeaderContainer>
  )
}

export default Header
