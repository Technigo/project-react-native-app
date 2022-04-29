import React, {useState, useEffect} from "react";
import { Image } from "react-native";
import styled from "styled-components/native"
import {Accelerometer} from 'expo-sensors'
import { DrinkHeader } from "./DrinkHeader";

export const ShakeApi=()=>{

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  text-align:center;
  margin:30px;
`;

const Wrapper = styled.View`
  flex: 1;
  background-color:#E4C2C1;
`;

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
  text-align:center;
  margin-top:50px;
  font-weight:700;
`;

const [drink, setDrink]=useState({})

const generateDrink=()=>{
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(response=>response.json())
.then(data=>setDrink(data.drinks[0]))

}

useEffect(()=>{generateDrink()}, [])
///////
const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);
  const { x, y, z } = data;
  const subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };

  const unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
      //component mounts execute the function below
    subscribe();
    //component mounts execute the function in the return statement
    return () => unsubscribe();
  }, []);

const isShaking=(data)=>{
    const totalForce=Math.abs(data.x)+Math.abs(data.y)+Math.abs(data.z)
    return totalForce>2.5;
}
useEffect(()=>{
    if(isShaking(data)){
        generateDrink();
    }
}, [data])


  return(
  <Wrapper>
     <Container>
      <DrinkHeader/>
        <Image style={{borderWidth: 5,borderRadius:20, opacity:0.6, width: 200, height: 200 }} 
               source={{ uri:`${drink.strDrinkThumb}`}} />
        <Title>How about a {drink.strDrink}?</Title>
     </Container>
   </Wrapper>
  )
}