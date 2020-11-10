import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'
import { StyleSheet, Button, Text } from 'react-native'
import { ServerStyleSheet } from 'styled-components';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const Picture = styled.Image`
  width: 100%;
  height: 100%;
`

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100
  },
});


export const CatList = ({url, id}) => {
  return(
    <Container>
      <Text>{id}</Text>
      <Picture
        style={styles.img}
        source={{
          uri: 'https://cdn2.thecatapi.com/images/zqtEGxNbq.jpg'
        }}
      />
    </Container>
  )
}