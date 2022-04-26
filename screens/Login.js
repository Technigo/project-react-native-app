import React, { useState } from 'react'

import { View, Text, TextInput, TouchableOpacity } from "react-native";
// import styled from 'styled-components/native';
// import { Typography } from '../styles';
import { Container, Input, Button, ButtonText } from '../styles/styled-components';

// const LoginContainer = styled.View`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     height: 100%;
//     width: 80%;
//     margin: 0 auto;
// `;


const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Container>

            <Text>Email</Text>
            <Input
                onChangeText={(content) => {
                    setEmail(content)
                }}
                value={email}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
            />

            <Text>Password</Text>
            <Input
                onChangeText={(content) => {
                    setPassword(content)
                }}
                value={password}
                secureTextEntry={true}
                autoCapitalize="none"
                autoCompleteType="off"
                autoCorrect={false}
            />

            <Button>
                <ButtonText>Log in</ButtonText>
            </Button>

            <Button onPress={() => navigation.openDrawer()}>
                <ButtonText>
                Open drawer
                </ButtonText>
            </Button>

            <Button onPress={() => navigation.toggleDrawer()}>
                <ButtonText>
                Toggle drawer
                </ButtonText>
            </Button>
            {/* {title === "Log in" &&
                <TouchableOpacity style={Base.button} onPress={() => navigation.navigate("Register")}>
                    <Text style={Typography.button}>Register new user</Text>
                </TouchableOpacity>
            } */}
        </Container>

    )
};

export default Login;