import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

import { DateLine } from './components/DateLine'
import { Place } from './components/Place'
import { Temperature } from './components/Temperature'
import { WindSpeed } from './components/WindSpeed'
import { Pressure } from './components/Pressure'
import mars from './assets/mars.jpg'

const Container = styled.ImageBackground`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`

const App = () => {
  const [report, setReport] = useState({});
  const [sol, setSol] = useState('');
  const API_KEY = 'BTvuz9c7tRB1MThkY4PTiOw1Gh3IxAyYBsf7Vuj5'
  const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

  useEffect(() => {
    getReport()
  }, [API_URL]);
  
  const getReport = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then((json) => {
      setReport(json)
      setSol(json.sol_keys[5])
    })
  };

  console.log(report)
  console.log(sol)
  console.log(report.[sol])

  return (
    <Container source={mars} >
      <DateLine 
        sol={sol}
        solData={report.[sol]}  
      />
      <Place />
      <Temperature 
        solData={report.[sol]}
      />
      <WindSpeed 
        solData={report.[sol]}
      />
      <Pressure 
        solData={report.[sol]}
      />
    </Container>
  )
}

export default App
