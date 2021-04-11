import React from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components/native';


const Button = styled.TouchableOpacity`

`;


const ToggleButton = () => {
    return (
      <Button 
        title="Toggle drawer"
        color= "#841584"
        onPress={() => navigation.toggleDrawer()}
       /> 
    
    )
}


export default Button