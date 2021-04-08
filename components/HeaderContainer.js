import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TextInput, Text, StyleSheet, Button, View, TouchableOpacity } from 'react-native';

// const Container = styled.View`
//     flex: 1;
//     width: 100%;

// `

const Header = styled.View`
    background-color: black;
  flex: 1;
  width: 100%;
  align-items: center;
  `

const NameInput = styled.TextInput`
    flex: 1;
    height: 20px;
    width: 280px;
    border: 1px solid white;
    margin-top: 40px;
    padding: 10px;
`

  const HeaderText = styled.Text`
    flex: 1;
    font-size: 36px;
    color: red;
    margin: 15px;
`



const HeaderContainer = ({ name, onChangeName }) => {

    // const [name, onChangeName] = React.useState('')


    return (
        // <Container>
            <Header>
                <NameInput
                    onChangeText={onChangeName}
                    value={name}
                    placeholder='type name here'
                />
            <HeaderText> Welcome {name}</HeaderText>
            </Header>
        // </Container>
    );
  };
  
  export default HeaderContainer;