import React, { useState} from "react"
import styled from 'styled-components/native'

const theFood = [
  {
    dinner: "Tacos",
    link: "https://mittkok.expressen.se/recept/tacos-klassiskt-recept/",
  },
  {
    dinner: "spaghetti bolognese",
    link: "https://www.ica.se/recept/spaghetti-bolognese-723780/",
  },
  {
    dinner: "tikka masala",
    link: "https://www.ica.se/recept/chicken-tikka-masala-714087/",
  },

  ]


 const App = () => {
  const [food, setFood] = useState(0)  

  const showFood = () => {
    const randomIndex = Math.floor(Math.random() * theFood.length)
    setFood(theFood[randomIndex])
  }

  return (
    <Container>
      
      <Title> Vad blir de för mat? {food.dinner} </Title>

      <Button
          title="Food for the day" onPress={showFood}></Button>
        
      
    </Container>
  )

}

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const Button = styled.Button`
  font-size: 24px;
  color: palevioletred;
`

export default App
