import React, {useState, useEffect} from 'react'
import styled from "styled-components/native"
import Header from './Components/Header'
import Img from './Components/Img'
import { Button} from 'react-native'



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


      <Button title="Chuck me!" color="#000" onPress={() => setShowJoke(chuck)} />

      {showJoke && <Joke>{chuck.value.joke}</Joke>}    

    </Container >
  )
}



const Container = styled.View`
flex: 1;
  align-items: center;
`
const Joke = styled.Text`
padding: 20px 12px 0 12px;
color: magenta;
font-size: 18px;
font-family: 'CourierNewPS-BoldMT'
font-weight: 200;
text-align: center;
`

export default App
