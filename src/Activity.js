import React, {useState, useEffect} from "react";
import styled from "styled-components/native";
import { ScrollView, Dimensions, View, Image, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import  {Share}  from "react-native";


const Background = styled.ScrollView`
    padding: 0 30px;
    flex: 1;
    height: 100%;
    background-color: #fff;
`;


const ActivityList = styled.View`
    margin: 20px 15px 20px 0;
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

const Slider = styled.ScrollView`
    width: ${props => props.width}px;
    align-self: flex-start;
    height: 450px;
`

const ActivityImg = styled.Image`
    height: 200px;
    width: 100%;
    border-radius: 10px;
    margin-bottom: 20px;
`

const ActivityHeading = styled.Text`
    font-size: 18px;
    font-weight: bold;
    align-self: flex-start;
    margin: 40px 0 20px 0;


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


const {width} = Dimensions.get('window');
const height = width * 0.6;

const Activity = ( {navigation} ) => {
	
    const [activityList, setActivityList] = useState([]);
    const [saveList, setSaveList] = useState([])
    const [savedItemId, setSavedItemId] = useState([])

    useEffect(() => {
		fetch('https://open-api.myhelsinki.fi/v2/activities')
		.then(res => res.json())
		.then(data => setActivityList(data.rows))
	}, [])


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
    
    
    // I tried to apply AsyncStorage to save and display saved items
    // However, I faced with problem when the storage becomes empty when I refresh the browser
    // This concept is new for me. I will look and try new solutions soon
    /*
    useEffect(() => {
        AsyncStorage.setItem('value', JSON.stringify(savedItemId));
        getValue()
    }, [savedItemId])


    useEffect(() => {
        getValue()
    }, [])

    const getValue = async () => {
        try {
            const data = await AsyncStorage.getItem('value');
           	if (data !== null) { 
                setSaveList(JSON.parse(data));
           	}
        }
        catch(error) {
           	console.log(error)
        }
    }
    */


    return (
    <Background>
        <ActivityHeading>Popular Activities</ActivityHeading>
        <Slider 
        horizontal 
        pagingEnabled 
        showsHorizontalScrollIndicator={false} 
        width={width}
        height={height}
         >
        {activityList.map(item => (
            
            <ActivityList key={item.id}>
        
                <ActivityImg source={{
                    uri: item.media[0].originalUrl
                    }}
                />
                <Container>

                    <ActivityText>        
                        <ActivityTitle>{item.descriptions.en.name}</ActivityTitle>
                        <ActivityTime>{item.address.streetName}, {item.address.city}</ActivityTime>
                    </ActivityText>

                    <BtnContainer>
                       
                        <CtaButton onPress={() => navigation.navigate('Activity Details', 
                        {title: item.descriptions.en.name,
                         img: item.media[0].originalUrl,
                         description: item.descriptions.en.description,             
                         link: item.siteUrl
                        })}>
                        <ButtonText>See more</ButtonText>
                        </CtaButton>
                        <TouchableOpacity onPress={() => onShare(item.id)}>
                            <Image source={require('../assets/share.png')}  style={{ width: 28, height: 28 }}/>
                        </TouchableOpacity>
                        {/* <SaveBtn onPress={() => storeValue(item)} ><Text>❤️</Text></SaveBtn> */}
                    </BtnContainer>
                </Container>
                </ActivityList>
    ))}
        </Slider>
        {/* <ActivityHeading>Saved Activities</ActivityHeading> */}
        {/* <Slider 
            horizontal 
            pagingEnabled 
            showsHorizontalScrollIndicator={false} 
            width={width}
            height={height}
         >
                 
            {saveList && saveList.map(item => (

                    <ActivityList key={item.id}>
                    <ActivityImg source={{
                        uri: item.media[0].originalUrl
                        }}
                    />
                    <Container>

                        <ActivityText>        
                            <ActivityTitle>{item.descriptions.en.name}</ActivityTitle>
                            <ActivityTime>{item.address.streetName}, {item.address.city}</ActivityTime>
                        </ActivityText>

                        <BtnContainer>
                            <CtaButton onPress={() => onShare(item.id)}><ButtonText>Share</ButtonText></CtaButton>
                            <SaveBtn onPress={() => storeValue(item)}><Text>❤️</Text></SaveBtn>
                        </BtnContainer>
                    </Container>
                    </ActivityList>
            ))} 
        </Slider> */}

    </Background>

    )
    
    
   


}


export default Activity