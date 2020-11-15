import React from 'react'
import styled from 'styled-components/native'
import data from './data.json'
import Pasta from './components/pasta'
import Header from './components/header'


const View = styled.View`
  display: flex;
  height: 100%;
`

const App = () => {
  return (
    <View>
      <Header />
      <Pasta itemArray={data.pasta} />
    </View>
  )
}

export default App


