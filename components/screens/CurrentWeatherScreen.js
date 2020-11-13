import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import { DateLine } from '../DateLine';
import { Place } from '../Place';
import { Temperature } from '../Temperature';
import { WindSpeed } from '../WindSpeed';
import { Pressure } from '../Pressure';
import mars from '../../assets/mars.jpg';

const Container = styled.ImageBackground`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`

export const CurrentWeatherScreen = ({ navigation }) => {
  const [report, setReport] = useState({});
  const [sol, setSol] = useState('');
  const API_KEY = 'BTvuz9c7tRB1MThkY4PTiOw1Gh3IxAyYBsf7Vuj5'
  const API_URL = `https://api.nasa.gov/insight_weather/?api_key=${API_KEY}&feedtype=json&ver=1.0`;

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  });

  useEffect(() => {
    getReport()
  }, [API_URL]);

  // The API provides data with the weather report for the last seven sols (= mars days). Sometimes the latest available sol hasn't received all pieces of data yet. 
  // The goal is to show the weather report for the last day that has data for the avarage temperature.
  
  const getReport = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then((json) => {
      // Send the whole data report into the report variable.
      setReport(json)
      // Create an array of seven objects. Each object contains data for one of the past seven sols. Reverse the order to start the array with the latest data.
      const solDataArray = json.sol_keys.map(key => json[key]).reverse();
      // Find the latest sol that has data for the avarage temperature (AT). Store the index of that sol.
      const solIndex = solDataArray.findIndex(soldata => soldata.AT);
      // Reverse the order of the sol keys array to start with the latest and match the order of the solDataArray.
      (json.sol_keys).reverse();
      // Set the sol variable to be the index of the latest sol with data for the avarage temperature. In case no sol has data for the avarage temperature, take the latest one.
      if (solIndex === -1){
        setSol(json.sol_keys[0])
      }
      else {
      setSol(json.sol_keys[solIndex])
      }
    })
  };

  return (
    <Container source={mars}>
      <DateLine 
        sol={sol}
        solData={report[sol]}  
      />
      <Place />
      <Temperature 
        solData={report[sol]}
      />
      <WindSpeed 
        solData={report[sol]}
      />
      <Pressure 
        solData={report[sol]}
      />
    </Container>
  )
};
