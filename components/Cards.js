import React from 'react';
import {  useSelector } from "react-redux";
// Reducer potter
import { potter } from "../reducers/potter";
// Core components
import { View, Text, Image } from "react-native";
import styled from 'styled-components/native';

// Styled components



const Cards = () => {
    const harryPotterApi = useSelector((store) => store.potter.harryPotterApi);
    const userName = useSelector((store) => store.potter.userName);
    return (
        <>
        <Text>Welcome {userName}</Text>
        <Text>Harry Potter' Students</Text>
        
        <View>
            {harryPotterApi.map((item) => {
                return(
                
                    <>
                    {console.log(item.image)}

                    <Text>{item.name}</Text>
                    <Text>{item.house}</Text>
                    <Image source={{uri:item.image}} />
                    </>
                )
            })}

        </View>
        

        </>
    )
}
export default Cards;