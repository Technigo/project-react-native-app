import React, { useState } from 'react';

const plant1 = {
  name: 'Cactus',
  image: 'assets/plant_1.jpg'
}

const plant2 = {
  name: 'Masterblend Rainbow',
  image: 'assets/plant_2.jpg'
}

const plant3 = {
  name: 'Succulent',
  image: 'assets/plant_3.jpg'
}

const plant4 = {
  name: 'Round Calathea',
  image: 'assets/plant_4.jpg'
}

const plants = [
  plant1,
  plant2,
  plant3,
  plant4
]

const randomSelector = array => {
  return array[Math.floor(Math.random() * array.length)]
}



export const pickPlant = () => {
  const [randomPlant, setRandomPlant] = useState('')

}

