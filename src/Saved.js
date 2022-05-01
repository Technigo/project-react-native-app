import React from "react";
import styled from "styled-components/native";
import { Linking } from "react-native";

const Page = styled.ScrollView`
    flex: 1;
    background-color: #fff;
    padding: 30px;

`

const Title = styled.Text`
    font-size: 24px;
    text-align: center;
    margin: 20px 0;
    font-weight: bold;
`

const Description = styled.Text`
    font-size: 14px;
`

const ActivityImg = styled.Image`
    height: 200px;
    width: 100%;
    align-self: center;
    border-radius: 10px;
    margin-bottom: 20px;
`

const VisitLinkBtn = styled.TouchableOpacity`
    background-color: #000;
    width: 100px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    align-self: center;


`
const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
`


const Saved = ( {route}  ) => {


    return (
        <Page>
            <Title>{route.params.title}</Title>
    
             <ActivityImg source={{
                    uri: route.params.img
                    }} 
            />
            <Description>{route.params.description}</Description>
            <VisitLinkBtn  onPress={() => Linking.openURL(route.params.link)}>
                    <ButtonText>
                        Visit Page
                    </ButtonText>
            </VisitLinkBtn>
        </Page>
    )
}

export default Saved