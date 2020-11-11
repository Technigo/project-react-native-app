import React, { useEffect, useState } from 'react'

import styled from 'styled-components/native'

import { Button, StyleSheet, Text } from 'react-native'

import { ShareButton } from './ShareButton'

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  margin: 20px;
`
const Picture = styled.Image`
  border: solid 2px #ff8264;
`

const HappyLogo = styled.Image`
  margin: 10px;
`

const SadLogo = styled.Image`
  margin: 10px;
`

const ShareLogo = styled.Image`
  margin: 10px;
`
const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
`

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 300
  },
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
          style={styles.img}
          source={{
            uri: url
          }}
        />
        <Wrapper>
          <HappyLogo
            style={styles.logo}
            source={require('./assets/happy.svg')}
          />
          <SadLogo
            style={styles.logo}
            source={require('./assets/sad.svg')}
          />
           <ShareLogo
            style={styles.logo}
            source={require('./assets/share.svg')}
          />
          <ShareButton 
            url = {url}
          />
        </Wrapper>
      </Container>
  )
}