import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import {  ScrollView, View, Text } from 'react-native';

import BookList from './BookList.js';

const Container = styled.ScrollView`
  flex: 1;
  margin-top: 50;
`

const App = () => {


  return (
    <Container>
      <BookList category={'hardcover-fiction'} />
      <BookList category={'paperback-nonfiction'} />
      <BookList category={'young-adult-hardcover'} />
      <BookList category={'trade-fiction-paperback'} />
    </Container>
  )
}

export default App
