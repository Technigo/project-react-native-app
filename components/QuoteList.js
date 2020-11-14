import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import styled from 'styled-components/native'

const QuoteList = ({navigation}) => {

    const StaticImages = {
        Heart: require("./icons/Heart.png"),
        Sun: require("./icons/Sun.png"),
        Flower: require("./icons/Flower.png"),
        Bird: require("./icons/Bird.png"),
        Hand: require("./icons/Hand.png"),
        Leaf: require("./icons/Leaf.png"),
        BlueFlower: require("./icons/Blue-flower.png"),
    }

    return ( 
        <SafeAreaView style={styles.container}>
            <ViewContainer>
                <TextContainer>
                    <TitleText>UPLIFTING QUOTES</TitleText>
                    <SubtitleText>Click on a symbol to read a quote</SubtitleText>
                </TextContainer>
                <ButtonContainer>
                    <HeartButton onPress={()=> navigation.navigate('Heart')}>
                        <IconImage source={StaticImages.Heart} resizeMode={'contain'}/> 
                    </HeartButton> 

                    <SunButton onPress={()=> navigation.navigate('Sun')}>
                        <IconImage source={StaticImages.Sun} resizeMode={'contain'}/> 
                    </SunButton>

                    <FlowerButton onPress={()=> navigation.navigate('Flower')}>
                        <IconImage source={StaticImages.Flower} resizeMode={'contain'}/> 
                    </FlowerButton>
                    
                    <BirdButton onPress={()=> navigation.navigate('Bird')}>
                        <IconImage source={StaticImages.Bird} resizeMode={'contain'}/> 
                    </BirdButton>

                    <HandButton onPress={()=> navigation.navigate('Hand')}>
                        <IconImage source={StaticImages.Hand} resizeMode={'contain'}/> 
                    </HandButton>

                    <LeafButton onPress={()=> navigation.navigate('Leaf')}>
                        <IconImage source={StaticImages.Leaf} resizeMode={'contain'}/> 
                    </LeafButton>

                    <BlueFlowerButton onPress={()=> navigation.navigate('Blue Flower')}>
                        <IconImage source={StaticImages.BlueFlower} resizeMode={'contain'}/> 
                    </BlueFlowerButton>
                </ButtonContainer>                 
            </ViewContainer>
        </SafeAreaView>      
    );
};

const ViewContainer = styled.View`
    background-color: white; 
    height: 100%;  
    align-items: center; 
`;

const TextContainer = styled.View`
    align-items: center;
    flex-direction: row;
`;

const TitleText = styled.Text`
    font-size: 20px;
    color: #fff;
    text-align: center;
    background-color: rgb(236, 222, 95);
    padding: 10px;
    font-weight: 600;
`;

const SubtitleText = styled.Text`
    font-size: 20px;
    text-align: center;
    color: #fff;
    font-weight: 400;
    background-color: rgb(255, 192, 203);
    padding: 10px;
`;

const ButtonContainer = styled.View`    
    height: 700px;
    width: 100%;
    z-index: 1;
`;

const HeartButton = styled.TouchableOpacity`
    width: 51%;
    height: 30%;   
    padding: 5px;
    position: absolute;   
`;

const SunButton = styled.TouchableOpacity`
    width: 65%;
    height: 30%;   
    padding: 5px;
    position: absolute;
    top: 5px; 
    left: 110px;     
`;

const FlowerButton = styled.TouchableOpacity`
    width: 53%;
    height: 40%;   
    padding: 5px;
    position: absolute;
    top: 150px; 
    left: 5px;     
`;

const BirdButton = styled.TouchableOpacity`
    width: 63%;
    height: 40%;   
    padding: 5px;
    position: absolute;
    top: 110px; 
    left: 110px;     
`;

const HandButton = styled.TouchableOpacity`
    width: 45%;
    height: 45%;   
    padding: 5px;
    position: absolute;
    top: 370px; 
    left: 15px;     
`;

const LeafButton = styled.TouchableOpacity`
    width: 55%;
    height: 30%;   
    padding: 5px;
    position: absolute;
    top: 300px; 
    left: 130px;     
`;

const BlueFlowerButton = styled.TouchableOpacity`
    width: 55%;
    height: 30%;   
    padding: 5px;
    position: absolute;
    top: 450px; 
    left: 125px;     
`;

const IconImage = styled.Image`
    width: 100%;
    height: 100%;     
`;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "rgb(255, 255, 255);",
    }
});

export default QuoteList;

/* 
SafeAreaView: Renders content within the safe boundaries of a device
View: A cotainer that supports layout with flexbox, style etc. 
*/