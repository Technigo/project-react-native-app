import React, { useEffect, useState } from 'react'

import styled from 'styled-components/native'

import { Button, StyleSheet } from 'react-native'

import { ShareButton } from './ShareButton'

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
`
const Picture = styled.Image`
  width: 300px;
  height: 300px;
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
        </LogoWrapper>
      </Container>
  )
}