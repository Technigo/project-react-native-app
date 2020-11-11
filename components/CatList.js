import React from 'react'

import styled from 'styled-components/native'

import { StyleSheet } from 'react-native'

import { ShareButton } from './ShareButton'

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  margin: 0;
`
const Picture = styled.Image`
  width: 150px;
  height: 150px;
`
//box-shadow: 10px 10px 19px -8px rgba(0,0,0,0.71);

const LogoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
`

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50
  }
});

export const CatList = ({url, id}) => {

  console.log(url)
  return(
      <Container>
        <Picture
          source={{
            uri: url
          }}
        />
        <LogoWrapper>
          <ShareButton 
            url = {url}
          />
        </LogoWrapper>
      </Container>
  )
}