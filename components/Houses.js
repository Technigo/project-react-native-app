import React, { useState, useEffect } from 'react'
import { Title } from 'react-native'
import  Button  from './Button'

export const Houses = () => {
  const [house, setHouse] = useState([])
  /*const ApiKey = '$2a$10$EoDTiYP0YOqn40Pfycl39OojHiZzqKCrsyqMK4HA/h/iFZsAwyyJe'*/
  const houseUrl = `https://www.potterapi.com/v1/sortinghat`

    useEffect(() => {
  fetch(houseUrl)
  .then((res) => res.json())
  .then(json => {
    setHouse(json.sortinghat)
  })
    })

  return (
    <Title> 
    <Button text="Lets try again" />
    </Title>
  )  
}