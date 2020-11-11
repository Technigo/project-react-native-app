import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

import { DateLine } from './components/DateLine'
import { Place } from './components/Place'
import { Temperature } from './components/Temperature'
import { WindSpeed } from './components/WindSpeed'
import { Pressure } from './components/Pressure'

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

const App = () => {
  const [report, setReport] = useState({});
  const [sol, setSol] = useState('')
  const API_URL = 'https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0';

  useEffect(() => {
    getReport()
  }, [API_URL]);
  
  const getReport = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then((json) => {
      setReport(json)
      setSol(json.sol_keys[6])
    })
  };

  console.log(report)
  console.log(sol)
  console.log(report.[sol])

  return (
    <Container>
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
      <Title>💅💅💅</Title>
    </Container>
  )
}

export default App
