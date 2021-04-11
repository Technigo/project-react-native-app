import React, {useState} from 'react'
import styled from 'styled-components/native'

import NewsList from './components/NewsList'
import TopHeader from './components/TopHeader'

const Container = styled.View`
  flex: 1;
  background-color: white;
  justify-content: center;
  align-items: center;
`

const App = () => {
  const[API, setAPI] = useState("https://newsapi.org/v2/top-headlines?country=se&apiKey=100a784cf0fb4828995b59dbf5a3276c")
  
  const handleCategoryChange = (category) => {
    setAPI("https://newsapi.org/v2/top-headlines?country=se&category=" + category + "&apiKey=100a784cf0fb4828995b59dbf5a3276c")
  }
  
  return (
    <Container>
      <TopHeader onCategoryChange = {handleCategoryChange}/>
      <NewsList API_KEY={API}/>
    </Container>
  )
}

export default App
