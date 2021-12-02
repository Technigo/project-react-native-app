import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    background-color: greenyellow;
    justify-content: center;
    align-items: center;
`;


const Home = () => {
    return(<Container><Text>Home</Text></Container>)
}

export default Home