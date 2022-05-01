import React, {useState} from 'react';
import { ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { 
    Container, 
    ButtonText, 
    BackgroundImage, 
    Header1,
    Header2,
    Burger, 
    WhiteBackground,
    Content,
    Instructions,
    InstructionsContainer
} from '../styles/styled-components';

const Home = ({ navigation, image }) => {
    return (
        <BackgroundImage source={image} resizeMode='cover'>
            <WhiteBackground>
                <Container>
                    <Burger onPress={() => navigation.openDrawer()}>
                        <ButtonText>
                        <Entypo name='menu' size={30} color='#000' />
                        </ButtonText>
                    </Burger>
                    {/* <Header1>Corporate </Header1> */}
                    <Content>
                        
                            <Header1>
                                Welcome to the corporate jargon generator!
                            </Header1>
                            <InstructionsContainer>
                            <Header2>
                                Instructions:
                            </Header2>
                            <Header2>Feed:</Header2>
                            <Instructions>Generate a new phrase. If you are logged in you may also save the phrase.</Instructions>
                            
                            <Header2>Saved:</Header2>
                            <Instructions>See a list with all your saved phrases.</Instructions>

                            <Header2>Login:</Header2>
                            <Instructions>Valid email consists of minimum 2 characters including an '@', password minimum 3 characters.</Instructions>
                        </InstructionsContainer>
                    </Content>
                </Container>
            </WhiteBackground>
        </BackgroundImage>
    );
};

export default Home;
