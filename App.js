import React, {useState, useEffect} from 'react'
import styled from "styled-components/native"
import Header from './Components/Header'
// import Book from './Components/Book'
// import data from './Components/data.json'
import Img from './Components/Img'
// import icon 
import { Text, View, Image, TouchableHighlight, StyleSheet, Button} from 'react-native'



export const App = () => {

  const randomizer = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
  }
  
  const [chuck, setChuck] = useState(""); 
  const [showJoke, setShowJoke] = useState(false);
    
  
   useEffect(() => {

    const randomChuckIndex = randomizer(1, 99)

      fetch(`http://api.icndb.com/jokes/${randomChuckIndex}`)
      .then(res => res.json()) 
      .then((json) => setChuck(json));
    }, [showJoke])
  

  return (
    < Container >
      <Header />
      <Img />
      <Button title="Chucke me!" onPress={() => setShowJoke(chuck)} />

      {/* <TouchableHighlight onPress={() => setShowJoke(chuck)}>
      <ButtonText>Chuck me!</ButtonText>
    </TouchableHighlight> */}

     {/* <TouchableHighlight
        style={styles.button}
        //  onPress={() => setShowJoke(chuck)}
         text="Chuck me!"
         > 
    </TouchableHighlight> */}
     {/* <button type="button" onClick={() => setShowJoke(chuck)}> Chuck me!</button> */}
    
    {showJoke && <Text>{chuck.value.joke}</Text>} 

    </Container >
  )
}



const Container = styled.View`
flex: 1;
  align-items: center;
  justify-content: center;
`

const ButtonText  = styled.Text`
  font-size: 32px;
  fontFamily: 'CourierNewPS-BoldMT'
  color: blue;
  background-color: #FF00FF;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 300px;
`

const Push = styled.Button`
color: palevioletred;
font-size: 32px;
`

export default App
