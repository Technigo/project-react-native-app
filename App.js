import React, { useState } from 'react'
import styled from 'styled-components/native'

const Container = styled.View`
  flex: 1;
  align-items: center;
  background: papayawhip;
`

const Card = styled.Image`
  flex: 1;
  width: 200px;
  height: 200px
  resizeMode: contain;
  margin: 5px
`
const Text = styled.Text`
  align-items: center;
  justify-content: center;
  color: white;
`
const FetchButton = styled.TouchableOpacity`
  background-color: tomato;
  align-items: center;
  justify-content: center;
  fontWeight: bold;
  color: white;
  width: 100px;
  height: 50px;
`
const TextField = styled.TextInput`
height: 40;
width: 200;
margin: 5px;
borderColor: tomato;
borderWidth: 3;
textAlign:center;
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
      console.log(response)
      setFetched(true)
    })
    .catch(err => {
      console.error(err);
    })
    }

  return (
    <Container>
      { fetched === true ? (
      data.map( (card) => {
        return <Card source={{uri:`${card.img}`,}} key={card.cardId} />
      })
          
      )  : null}

      <TextField
      onChangeText={text => onChangeText(text)}
      value={value}
      />
      <FetchButton onPress={fetchCard}><Text>FETCH</Text></FetchButton>
    </Container>
  )
}

export default App
