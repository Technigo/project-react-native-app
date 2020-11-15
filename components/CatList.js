import React from 'react'
import styled from 'styled-components/native'

import { ShareButton } from './ShareButton'

const Container = styled.View`
  position: relative;
  width: 50%;
  padding-top: 50%;
`
const Picture = styled.Image`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`
//box-shadow: 10px 10px 19px -8px rgba(0,0,0,0.71);

const LogoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 0;
`

export const CatList = ({url}) => {

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