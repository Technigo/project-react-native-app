import React from "react";
import  {Share}  from "react-native";
import { ScrollView, Dimensions, View, Image, TouchableOpacity, b } from 'react-native';
import styled from "styled-components/native";




const ListSlider = ( {activityList, listItem, storeValue} ) => {

    const onShare = async (id) => {
        const findItem = activityList.find(item => item.id === id);
        try {
            await Share.share({
            url: findItem.siteUrl ,
          });
         
        } catch (error) {
          alert(error.message);
        
        }
    }

    return (
        <ActivityList key={listItem.id}>
        <ActivityImg source={{
            uri: listItem.media[0].originalUrl
            }}
        />
        <Container>
            <ActivityText>        
                <ActivityTitle>{listItem.descriptions.en.name}</ActivityTitle>
                <ActivityTime>{listItem.address.streetName}, {item.address.city}</ActivityTime>
            </ActivityText>

            <BtnContainer>
                <CtaButton onPress={() => onShare(listItem.id)}><ButtonText>Share</ButtonText></CtaButton>
                <SaveBtn onPress={() => storeValue(listItem)}><Text>❤️</Text></SaveBtn>
            </BtnContainer>
        </Container>
        </ActivityList>
    )
}

const ActivityList = styled.View`
    margin: 20px 15px 0 0;
    padding: 15px;
    background-color: #fff;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border-radius: 10px;
`

const Container = styled.View`
    width: 250px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `



const ActivityImg = styled.Image`
    height: 200px;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
`


const ActivityText = styled.View`

`

const ActivityTitle = styled.Text`
    font-size: 16px;
    margin-bottom: 7px;
    line-height: 20px;
    letter-spacing: 0.2px;
    font-family: 'Arial';
`

const ActivityTime = styled.Text`
    font-size: 14px;
    color: #888;

`
const CtaButton = styled.TouchableOpacity`
    background-color: #448aff;
    width: 100px;
    padding: 10px;
    border-radius: 10px;
`
const BtnContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const ButtonText = styled.Text`
    color: #fff;
    text-align: center;
`

const SaveBtn = styled.TouchableOpacity`
`

export default ListSlider
