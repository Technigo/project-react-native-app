import React from 'react'
import styled from 'styled-components/native'

const MealList = () => {
  const API = 'apikey-here'
  const [meals, SetMeals] = useState();


  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => setMeals(json.results))
  }, [])


  return (

    <Container>
      {meals.map((meal) => (
        <Container>
          <Title> MON </Title>


          <Title> {meal.title} </Title>
          <Image
            source={{
              uri: 'bildadress${meal.bildapi}',
            }}
          />
        </Container>
  ))
}
    </Container >
  )
}

export default MealList
