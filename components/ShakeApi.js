import React, {useState, useEffect} from "react";
import { View, Text, Touchabelopacity, Image } from "react-native";
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
`;

    const [quote, setQuote]=useState({})

const generateQuote=()=>{
fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
.then(response=>response.json())
.then(data=>setQuote(data.drinks[0]))

}

useEffect(()=>{generateQuote()}, [])
///////
const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

 // const _slow = () => {
 //   Accelerometer.setUpdateInterval(1000);
 // };

 // const _fast = () => {
  //  Accelerometer.setUpdateInterval(16);
//  };

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





/////

const isShaking=(data)=>{
    const totalForce=Math.abs(data.x)+Math.abs(data.y)+Math.abs(data.z)
    return totalForce>1.78;
}

useEffect(()=>{
    if(isShaking(data)){
        generateQuote();
    }
}, [data])


return(

<Wrapper>
<Container>
    <DrinkHeader/>

<Image style={{borderWidth: 5,borderRadius:20, opacity:0.5, width: 200, height: 200 }} 
        source={{ uri:`${quote.strDrinkThumb}`}} />
<Title>How about a {quote.strDrink}?</Title>
</Container>
</Wrapper>
)



}