import React, { useEffect, useState } from 'react'

import styled from 'styled-components/native'

import { StyleSheet, Text } from 'react-native'

const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 10px;
`

const Picture = styled.Image`
  border: solid 2px #ff8264;
`
const styles = StyleSheet.create({
  img: {
    width: 200,
    height: 200
  },
});

export const CatList = ({url, id}) => {

  console.log(url)
  return(
      <Container>
        <Text>{url}</Text>
        <Picture
          style={styles.img}
          source={{
            uri: 'https://cdn2.thecatapi.com/images/zqtEGxNbq.jpg'
          }}
        />
      </Container>
  )
}