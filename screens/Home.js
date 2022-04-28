import React, {useState} from 'react';
import { Text, View, ActivityIndicator, ImageBackground } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Container, ButtonText, Button, Header1, Burger, WhiteBackground} from '../styles/styled-components';

import helpers from '../modules/helpers';

// import image from '../assets/office.jpg'
// The prop "navigation" is important if you are trying to open/toggle the drawer
//  directly via Javascript
export const Home = ({ navigation, image }) => {
    const [phrase, setPhrase] = useState(null);
    const [loading, setLoading] = useState(false);

    const onPressphrase = async () => {
        setLoading(true)
        setPhrase(await helpers.getPhrase());
        setLoading(false);
    }

    return (
        <ImageBackground source={image} resizeMode='cover' style={{width: '100%', flex: 1}}>
        <WhiteBackground>
            <Container>
            
            <Burger onPress={() => navigation.openDrawer()}>
                <ButtonText>
                <Entypo name='menu' size={30} color='#000' />
                </ButtonText>
            </Burger>
        <Header1>Home Screen</Header1>
        <View style={{width: '100%', marginBottom: 40}}>
            <Text>Welcome to the corporate jargon generator.</Text>
            <Text>Are you maybe fresh out of school or have you recently started a new job in an office enviroment? This is the help you need. Go to feed and generate yourself a phrase with some corporate bs that will make it seem like you grew up in an office. You can also create an account and save your favourite phrases to have for later!</Text>
        </View>
        <View style={{width: '100%'}}>
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
        
        </Container></WhiteBackground>
        </ImageBackground>
    );
};
