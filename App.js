import React, { useState } from 'react'
import styled from 'styled-components/native'
import { TextInput } from 'react-native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`

const Card = styled.Image`
  width: 200px;
  height: 300px;
`

const Button = styled.Button`
  
`

const App = () => {

  const [fetched, setFetched] = useState(false)
  const [value, onChangeText] = useState('Fireball');
  const [data, getData] = useState([])

  const fetchCard = () => {

    fetch(`https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/${value}`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "9e4bc04d24mshe167fe2dbc59904p1dda1ejsnb8edfa52d102",
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com"
      }
    })
    .then((response) => response.json())
    .then(response => {
      getData(response)
      setFetched(true)
      console.log(response)
    })
    .catch(err => {
      console.error(err);
    })
    
    }

  return (
    <Container>
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={text => onChangeText(text)}
      value={value}
      />
      <Button onPress={fetchCard} title="Fetch card" /> 

      { fetched === true ? (
      data.map( (card) => {
        return <Card source={{uri:`${card.img}`,}} />
      })
          
      )  : null}
    </Container>
  )
}

export default App
