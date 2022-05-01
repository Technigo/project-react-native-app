import React, { useState } from 'react'

import { Text } from "react-native";
import { Entypo } from '@expo/vector-icons';
import helpers from '../modules/helpers';

import { 
    Container, 
    Input, 
    Button, 
    ButtonText, 
    Header1, 
    Burger, 
    WhiteBackground,
    InvalidInput,
    BackgroundImage,
    Content
} from '../styles/styled-components';

const Login = ({ 
    navigation,
    isLoggedIn, 
    setIsLoggedIn, 
    image 
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(true);

    const handleInlog = () => {
        if (helpers.checkValidEmail(email) && helpers.checkValidPassword(password) && !isLoggedIn) {
            setValid(true);
            setIsLoggedIn(!isLoggedIn);
            setEmail("");
            setPassword("");
        } else if (isLoggedIn) {
            setIsLoggedIn(!isLoggedIn);
            setValid(true);
        } else {
            setValid(false);
        }
    }   

    return (
        <BackgroundImage source={image} resizeMode='cover'>
            <WhiteBackground>
                <Container>
                    <Burger onPress={() => navigation.openDrawer()}>
                        <ButtonText>
                            <Entypo name='menu' size={30} color='#000' />
                        </ButtonText>
                    </Burger>
                    <Header1>{isLoggedIn ? 'You are logged in' : 'Log in'}</Header1>
                    {!isLoggedIn && (
                        <Content>
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
                                style={{borderColor: (helpers.checkValidEmail(email) ? 'green' : 'red')}}
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
                                style={{borderColor: (helpers.checkValidPassword(password) ? 'green' : 'red')}}
                            />
                            
                        </Content>
                    )}
                    <Content>
                        {!valid && <InvalidInput>Email or password missing or invalid</InvalidInput>}
                        <Button onPress={handleInlog}>
                            <ButtonText>{isLoggedIn ? 'Log out' : 'Log in'}</ButtonText>
                        </Button>
                    </Content>
                </Container>
            </WhiteBackground>
        </BackgroundImage>
    )
};

export default Login;
