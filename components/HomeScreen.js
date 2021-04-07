import * as React from "react";
import styled from "styled-components/native";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: black;
`;

const Title = styled.Text`
    font-size: 42px;
    color: #ff1e56;
    margin-bottom: 30px;
    font-weight: bold;
`;

const InfoText = styled.Text`
    font-size: 20px;
    color: white;
    margin-bottom: 30px;
    padding: 0 20px;
    text-align: center;
`;

const Button = styled.TouchableOpacity`
    background-color: #ff1e56;
    padding: 20px;
`;

const ButtonText = styled.Text`
    font-size: 20px;
    font-weight: bold;
`;

const Homescreen = ({ navigation }) => {

  return (
    <Container>
        <Title>coinme</Title>
        <InfoText>Here you can keep track of the most popular cryptocurrencys and buy them with fake money. You can also press the dices in the top right corner and get more information on random currencies.</InfoText>
        <Button onPress={() => navigation.navigate("Card")}><ButtonText>START BUYING</ButtonText></Button>
    </Container>
  )
}

export default Homescreen