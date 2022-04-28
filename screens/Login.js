import React, { useState } from 'react'

import { View, Text } from "react-native";
import { Entypo } from '@expo/vector-icons';
// import styled from 'styled-components/native';
// import { Typography } from '../styles';
import helpers from '../modules/helpers';

import { Container, Input, Button, ButtonText, Header1, Burger, SafeArea } from '../styles/styled-components';

const Login = ({ navigation, isLoggedIn, setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // const {isLoggedIn, setIsLoggedIn} = helpers.LoggedIn();

    const handleInlog = () => {
        setEmail("");
        setPassword("");
        setIsLoggedIn(!isLoggedIn);

        // if (!isLoggedIn) {
        //     navigation.navigate('Likes');
        // }
        // console.log("logged in");
        // // setIsLoggedIn(true);
        // console.log(isLoggedIn);
    }   

    return (
        // <SafeArea>
            <Container>
                <Burger onPress={() => navigation.openDrawer()}>
                    <ButtonText>
                        <Entypo name='menu' size={30} color='#000' />
                    </ButtonText>
                </Burger>
                <Header1>{isLoggedIn ? 'You are already logged in' : 'Log in'}</Header1>
                {!isLoggedIn && (
                    <View style={{width: '100%'}}>
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
                    </View>
                )}
                <View>
                    {/* <Button onPress={toggleIsLoggedIn}> */}
                    <Button onPress={handleInlog}>
                        <ButtonText>{isLoggedIn ? 'Log out' : 'Log in'}</ButtonText>
                    </Button>

                    {/* <Button onPress={() => navigation.openDrawer()}>
                        <ButtonText>
                        Open drawer
                        </ButtonText>
                    </Button> */}

                    <Button onPress={() => navigation.toggleDrawer()}>
                        <ButtonText>
                        Toggle drawer
                        </ButtonText>
                    </Button>
                </View>
                {/* {title === "Log in" &&
                    <TouchableOpacity style={Base.button} onPress={() => navigation.navigate("Register")}>
                        <Text style={Typography.button}>Register new user</Text>
                    </TouchableOpacity>
                } */}
            </Container>
        // </SafeArea>

    )
};

export default Login;